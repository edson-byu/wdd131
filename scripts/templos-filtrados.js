const templos = [
    {
        nome: "Porto Alegre Brasil",
        localizacao: "Porto Alegre, Rio Grande do Sul, Brasil",
        consagracao: "2000, 17 de dezembro",
        ano: 2000,
        area: 10700,
        imagem: "imagens/porto-alegre-temple.jpg",
        alt: "Templo de Porto Alegre Brasil em área ajardinada"
    },
    {
        nome: "São Paulo Brasil",
        localizacao: "São Paulo, São Paulo, Brasil",
        consagracao: "1978, 30 de outubro",
        ano: 1978,
        area: 92000,
        imagem: "imagens/sao_paulo_temple.jpg",
        alt: "Templo de São Paulo Brasil com fachada branca e jardins"
    },
    {
        nome: "Fortaleza Brasil",
        localizacao: "Fortaleza, Ceará, Brasil",
        consagracao: "2019, 2 de junho",
        ano: 2019,
        area: 36000,
        imagem: "imagens/fortaleza-temple.jpg",
        alt: "Templo de Fortaleza Brasil sob céu claro"
    },
    {
        nome: "Campinas Brasil",
        localizacao: "Campinas, São Paulo, Brasil",
        consagracao: "2002, 17 de maio",
        ano: 2002,
        area: 48100,
        imagem: "imagens/campinas_temple.jpg",
        alt: "Templo de Campinas Brasil cercado por jardins"
    },
    {
        nome: "Curitiba Brasil",
        localizacao: "Curitiba, Paraná, Brasil",
        consagracao: "2008, 1 de junho",
        ano: 2008,
        area: 27850,
        imagem: "imagens/curitiba_temple.jpg",
        alt: "Templo de Curitiba Brasil em área arborizada"
    },
    {
        nome: "Recife Brasil",
        localizacao: "Recife, Pernambuco, Brasil",
        consagracao: "1895, 15 de dezembro",
        ano: 1895,
        area: 37200,
        imagem: "imagens/recife_temple.jpg",
        alt: "Templo de Recife Brasil iluminado"
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
        nome: "Brasília Brasil",
        localizacao: "Brasília, Distrito Federal, Brasil",
        consagracao: "2023, 17 de setembro",
        ano: 2023,
        area: 25000,
        imagem: "imagens/brasilia_temple.jpg",
        alt: "Templo de Brasília Brasil com arquitetura moderna"
    },
    {
        nome: "Rio de Janeiro Brasil",
        localizacao: "Rio de Janeiro, Rio de Janeiro, Brasil",
        consagracao: "2022, 8 de maio",
        ano: 2022,
        area: 29966,
        imagem: "imagens/rio_de_janeiro_temple.jpg",
        alt: "Templo de Rio de Janeiro Brasil com jardins tropicais"
    },
    {
        nome: "Porto Alegre Pequeno",
        localizacao: "Porto Alegre, Rio Grande do Sul, Brasil",
        consagracao: "1885, 10 de março",
        ano: 1885,
        area: 8500,
        imagem: "imagens/porto-pequena.webp",
        alt: "Vista compacta do Templo de Porto Alegre"
    }
];

const containerCards = document.querySelector("#templos-container") || document.querySelector(".templos-grid") || document.querySelector("main");
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

function atualizarLinksAtivos(hash) {
    linksFiltro.forEach((link) => {
        const href = link.getAttribute("href");
        if (href === hash) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

function aplicarFiltro(hash) {
    const filtroAtual = hash || "#home";
    atualizarLinksAtivos(filtroAtual);

    switch (filtroAtual) {
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
    const anoSpan = document.querySelector("#currentyear");
    if (anoSpan) {
        anoSpan.textContent = String(new Date().getFullYear());
    }

    const ultimaModificacao = document.querySelector("#lastModified");
    if (ultimaModificacao) {
        ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;
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