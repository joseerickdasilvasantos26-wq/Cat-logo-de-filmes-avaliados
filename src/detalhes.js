import filmes from "./filmes.js";

const parametros = new URLSearchParams(window.location.search);
const idFilme = Number(parametros.get("id"));
const filme = filmes.find((item) => item.id === idFilme);
const paginaDetalhes = document.querySelector("#detalhes-filme");
const paginaErro = document.querySelector("#filme-nao-encontrado");

if (!filme) {
  paginaErro.hidden = false;
} else {
  document.title = `${filme.title} | Catálogo de Filmes`;

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
  paginaDetalhes.hidden = false;
}
