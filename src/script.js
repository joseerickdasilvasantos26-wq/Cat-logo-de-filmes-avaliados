const filmes = [
    {

        "id": 1,
        "title": "Expresso da Meia-Noite",
        "year": 1978,
        "director": "Alan Parker",
        "rating": 8.0,
        "recommendationOverride": "Mediano",
        "image": "Imagens%20Ultilizados/expresso-da-meia-noite.jpg?v=2",
        "imageSource": "https://upload.wikimedia.org/wikipedia/en/5/52/Original_poster_for_Midnight_Express%2C_1978.jpg",
        "genre": "Drama, biografia e crime",
        "runtime": "2h 01min",
        "synopsis": "Depois de ser preso na Turquia por contrabando de drogas, Billy Hayes enfrenta uma longa sentença e procura uma forma de escapar.",
        "criticScore": 90,
        "criticReviews": 31,
        "audienceScore": 88,
        "audienceRatings": "25 mil+",
        "audienceRatingCount": 25000,
        "reviews": [
            { "title": "Um suspense claustrofóbico", "text": "A sensação de isolamento acompanha Billy durante toda a história. A direção mantém a tensão sem transformar a fuga em uma aventura leve." },
            { "title": "Drama intenso", "text": "A atuação de Brad Davis dá peso ao desgaste do personagem. É um filme duro, que permanece na memória depois dos créditos." },
        ],
        "ratingsSource": "https://www.rottentomatoes.com/m/midnight_express",
        "cast": [
            { "name": "Brad Davis", "character": "Billy Hayes" },
            { "name": "Randy Quaid", "character": "Jimmy Booth" },
            { "name": "John Hurt", "character": "Max" },
            { "name": "Bo Hopkins", "character": "Tex" },
            { "name": "Paul L. Smith", "character": "Hamidou" }
        ]
    },
    {
        "id": 2,
        "title": "O Poderoso Chefão",
        "year": 1972,
        "director": "Francis Ford Coppola",
        "rating": 9.0,
        "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg",
        "imageSource": "https://www.imdb.com/title/tt0068646/",
        "genre": "Crime e drama",
        "runtime": "2h 57min",
        "synopsis": "Don Vito Corleone lidera uma poderosa família mafiosa. Quando seu filho Michael entra nos negócios da família, passa a enfrentar um ciclo de violência, poder e lealdade.",
        "criticScore": 97,
        "criticReviews": 155,
        "audienceScore": 98,
        "audienceRatings": "900 mil+",
        "audienceRatingCount": 900000,
        "reviews": [
            { "title": "Família, poder e lealdade", "text": "A transformação de Michael conduz uma trama cuidadosa sobre escolhas e poder. O elenco dá força até às conversas mais discretas." },
            { "title": "Um ritmo deliberado", "text": "As cenas ganham espaço para construir relações e tensão. Quem prefere histórias aceleradas pode estranhar o começo mais calmo." },
        ],
        "ratingsSource": "https://www.rottentomatoes.com/m/the_godfather",
        "cast": [
            { "name": "Marlon Brando", "character": "Don Vito Corleone" },
            { "name": "Al Pacino", "character": "Michael Corleone" },
            { "name": "James Caan", "character": "Santino ‘Sonny’ Corleone" },
            { "name": "Richard S. Castellano", "character": "Pete Clemenza" },
            { "name": "Robert Duvall", "character": "Tom Hagen" },
            { "name": "Diane Keaton", "character": "Kay Adams" }
        ]
    },
    {

        "id": 3,
        "title": "Requiem para um Sonho",
        "year": 2000,
        "director": "Darren Aronofsky",
        "rating": 8.3,
        "image": "Imagens%20Ultilizados/requiem-para-um-sonho.jpg",
        "imageSource": "https://upload.wikimedia.org/wikipedia/en/9/92/Requiem_for_a_dream.jpg",
        "genre": "Drama e suspense",
        "runtime": "1h 41min",
        "synopsis": "Sara, seu filho Harry e os amigos Marion e Tyrone perseguem sonhos diferentes. Aos poucos, suas dependências passam a controlar suas escolhas e a transformar suas vidas.",
        "criticScore": 80,
        "criticReviews": 182,
        "audienceScore": 93,
        "audienceRatings": "410 mil+",
        "audienceRatingCount": 410000,
        "reviews": [
            { "title": "Montagem que transmite urgência", "text": "Cortes rápidos e imagens repetidas aproximam o espectador das compulsões dos personagens. A forma do filme reforça o drama." },
            { "title": "Uma experiência pesada", "text": "As atuações sustentam uma história sobre dependência e perda. O tom intenso pode ser difícil para quem procura um filme mais leve." },
        ],
        "ratingsSource": "https://www.rottentomatoes.com/m/requiem_for_a_dream",
        "cast": [
            { "name": "Ellen Burstyn", "character": "Sara Goldfarb" },
            { "name": "Jared Leto", "character": "Harry Goldfarb" },
            { "name": "Jennifer Connelly", "character": "Marion Silver" },
            { "name": "Marlon Wayans", "character": "Tyrone C. Love" },
            { "name": "Christopher McDonald", "character": "Tappy Tibbons" }
        ]
    },
    {
        "id": 4,
        "title": "Uma odisseia no Espaço",
        "year": 1968,
        "director": "Stanley Kubrick",
        "rating": 8.3,
        "image": "Imagens%20Ultilizados/2001-uma-odisseia-no-espaco-capa.jpg?v=1",
        "imageSource": "https://upload.wikimedia.org/wikipedia/en/1/11/2001_A_Space_Odyssey_%281968%29.png",
        "genre": "Ficção científica",
        "runtime": "2h 19min",
        "synopsis": "Em uma missão espacial rumo a Júpiter, os astronautas Dave Bowman e Frank Poole contam com o computador HAL 9000. Quando HAL começa a agir de forma inesperada, a tripulação precisa questionar em quem pode confiar.",
        "criticScore": 90,
        "criticReviews": 166,
        "audienceScore": 88,
        "audienceRatings": "300 mil+",
        "audienceRatingCount": 300000,
        "reviews": [
            { "title": "A imagem conta a história", "text": "Com poucos diálogos, o filme usa enquadramentos, música e efeitos para conduzir a viagem. É uma obra visualmente marcante." },
            { "title": "Ficção científica contemplativa", "text": "A narrativa deixa perguntas em aberto e pede atenção ao ritmo. Essa escolha é parte da experiência, embora possa parecer lenta." },
        ],
        "ratingsSource": "https://www.rottentomatoes.com/m/2001_a_space_odyssey",
        "cast": [
            { "name": "Keir Dullea", "character": "Dr. Dave Bowman" },
            { "name": "Gary Lockwood", "character": "Dr. Frank Poole" },
            { "name": "William Sylvester", "character": "Dr. Heywood R. Floyd" },
            { "name": "Daniel Richter", "character": "Moonwatcher" },
            { "name": "Leonard Rossiter", "character": "Dr. Andrei Smyslov" }
        ]
    },
    {
        "id": 5,
        "title": "O Silêncio dos Inocentes",    
        "year": 1991,
        "director": "Jonathan Demme",
        "rating": 8.6,
        "image": "Imagens%20Ultilizados/o-silencio-dos-inocentes.jpg",
        "imageSource": "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg",
        "genre": "Suspense, crime e drama",
        "runtime": "1h 58min",
        "synopsis": "A agente em treinamento Clarice Starling procura a ajuda do psiquiatra Hannibal Lecter, preso por crimes violentos, para entender o perfil de um assassino que está sendo investigado pelo FBI.",
        "criticScore": 95,
        "criticReviews": 161,
        "audienceScore": 95,
        "audienceRatings": "700 mil+",
        "audienceRatingCount": 700000,
        "reviews": [
            { "title": "Suspense construído no diálogo", "text": "Os encontros entre Clarice e Lecter criam tensão com palavras e silêncios. Jodie Foster e Anthony Hopkins conduzem o confronto." },
            { "title": "Investigação e psicologia", "text": "O caso policial avança junto com o estudo dos personagens. O equilíbrio entre investigação e suspense mantém a história envolvente." },
        ],
        "ratingsSource": "https://www.rottentomatoes.com/m/silence_of_the_lambs",
        "cast": [
            { "name": "Jodie Foster", "character": "Clarice Starling" },
            { "name": "Anthony Hopkins", "character": "Dr. Hannibal Lecter" },
            { "name": "Scott Glenn", "character": "Jack Crawford" },
            { "name": "Ted Levine", "character": "Jame ‘Buffalo Bill’ Gumb" },
            { "name": "Anthony Heald", "character": "Dr. Frederick Chilton" }
        ]
    },
    {
        "id": 6,
        "title": "A espera de um milagre",
        "year": 1999,
        "director": "Frank Darabont",
        "rating": 8.6,
        "image": "Imagens%20Ultilizados/a-espera-de-um-milagre.jpg",
        "imageSource": "https://upload.wikimedia.org/wikipedia/en/e/e2/The_Green_Mile_%28movie_poster%29.jpg",
        "genre": "Drama e fantasia",
        "runtime": "3h 09min",
        "synopsis": "No corredor da morte, o guarda Paul Edgecomb conhece John Coffey, um homem condenado por assassinato. A bondade e o dom misterioso de Coffey fazem Paul rever suas certezas sobre o caso.",
        "criticScore": 78,
        "criticReviews": 134,
        "audienceScore": 94,
        "audienceRatings": "520 mil+",
        "audienceRatingCount": 520000,
        "reviews": [
            { "title": "Fantasia com emoção", "text": "A rotina da prisão contrasta com os acontecimentos extraordinários da história. O elenco dá humanidade aos personagens." },
            { "title": "Uma narrativa extensa", "text": "O ritmo pausado permite criar vínculos e desenvolver o drama. A duração pede disponibilidade, mas amplia o impacto do final." },
        ],
        "ratingsSource": "https://www.rottentomatoes.com/m/green_mile",
        "cast": [
            { "name": "Tom Hanks", "character": "Paul Edgecomb" },
            { "name": "Michael Clarke Duncan", "character": "John Coffey" },
            { "name": "David Morse", "character": "Brutus ‘Brutal’ Howell" },
            { "name": "Bonnie Hunt", "character": "Janice Edgecomb" },
            { "name": "James Cromwell", "character": "Warden Hal Moores" }
        ]
    }



];

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
