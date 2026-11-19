// Rodapé dinâmico
const yearSpan = document.querySelector("#currentyear");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const lastModifiedEl = document.querySelector("#lastModified");
if (lastModifiedEl) {
    lastModifiedEl.textContent = `Última modificação: ${document.lastModified}`;
}

// Array de Templos (7 originais + 3 adicionados)
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
    // 3 Templos adicionais
    {
        nomeDoTemplo: "Porto Alegre Brasil",
        localizacao: "Porto Alegre, Rio Grande do Sul, Brasil",
        consagracao: "2000, 17 de dezembro",
        area: 10700,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/porto-alegre-brazil/400x250/porto-alegre-brazil-temple-lds-83426-wallpaper.jpg"
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
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fortaleza-brazil/400x250/fortaleza-brazil-temple-1080886-wallpaper.jpg"
    }
];

const container = document.querySelector("#templos-container");
const tituloFiltro = document.querySelector("#filtro-titulo");
const botoesFiltro = document.querySelectorAll(".filter-btn");
const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-menu");

// Extrai o ano numérico da string "AAAA, ..."
function obterAnoConsagracao(dataTexto) {
    return parseInt(dataTexto.split(",")[0], 10);
}

// Renderiza os cartões dinamicamente
function exibirTemplos(listaTemplos) {
    container.innerHTML = "";

    listaTemplos.forEach((templo) => {
        const card = document.createElement("article");
        card.classList.add("temple-card");

        card.innerHTML = `
            <div>
                <h3>${templo.nomeDoTemplo}</h3>
                <p><strong>Localização:</strong> ${templo.localizacao}</p>
                <p><strong>Consagração:</strong> ${templo.consagracao}</p>
                <p><strong>Área:</strong> ${templo.area.toLocaleString("pt-BR")} pés quadrados</p>
            </div>
            <img src="${templo.urlDaImagem}" alt="Templo de ${templo.nomeDoTemplo}" loading="lazy" width="400" height="250">
        `;

        container.appendChild(card);
    });
}

// Aplica o filtro selecionado
function aplicarFiltro(filtroId) {
    let filtrados = templos;
    let titulo = "Todos os Templos";

    if (filtroId === "old") {
        filtrados = templos.filter((t) => obterAnoConsagracao(t.consagracao) < 1900);
        titulo = "Templos Antigos (Antes de 1900)";
    } else if (filtroId === "new") {
        filtrados = templos.filter((t) => obterAnoConsagracao(t.consagracao) > 2000);
        titulo = "Templos Novos (Depois de 2000)";
    } else if (filtroId === "large") {
        filtrados = templos.filter((t) => t.area > 90000);
        titulo = "Templos Grandes (> 90.000 pés²)";
    } else if (filtroId === "small") {
        filtrados = templos.filter((t) => t.area < 10000);
        titulo = "Templos Pequenos (< 10.000 pés²)";
    }

    tituloFiltro.textContent = titulo;
    exibirTemplos(filtrados);

    botoesFiltro.forEach((btn) => {
        btn.classList.toggle("active", btn.id === filtroId);
    });
}

// Eventos de clique nos botões de filtro
botoesFiltro.forEach((btn) => {
    btn.addEventListener("click", () => {
        aplicarFiltro(btn.id);
        if (navMenu.classList.contains("open")) {
            navMenu.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
});

// Evento do menu mobile
if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

// Carregamento inicial
aplicarFiltro("home");