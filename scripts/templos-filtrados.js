const templos = [
    {
        nome: "Aba Nigéria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005, 7 de agosto",
        ano: 2005,
        area: 11500,
        imagem: "imagens/fortaleza-temple.jpg",
        alt: "Templo em área ajardinada sob céu claro"
    },
    {
        nome: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888, 21 de maio",
        ano: 1888,
        area: 74792,
        imagem: "imagens/recife_temple.jpg",
        alt: "Templo histórico com jardins e árvores"
    },
    {
        nome: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015, 7 de junho",
        ano: 2015,
        area: 96630,
        imagem: "imagens/sao_paulo_temple.jpg",
        alt: "Templo imponente com torre e jardins"
    },
    {
        nome: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020, 2 de maio",
        ano: 2020,
        area: 6861,
        imagem: "imagens/curitiba_temple.jpg",
        alt: "Templo em área arborizada"
    },
    {
        nome: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974, 19 de novembro",
        ano: 1974,
        area: 156558,
        imagem: "imagens/rio_de_janeiro_temple.jpg",
        alt: "Templo amplo cercado por palmeiras"
    },
    {
        nome: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986, 10 de janeiro",
        ano: 1986,
        area: 9600,
        imagem: "imagens/campinas_temple.jpg",
        alt: "Templo iluminado em área ajardinada"
    },
    {
        nome: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983, 2 de dezembro",
        ano: 1983,
        area: 116642,
        imagem: "imagens/brasilia_temple.jpg",
        alt: "Templo com arquitetura simétrica e jardins"
    },
    {
        nome: "Porto Alegre Brasil",
        localizacao: "Porto Alegre, Rio Grande do Sul, Brasil",
        consagracao: "2000, 17 de dezembro",
        ano: 2000,
        area: 10700,
        imagem: "imagens/porto-alegre-temple.jpg",
        alt: "Templo de Porto Alegre Brasil ao entardecer"
    },
    {
        nome: "Belém Brasil",
        localizacao: "Belém, Pará, Brasil",
        consagracao: "2022, 20 de novembro",
        ano: 2022,
        area: 28675,
        imagem: "imagens/belem_temple.jpg",
        alt: "Templo de Belém Brasil em área externa"
    },
    {
        nome: "Templo Pioneiro Antigo",
        localizacao: "Porto Alegre, Rio Grande do Sul, Brasil",
        consagracao: "1895, 12 de abril",
        ano: 1895,
        area: 8500,
        imagem: "imagens/porto_alegre_temple.jpg",
        alt: "Vista externa do templo em área ajardinada"
    }
];

const containerCards = document.querySelector("#templos-container") || document.querySelector("#cards-container") || document.querySelector(".templos-grid") || document.querySelector("main");
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

function preencherRodape() {
    const currentYear = document.querySelector("#currentyear");
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    const lastModified = document.querySelector("#lastModified");
    if (lastModified) {
        lastModified.textContent = `Última modificação: ${document.lastModified}`;
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
    preencherRodape();
    aplicarFiltro(window.location.hash || "#home");
});