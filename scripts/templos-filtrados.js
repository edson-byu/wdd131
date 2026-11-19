JavaScript
const templos = [
    {
        nome: "Aba Nigéria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005, 7 de agosto",
        ano: 2005,
        area: 11500,
        imagem: "imagens/aba-nigeria-temple.jpg",
        alt: "Templo de Aba Nigéria iluminado ao entardecer"
    },
    {
        nome: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888, 21 de maio",
        ano: 1888,
        area: 74792,
        imagem: "imagens/manti-utah-temple.jpg",
        alt: "Templo de Manti Utah cercado por árvores na primavera"
    },
    {
        nome: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015, 7 de junho",
        ano: 2015,
        area: 96630,
        imagem: "imagens/payson-utah-temple.jpg",
        alt: "Templo de Payson Utah sob céu claro"
    },
    {
        nome: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020, 2 de maio",
        ano: 2020,
        area: 6861,
        imagem: "imagens/yigo-guam-temple.jpg",
        alt: "Templo de Yigo Guam ao entardecer"
    },
    {
        nome: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974, 19 de novembro",
        ano: 1974,
        area: 156558,
        imagem: "imagens/washington-dc-temple.jpg",
        alt: "Templo de Washington D.C. em Kensington, Maryland"
    },
    {
        nome: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986, 10 de janeiro",
        ano: 1986,
        area: 9600,
        imagem: "imagens/lima-peru-temple.jpg",
        alt: "Templo de Lima Peru iluminado à noite"
    }
];

const containerCards = document.querySelector("#cards-container") || document.querySelector(".templos-grid") || document.querySelector("main");
const tituloFiltro = document.querySelector("#filtro-titulo") || document.querySelector("h2");
const linksFiltro = document.querySelectorAll("nav a");

function criarCardTemplo(templo) {
    const article = document.createElement("article");
    article.classList.add("templo-card");

    const titulo = document.createElement("h3");
    titulo.textContent = templo.nome;

    const local = document.createElement("p");
    local.innerHTML = `<strong>Localização:</strong> ${templo.localizacao}`;

    const consagracao = document.createElement("p");
    consagracao.innerHTML = `<strong>Consagração:</strong> ${templo.consagracao}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Área:</strong> ${templo.area.toLocaleString("pt-BR")} pés quadrados`;

    const img = document.createElement("img");
    img.src = templo.imagem;
    img.alt = templo.alt;
    img.loading = "lazy";

    article.append(titulo, local, consagracao, area, img);
    return article;
}

function exibirTemplos(lista, tituloTexto) {
    if (tituloFiltro) {
        tituloFiltro.textContent = tituloTexto;
    }

    if (!containerCards) {
        return;
    }

    containerCards.innerHTML = "";
    const fragmento = document.createDocumentFragment();

    lista.forEach((templo) => {
        fragmento.appendChild(criarCardTemplo(templo));
    });

    containerCards.appendChild(fragmento);
}

function aplicarFiltro(hash) {
    switch (hash) {
        case "#old":
            exibirTemplos(
                templos.filter((t) => t.ano < 1900),
                "Templos Antigos (antes de 1900)"
            );
            break;
        case "#new":
            exibirTemplos(
                templos.filter((t) => t.ano > 2000),
                "Templos Novos (após 2000)"
            );
            break;
        case "#large":
            exibirTemplos(
                templos.filter((t) => t.area > 90000),
                "Templos Grandes (> 90.000 pés²)"
            );
            break;
        case "#small":
            exibirTemplos(
                templos.filter((t) => t.area < 10000),
                "Templos Pequenos (< 10.000 pés²)"
            );
            break;
        case "#home":
        default:
            exibirTemplos(templos, "Todos os Templos");
            break;
    }
}

linksFiltro.forEach((link) => {
    link.addEventListener("click", (event) => {
        const destino = link.getAttribute("href");
        if (destino && destino.startsWith("#")) {
            event.preventDefault();
            window.location.hash = destino;
            aplicarFiltro(destino);
        }
    });
});

window.addEventListener("hashchange", () => {
    aplicarFiltro(window.location.hash || "#home");
});

document.addEventListener("DOMContentLoaded", () => {
    aplicarFiltro(window.location.hash || "#home");
});