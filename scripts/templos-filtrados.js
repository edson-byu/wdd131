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

const container = document.querySelector("#templos-container");
const tituloFiltro = document.querySelector("#titulo-filtro");
const linksFiltro = document.querySelectorAll("nav a");

function obterAnoConsagracao(consagracaoStr) {
  const anoTexto = String(consagracaoStr).split(",")[0].trim();
  return Number.parseInt(anoTexto, 10);
}

function marcarLinkAtivo(linkSelecionado) {
  linksFiltro.forEach((link) => link.classList.remove("ativo"));
  if (linkSelecionado) {
    linkSelecionado.classList.add("ativo");
  }
}

function exibirTemplos(listaTemplos, titulo = "Todos os Templos") {
  if (!container || !tituloFiltro) {
    return;
  }

  container.innerHTML = "";
  tituloFiltro.textContent = titulo;

  listaTemplos.forEach((templo) => {
    const cartao = document.createElement("article");
    cartao.classList.add("cartao-templo");

    const nome = document.createElement("h3");
    nome.textContent = templo.nomeDoTemplo;

    const local = document.createElement("p");
    local.innerHTML = `<strong>Localização:</strong> ${templo.localizacao}`;

    const consagracao = document.createElement("p");
    consagracao.innerHTML = `<strong>Consagração:</strong> ${templo.consagracao}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Área:</strong> ${Number(templo.area).toLocaleString("pt-BR")} pés quadrados`;

    const imagem = document.createElement("img");
    imagem.src = templo.urlDaImagem;
    imagem.alt = templo.alt || `Templo de ${templo.nomeDoTemplo}`;
    imagem.loading = "lazy";
    imagem.width = 400;
    imagem.height = 250;

    cartao.append(nome, local, consagracao, area, imagem);
    container.appendChild(cartao);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  exibirTemplos(templos, "Todos os Templos");

  const linkInicio = document.querySelector("#inicio");
  if (linkInicio) {
    linkInicio.addEventListener("click", (event) => {
      event.preventDefault();
      marcarLinkAtivo(linkInicio);
      exibirTemplos(templos, "Todos os Templos");
    });
  }

  const linkAntigos = document.querySelector("#antigos");
  if (linkAntigos) {
    linkAntigos.addEventListener("click", (event) => {
      event.preventDefault();
      marcarLinkAtivo(linkAntigos);
      exibirTemplos(
        templos.filter((t) => obterAnoConsagracao(t.consagracao) < 1900),
        "Templos Antigos"
      );
    });
  }

  const linkNovos = document.querySelector("#novos");
  if (linkNovos) {
    linkNovos.addEventListener("click", (event) => {
      event.preventDefault();
      marcarLinkAtivo(linkNovos);
      exibirTemplos(
        templos.filter((t) => obterAnoConsagracao(t.consagracao) > 2000),
        "Templos Novos"
      );
    });
  }

  const linkGrandes = document.querySelector("#grandes");
  if (linkGrandes) {
    linkGrandes.addEventListener("click", (event) => {
      event.preventDefault();
      marcarLinkAtivo(linkGrandes);
      exibirTemplos(
        templos.filter((t) => Number(t.area) > 90000),
        "Templos Grandes"
      );
    });
  }

  const linkPequenos = document.querySelector("#pequenos");
  if (linkPequenos) {
    linkPequenos.addEventListener("click", (event) => {
      event.preventDefault();
      marcarLinkAtivo(linkPequenos);
      exibirTemplos(
        templos.filter((t) => Number(t.area) < 10000),
        "Templos Pequenos"
      );
    });
  }

  const anoAtualEl = document.querySelector("#ano-atual");
  if (anoAtualEl) {
    anoAtualEl.textContent = new Date().getFullYear();
  }

  const ultimaModificacaoEl = document.querySelector("#ultima-modificacao");
  if (ultimaModificacaoEl) {
    ultimaModificacaoEl.textContent = document.lastModified;
  }
});