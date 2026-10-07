const formatoNumero = new Intl.NumberFormat("pt-BR");
const formatoPercentual = new Intl.NumberFormat("pt-BR", {
  maximumFractionDigits: 1,
});

export const calcularIndicadores = (filme) => {
  const notas = [filme.criticScore, filme.audienceScore].filter(Number.isFinite);
  const mediaAprovacao = notas.length
    ? notas.reduce((total, nota) => total + nota, 0) / notas.length
    : 0;
  const quantidadeAvaliacoes =
    (Number(filme.criticReviews) || 0) +
    (Number(filme.audienceRatingCount) || 0);

  return {
    mediaAprovacao,
    quantidadeAvaliacoes,
    classificacao: classificarFilme(mediaAprovacao, filme.recommendationOverride),
  };
};

const estilosClassificacao = {
  "Muito recomendado": "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
  Recomendado: "border-sky-300/30 bg-sky-300/10 text-sky-200",
  Mediano: "border-slate-300/30 bg-slate-300/10 text-slate-200",
};

export const classificarFilme = (mediaAprovacao, ajusteEditorial) => {
  if (ajusteEditorial && estilosClassificacao[ajusteEditorial]) {
    return { nome: ajusteEditorial, classes: estilosClassificacao[ajusteEditorial] };
  }

  if (mediaAprovacao >= 90) {
    return {
      nome: "Muito recomendado",
      classes: estilosClassificacao["Muito recomendado"],
    };
  }

  if (mediaAprovacao >= 75) {
    return {
      nome: "Recomendado",
      classes: estilosClassificacao.Recomendado,
    };
  }

  return {
    nome: "Mediano",
    classes: estilosClassificacao.Mediano,
  };
};

export const formatarAprovacao = (mediaAprovacao) =>
  `${formatoPercentual.format(mediaAprovacao)}%`;

export const formatarQuantidadeAvaliacoes = (quantidade) =>
  `Mais de ${formatoNumero.format(quantidade)} avaliações contabilizadas`;
