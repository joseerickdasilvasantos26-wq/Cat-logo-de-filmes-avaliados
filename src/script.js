import filmes from "./filmes.js";

const listaFilmes = document.querySelector("#lista-filmes");
const recomendacao = document.querySelector("#recomendacao");
const totalFilmes = document.querySelector("#total-filmes");
const templateFilme = document.querySelector("#template-filme");
const templateRecomendacao = document.querySelector("#template-recomendacao");

const criarCard = (filme) => {
  const card = templateFilme.content.cloneNode(true);
  const nota = filme.rating.toFixed(1);

  card.querySelector("[data-filme-titulo]").textContent = filme.title;
  card.querySelector("[data-filme-ano]").textContent = String(filme.year);
  card.querySelector("[data-filme-diretor]").textContent = filme.director;
  card.querySelector("[data-filme-nota]").textContent = nota;
  const imagem = card.querySelector("[data-filme-imagem]");
  imagem.src = filme.image;
  imagem.alt = `Pôster de ${filme.title}`;
  card.querySelector("[data-filme-link]").href = `detalhes.html?id=${filme.id}`;
  card.querySelector("[data-filme-nota-container]").setAttribute(
    "aria-label",
    `Nota ${nota} de 10`,
  );

  return card;
};

const filmeRecomendado = filmes.reduce((melhorAvaliado, filme) =>
  filme.rating > melhorAvaliado.rating ? filme : melhorAvaliado,
);
const notaRecomendada = filmeRecomendado.rating.toFixed(1);
const cards = document.createDocumentFragment();

filmes.forEach((filme) => cards.append(criarCard(filme)));
listaFilmes.replaceChildren(cards);
totalFilmes.textContent = String(filmes.length).padStart(2, "0");

const conteudoRecomendacao = templateRecomendacao.content.cloneNode(true);
conteudoRecomendacao.querySelector("[data-recomendacao-titulo]").textContent =
  filmeRecomendado.title;
conteudoRecomendacao.querySelector("[data-recomendacao-ano]").textContent =
  String(filmeRecomendado.year);
conteudoRecomendacao.querySelector("[data-recomendacao-diretor]").textContent =
  filmeRecomendado.director;
conteudoRecomendacao.querySelector("[data-recomendacao-nota]").textContent =
  notaRecomendada;
recomendacao.replaceChildren(conteudoRecomendacao);
