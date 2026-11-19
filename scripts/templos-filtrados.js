// Rodapé dinâmico (Ano atual e data da última modificação)
const currentYearElement = document.querySelector("#currentyear");
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

const lastModifiedElement = document.querySelector("#lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Última modificação: ${document.lastModified}`;
}

// Array de templos: 7 originais + 3 adicionados (total de 10)
const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005, 7 de agosto",
        area: 11500,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888, 21 de maio",
        area: 74792,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015, 7 de junho",
        area: 96630,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020, 2 de maio",
        area: 6861,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974, 19 de novembro",
        area: 156558,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986, 10 de janeiro",
        area: 9600,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983, 2 de dezembro",
        area: 116642,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // 3 templos adicionados
    {
        nomeDoTemplo: "Porto Alegre Brasil",
        localizacao: "Porto Alegre, Rio Grande do Sul, Brasil",
        consagracao: "2000, 17 de dezembro",
        area: 10700,
        urlDaImagem: "imagens/porto-alegre-temple.jpg"
    },
    {
        nomeDoTemplo: "Salt Lake",
        localizacao: "Salt Lake City, Utah, Estados Unidos",
        consagracao: "1893, 6 de abril",
        area: 253015,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
        nomeDoTemplo: "Fortaleza Brasil",
        localizacao: "Fortaleza, Ceará, Brasil",
        consagracao: "2019, 2 de junho",
        area: 22600,
        urlDaImagem: "imagens/fortaleza-temple.jpg"
    }
];

const containerTemplos = document.querySelector("#templos-container");
const tituloSecao = document.querySelector("#filtro-titulo");
const linksFiltro = document.querySelectorAll(".filter-link");
const botaoMenu = document.querySelector("#menu-toggle");
const listaNavegacao = document.querySelector("#nav-menu");

// Extrai o ano numérico da string de consagração ("AAAA, ...")
function extrairAno(dataConsagracao) {
    return Number.parseInt(dataConsagracao.split(",")[0], 10);
}

// Cria e exibe os cartões de templos no DOM
function renderizarTemplos(lista) {
    if (!containerTemplos) return;
    containerTemplos.innerHTML = "";

    lista.forEach((templo) => {
        const cartao = document.createElement("article");
        cartao.classList.add("temple-card");

        cartao.innerHTML = `
            <div>
                <h3>${templo.nomeDoTemplo}</h3>
                <p><strong>Localização:</strong> ${templo.localizacao}</p>
                <p><strong>Consagração:</strong> ${templo.consagracao}</p>
                <p><strong>Área:</strong> ${templo.area.toLocaleString("pt-BR")} pés quadrados</p>
            </div>
            <img
                src="${templo.urlDaImagem}"
                alt="Templo de ${templo.nomeDoTemplo}"
                loading="lazy"
                width="400"
                height="250"
            >
        `;

        containerTemplos.appendChild(cartao);
    });
}

// Filtra os templos de acordo com o link clicado
function filtrarTemplos(tipoFiltro) {
    let resultado = templos;
    let titulo = "Todos os Templos";

    if (tipoFiltro === "old") {
        resultado = templos.filter((t) => extrairAno(t.consagracao) < 1900);
        titulo = "Templos Antigos (Antes de 1900)";
    } else if (tipoFiltro === "new") {
        resultado = templos.filter((t) => extrairAno(t.consagracao) > 2000);
        titulo = "Templos Novos (Depois de 2000)";
    } else if (tipoFiltro === "large") {
        resultado = templos.filter((t) => t.area > 90000);
        titulo = "Templos Grandes (> 90.000 pés²)";
    } else if (tipoFiltro === "small") {
        resultado = templos.filter((t) => t.area < 10000);
        titulo = "Templos Pequenos (< 10.000 pés²)";
    }

    if (tituloSecao) {
        tituloSecao.textContent = titulo;
    }

    renderizarTemplos(resultado);

    linksFiltro.forEach((link) => {
        link.classList.toggle("active", link.id === tipoFiltro);
    });
}

// Eventos de clique nos links de filtro
linksFiltro.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        filtrarTemplos(link.id);
        if (listaNavegacao && listaNavegacao.classList.contains("open")) {
            listaNavegacao.classList.remove("open");
            if (botaoMenu) {
                botaoMenu.setAttribute("aria-expanded", "false");
            }
        }
    });
});

// Evento do botão hambúrguer no mobile
if (botaoMenu && listaNavegacao) {
    botaoMenu.addEventListener("click", () => {
        const aberto = listaNavegacao.classList.toggle("open");
        botaoMenu.setAttribute("aria-expanded", String(aberto));
    });
}

// Renderização inicial
filtrarTemplos("home");