import { filmes } from "./filmes.js";

const secaoFilmes = document.querySelector("#filmes");

if (secaoFilmes) {
    const titulo = document.createElement("h2");
    titulo.className = "mb-6 text-2xl font-bold text-gray-900";
    titulo.textContent = "Filmes avaliados";

    const lista = document.createElement("div");
    lista.className = "grid gap-5 sm:grid-cols-2 lg:grid-cols-3";
    lista.setAttribute("aria-label", "Lista de filmes avaliados");

    for (const filme of filmes) {
        const cartao = document.createElement("article");
        cartao.className = "rounded-xl border border-gray-200 bg-white p-5 shadow-sm";

        const nome = document.createElement("h3");
        nome.className = "text-lg font-semibold text-gray-900";
        nome.textContent = filme.title;

        const ano = document.createElement("p");
        ano.className = "mt-2 text-sm text-gray-600";
        ano.textContent = `Ano: ${filme.year}`;

        const diretor = document.createElement("p");
        diretor.className = "mt-1 text-sm text-gray-600";
        diretor.textContent = `Direção: ${filme.director}`;

        const avaliacao = document.createElement("p");
        avaliacao.className = "mt-4 font-medium text-amber-700";
        avaliacao.textContent = `★ ${filme.rating.toLocaleString("pt-BR", {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
        })} / 10`;
        avaliacao.setAttribute("aria-label", `Avaliação: ${filme.rating} de 10`);

        cartao.append(nome, ano, diretor, avaliacao);
        lista.append(cartao);
    }

    secaoFilmes.append(titulo, lista);
}
