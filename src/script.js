import filmes from "./filmes.js";

const formatoNumero = new Intl.NumberFormat("pt-BR");
const formatoPercentual = new Intl.NumberFormat("pt-BR", {
  maximumFractionDigits: 1,
});

const estilosClassificacao = {
  "Muito recomendado": "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
  Recomendado: "border-sky-300/30 bg-sky-300/10 text-sky-200",
  Mediano: "border-slate-300/30 bg-slate-300/10 text-slate-200",
};

function calcularMedia(notas) {
  let soma = 0;

  for (const nota of notas) {
    soma += nota;
  }

  if (notas.length === 0) {
    return 0;
  }

  return soma / notas.length;
}

function classificarFilme(mediaAprovacao, ajusteEditorial) {
  if (ajusteEditorial && estilosClassificacao[ajusteEditorial]) {
    return {
      nome: ajusteEditorial,
      classes: estilosClassificacao[ajusteEditorial],
    };
  } else if (mediaAprovacao >= 90) {
    return {
      nome: "Muito recomendado",
      classes: estilosClassificacao["Muito recomendado"],
    };
  } else if (mediaAprovacao >= 75) {
    return {
      nome: "Recomendado",
      classes: estilosClassificacao.Recomendado,
    };
  } else {
    return {
      nome: "Mediano",
      classes: estilosClassificacao.Mediano,
    };
  }
}

function calcularIndicadores(filme) {
  const notas = [filme.criticScore, filme.audienceScore].filter(Number.isFinite);
  const mediaAprovacao = calcularMedia(notas);
  const quantidadeAvaliacoes =
    (Number(filme.criticReviews) || 0) +
    (Number(filme.audienceRatingCount) || 0);

  return {
    mediaAprovacao,
    quantidadeAvaliacoes,
    classificacao: classificarFilme(mediaAprovacao, filme.recommendationOverride),
  };
}

function formatarAprovacao(mediaAprovacao) {
  return `${formatoPercentual.format(mediaAprovacao)}%`;
}

function formatarQuantidadeAvaliacoes(quantidade) {
  return `Mais de ${formatoNumero.format(quantidade)} avaliações contabilizadas`;
}

function criarCard(filme) {
  const templateFilme = document.querySelector("#template-filme");
  const card = templateFilme.content.cloneNode(true);
  const indicadores = calcularIndicadores(filme);
  const nota = Number(filme.rating).toFixed(1);
  const classificacao = card.querySelector("[data-filme-classificacao]");

  card.querySelector("[data-filme-titulo]").textContent = filme.title;
  card.querySelector("[data-filme-ano]").textContent = String(filme.year);
  card.querySelector("[data-filme-diretor]").textContent = filme.director;
  card.querySelector("[data-filme-nota]").textContent = nota;
  card.querySelector("[data-filme-media]").textContent = formatarAprovacao(
    indicadores.mediaAprovacao,
  );
  card.querySelector("[data-filme-total-avaliacoes]").textContent =
    formatarQuantidadeAvaliacoes(indicadores.quantidadeAvaliacoes);
  classificacao.textContent = indicadores.classificacao.nome;
  classificacao.classList.add(...indicadores.classificacao.classes.split(" "));

  const imagem = card.querySelector("[data-filme-imagem]");
  imagem.src = filme.image;
  imagem.alt = `Pôster de ${filme.title}`;
  card.querySelector("[data-filme-link]").href = `detalhes.html?id=${filme.id}`;
  card.querySelector("[data-filme-nota-container]").setAttribute(
    "aria-label",
    `Nota do catálogo ${nota} de 10`,
  );

  return card;
}

function renderizarCatalogo() {
  const listaFilmes = document.querySelector("#lista-filmes");
  const recomendacao = document.querySelector("#recomendacao");
  const totalFilmes = document.querySelector("#total-filmes");
  const mediaGeralElemento = document.querySelector("#media-geral");
  const classificacaoGeralElemento = document.querySelector(
    "#classificacao-geral",
  );
  const templateRecomendacao = document.querySelector("#template-recomendacao");
  const temFilmes = filmes.length > 0;

  if (temFilmes) {
    const indicadoresFilmes = filmes.map((filme) => calcularIndicadores(filme));
    const medias = indicadoresFilmes.map((indicadores) => indicadores.mediaAprovacao);
    const mediaGeral = calcularMedia(medias);
    const classificacaoGeral = classificarFilme(mediaGeral);
    const cards = document.createDocumentFragment();
    let filmeRecomendado = filmes[0];

    for (const filme of filmes) {
      cards.append(criarCard(filme));

      if (filme.rating > filmeRecomendado.rating) {
        filmeRecomendado = filme;
      }
    }

    listaFilmes.replaceChildren(cards);
    totalFilmes.textContent = String(filmes.length).padStart(2, "0");
    mediaGeralElemento.textContent = formatarAprovacao(mediaGeral);
    classificacaoGeralElemento.textContent = classificacaoGeral.nome;
    classificacaoGeralElemento.classList.add(
      ...classificacaoGeral.classes.split(" "),
    );

    const conteudoRecomendacao = templateRecomendacao.content.cloneNode(true);
    conteudoRecomendacao.querySelector("[data-recomendacao-titulo]").textContent =
      filmeRecomendado.title;
    conteudoRecomendacao.querySelector("[data-recomendacao-ano]").textContent =
      String(filmeRecomendado.year);
    conteudoRecomendacao.querySelector(
      "[data-recomendacao-diretor]",
    ).textContent = filmeRecomendado.director;
    conteudoRecomendacao.querySelector("[data-recomendacao-nota]").textContent =
      Number(filmeRecomendado.rating).toFixed(1);
    recomendacao.replaceChildren(conteudoRecomendacao);

    console.log(`Total de filmes no catálogo: ${filmes.length}`);
    console.log(`Média geral de aprovação: ${formatarAprovacao(mediaGeral)}`);
    console.log(`Classificação final: ${classificacaoGeral.nome}`);
  } else {
    listaFilmes.textContent = "Nenhum filme está disponível no catálogo.";
    totalFilmes.textContent = "00";
    mediaGeralElemento.textContent = "—";
    classificacaoGeralElemento.textContent = "Sem dados";
  }
}

function renderizarDetalhes(filme) {
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
  document.querySelector("#nota-catalogo").textContent = Number(filme.rating).toFixed(1);
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

  for (const ator of filme.cast) {
    const itemElenco = templateAtor.content.cloneNode(true);
    itemElenco.querySelector("[data-ator-nome]").textContent = ator.name;
    itemElenco.querySelector("[data-ator-personagem]").textContent = ator.character;
    elenco.append(itemElenco);
  }

  listaElenco.replaceChildren(elenco);

  const templateResenha = document.querySelector("#template-resenha");
  const listaResenhas = document.querySelector("#lista-resenhas");
  const resenhas = document.createDocumentFragment();

  for (const resenha of filme.reviews) {
    const itemResenha = templateResenha.content.cloneNode(true);
    itemResenha.querySelector("[data-resenha-titulo]").textContent = resenha.title;
    itemResenha.querySelector("[data-resenha-texto]").textContent = resenha.text;
    resenhas.append(itemResenha);
  }

  listaResenhas.replaceChildren(resenhas);
  document.querySelector("#detalhes-filme").hidden = false;
  return filme.id;
}

const listaFilmes = document.querySelector("#lista-filmes");

if (listaFilmes) {
  renderizarCatalogo();
} else {
  const parametros = new URLSearchParams(window.location.search);
  const idFilme = Number(parametros.get("id"));
  const filmeEncontrado = filmes.find((filme) => filme.id === idFilme);

  if (filmeEncontrado) {
    renderizarDetalhes(filmeEncontrado);
  } else {
    document.querySelector("#filme-nao-encontrado").hidden = false;
  }
}
