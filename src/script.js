import filmes from "./filmes.js";

const listaFilmes = document.querySelector("#lista-filmes");
const recomendacao = document.querySelector("#recomendacao");
const totalFilmes = document.querySelector("#total-filmes");

const criarCard = ({ title, year, director, category, rating, synopsis }) => `
  <article class="group flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/75 p-6 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-xl hover:shadow-black/25">
    <div class="mb-5 flex items-start justify-between gap-4">
      <span class="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold tracking-wide text-amber-200">${category}</span>
      <span class="shrink-0 text-sm text-slate-400">${year}</span>
    </div>
    <h3 class="text-xl font-semibold leading-snug tracking-tight text-white">${title}</h3>
    <p class="mt-2 text-sm text-slate-400">Direção: ${director}</p>
    <p class="mt-5 flex-1 text-sm leading-7 text-slate-300">${synopsis}</p>
    <div class="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
      <span class="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">Nota</span>
      <span class="inline-flex items-center gap-2 rounded-lg bg-amber-300/10 px-3 py-1.5 font-bold tabular-nums text-amber-200" aria-label="Nota ${rating.toFixed(1)} de 10">
        <span aria-hidden="true">★</span> ${rating.toFixed(1)}<span class="text-xs font-medium text-amber-100/60">/ 10</span>
      </span>
    </div>
  </article>
`;

const filmeRecomendado = [...filmes].sort((a, b) => b.rating - a.rating)[0];

listaFilmes.innerHTML = filmes.map(criarCard).join("");
totalFilmes.textContent = String(filmes.length).padStart(2, "0");
recomendacao.innerHTML = `
  <p class="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Nossa escolha em destaque</p>
  <h3 class="mt-3 text-2xl font-semibold tracking-tight text-white">${filmeRecomendado.title}</h3>
  <p class="mt-1 text-sm text-slate-400">${filmeRecomendado.year} <span aria-hidden="true">·</span> ${filmeRecomendado.category}</p>
  <p class="mt-4 max-w-2xl text-sm leading-7 text-slate-300">${filmeRecomendado.synopsis}</p>
  <p class="mt-5 inline-flex items-center gap-2 font-semibold text-amber-200"><span aria-hidden="true">★</span> ${filmeRecomendado.rating.toFixed(1)} <span class="text-sm font-normal text-slate-400">— a maior nota do catálogo</span></p>
`;
