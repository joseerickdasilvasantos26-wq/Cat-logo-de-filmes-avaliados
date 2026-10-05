import filmes from "./filmes.js";
import {
  calcularIndicadores,
  formatarAprovacao,
  formatarQuantidadeAvaliacoes,
} from "./avaliacoes.js";

const parametros = new URLSearchParams(window.location.search);
const idFilme = Number(parametros.get("id"));
const filme = filmes.find((item) => item.id === idFilme);
const paginaDetalhes = document.querySelector("#detalhes-filme");
const paginaErro = document.querySelector("#filme-nao-encontrado");

if (!filme) {
  paginaErro.hidden = false;
} else {
  document.title = `${filme.title} | CineAtlas`;

  const indicadores = calcularIndicadores(filme);
  const imagem = document.querySelector("#imagem-filme");
  imagem.src = filme.image;
  imagem.alt = `Pôster de ${filme.title}`;

  document.querySelector("#titulo-filme").textContent = filme.title;
  document.querySelector("#ano-filme").textContent = String(filme.year);
  document.querySelector("#duracao-filme").textContent = filme.runtime;
  document.querySelector("#diretor-filme").textContent = filme.director;
  document.querySelector("#sinopse-filme").textContent = filme.synopsis;
  document.querySelector("#genero-filme").textContent = filme.genre;
  document.querySelector("#genero-resumo").textContent = filme.genre;
  document.querySelector("#nota-catalogo").textContent = filme.rating.toFixed(1);
  document.querySelector("#nota-critica").textContent = `${filme.criticScore}%`;
  document.querySelector("#quantidade-criticas").textContent =
    `${filme.criticReviews} críticas contabilizadas`;
  document.querySelector("#nota-publico").textContent = `${filme.audienceScore}%`;
  document.querySelector("#quantidade-avaliacoes").textContent =
    `${filme.audienceRatings} avaliações do público`;
  document.querySelector("#media-aprovacao").textContent = formatarAprovacao(
    indicadores.mediaAprovacao,
  );
  document.querySelector("#total-avaliacoes").textContent =
    formatarQuantidadeAvaliacoes(indicadores.quantidadeAvaliacoes);

  const classificacao = document.querySelector("#classificacao-filme");
  classificacao.textContent = indicadores.classificacao.nome;
  classificacao.classList.add(...indicadores.classificacao.classes.split(" "));
  document.querySelector("#fonte-notas").href = filme.ratingsSource;

  const templateAtor = document.querySelector("#template-ator");
  const listaElenco = document.querySelector("#lista-elenco");
  const elenco = document.createDocumentFragment();

  filme.cast.forEach(({ name, character }) => {
    const ator = templateAtor.content.cloneNode(true);
    ator.querySelector("[data-ator-nome]").textContent = name;
    ator.querySelector("[data-ator-personagem]").textContent = character;
    elenco.append(ator);
  });

  listaElenco.replaceChildren(elenco);

  const templateResenha = document.querySelector("#template-resenha");
  const listaResenhas = document.querySelector("#lista-resenhas");
  const resenhas = document.createDocumentFragment();

  filme.reviews.forEach(({ title, text }) => {
    const resenha = templateResenha.content.cloneNode(true);
    resenha.querySelector("[data-resenha-titulo]").textContent = title;
    resenha.querySelector("[data-resenha-texto]").textContent = text;
    resenhas.append(resenha);
  });

  listaResenhas.replaceChildren(resenhas);
  paginaDetalhes.hidden = false;
}
