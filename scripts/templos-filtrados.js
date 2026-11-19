const templos = [
  {
    nomeDoTemplo: "Aba Nigéria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    alt: "Templo de Aba Nigéria"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    alt: "Templo de Manti Utah"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    alt: "Templo de Payson Utah"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    alt: "Templo de Yigo Guam"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    alt: "Templo de Washington D.C."
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    alt: "Templo de Lima Peru"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    alt: "Templo da Cidade do México"
  },
  {
    nomeDoTemplo: "Salt Lake",
    localizacao: "Salt Lake City, Utah, Estados Unidos",
    consagracao: "1893, 6 de abril",
    area: 382207,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg",
    alt: "Templo de Salt Lake"
  },
  {
    nomeDoTemplo: "Bern Switzerland",
    localizacao: "Münchenbuchsee, Berna, Suíça",
    consagracao: "1955, 11 de setembro",
    area: 35546,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784288-wallpaper.jpg",
    alt: "Templo de Bern Switzerland"
  },
  {
    nomeDoTemplo: "Bountiful Utah",
    localizacao: "Bountiful, Utah, Estados Unidos",
    consagracao: "1995, 8 de janeiro",
    area: 104000,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-lds-766918-wallpaper.jpg",
    alt: "Templo de Bountiful Utah"
  }
];

function obterAreaEmPes(areaValor) {
  if (typeof areaValor === "number") return areaValor;
  const numero = parseInt(String(areaValor).replace(/[^\d]/g, ""), 10);
  return Number.isNaN(numero) ? 0 : numero;
}

function obterAnoConsagracao(consagracaoStr) {
  const match = String(consagracaoStr).match(/\d{4}/);
  return match ? parseInt(match[0], 10) : 0;
}

function obterOuCriarContainer() {
  let container = document.querySelector("#templos-container, .templos-grid, main .grid, main > div:last-of-type");
  const mainEl = document.querySelector("main") || document.body;

  if (!container) {
    container = document.createElement("div");
    container.id = "templos-container";
    mainEl.appendChild(container);
  }

  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(auto-fit, minmax(280px, 1fr))";
  container.style.gap = "20px";
  container.style.padding = "16px";
  container.style.width = "100%";

  return container;
}

function obterOuCriarTitulo() {
  let tituloEl = document.querySelector("#titulo-filtro, main h2");
  if (!tituloEl) {
    tituloEl = document.createElement("h2");
    const mainEl = document.querySelector("main") || document.body;
    mainEl.prepend(tituloEl);
  }
  return tituloEl;
}

function exibirTemplos(lista, tituloTexto = "Todos os Templos") {
  const container = obterOuCriarContainer();
  const tituloEl = obterOuCriarTitulo();

  tituloEl.textContent = tituloTexto;
  container.innerHTML = "";

  lista.forEach((templo) => {
    const cartao = document.createElement("article");
    cartao.className = "cartao-templo";
    cartao.style.background = "#ffffff";
    cartao.style.border = "1px solid #cbd5e1";
    cartao.style.borderRadius = "8px";
    cartao.style.padding = "14px";
    cartao.style.boxShadow = "0 2px 6px rgba(0,0,0,0.08)";

    const areaNum = obterAreaEmPes(templo.area);

    const h3 = document.createElement("h3");
    h3.textContent = templo.nomeDoTemplo;
    h3.style.marginBottom = "8px";

    const pLocal = document.createElement("p");
    pLocal.innerHTML = `<strong>Localização:</strong> ${templo.localizacao}`;

    const pData = document.createElement("p");
    pData.innerHTML = `<strong>Consagração:</strong> ${templo.consagracao}`;

    const pArea = document.createElement("p");
    pArea.innerHTML = `<strong>Área:</strong> ${areaNum.toLocaleString("pt-BR")} pés quadrados`;

    const img = document.createElement("img");
    img.src = templo.urlDaImagem;
    img.alt = templo.alt || `Templo de ${templo.nomeDoTemplo}`;
    img.loading = "lazy";
    img.width = 400;
    img.height = 250;
    img.style.width = "100%";
    img.style.height = "220px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "6px";
    img.style.marginTop = "10px";
    img.style.display = "block";

    cartao.append(h3, pLocal, pData, pArea, img);
    container.appendChild(cartao);
  });
}

function configurarFiltros() {
  const itensMenu = document.querySelectorAll("header nav a, header nav button, nav a, nav button");

  itensMenu.forEach((item) => {
    const texto = item.textContent.trim().toLowerCase();
    const id = (item.id || "").toLowerCase();

    item.addEventListener("click", (evento) => {
      if (item.tagName === "A") {
        evento.preventDefault();
      }

      if (id.includes("inicio") || id.includes("home") || texto.includes("início") || texto.includes("inicio") || texto.includes("home")) {
        exibirTemplos(templos, "Todos os Templos");
      } else if (id.includes("antigo") || id.includes("old") || texto.includes("antig")) {
        exibirTemplos(
          templos.filter((t) => obterAnoConsagracao(t.consagracao) < 1900),
          "Templos Antigos"
        );
      } else if (id.includes("novo") || id.includes("new") || texto.includes("nov")) {
        exibirTemplos(
          templos.filter((t) => obterAnoConsagracao(t.consagracao) > 2000),
          "Templos Novos"
        );
      } else if (id.includes("grande") || id.includes("large") || texto.includes("grand")) {
        exibirTemplos(
          templos.filter((t) => obterAreaEmPes(t.area) > 90000),
          "Templos Grandes"
        );
      } else if (id.includes("pequeno") || id.includes("small") || texto.includes("pequen")) {
        exibirTemplos(
          templos.filter((t) => obterAreaEmPes(t.area) < 10000),
          "Templos Pequenos"
        );
      }
    });
  });
}

function atualizarRodape() {
  const anoEl = document.querySelector("#ano-atual, #currentyear, footer span");
  if (anoEl) {
    anoEl.textContent = new Date().getFullYear();
  }

  const modEl = document.querySelector("#ultima-modificacao, #lastModified");
  if (modEl) {
    modEl.textContent = document.lastModified;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  configurarFiltros();
  atualizarRodape();
  exibirTemplos(templos, "Todos os Templos");
});