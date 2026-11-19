const templos = [
  // 1. Base
  {
    nomeDoTemplo: "Aba Nigéria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    alt: "Templo de Aba Nigéria iluminado ao entardecer"
  },
  // 2. Base
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    alt: "Templo de Manti Utah cercado por árvores na primavera"
  },
  // 3. Base
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    alt: "Templo de Payson Utah sob céu claro"
  },
  // 4. Base
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    alt: "Templo de Yigo Guam ao entardecer"
  },
  // 5. Base
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    alt: "Templo de Washington D.C. em Kensington, Maryland"
  },
  // 6. Base
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    alt: "Templo de Lima Peru iluminado à noite"
  },
  // 7. Base
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    alt: "Fachada externa do Templo da Cidade do México"
  },
  // 8. Adicionado (1 de 3)
  {
    nomeDoTemplo: "Salt Lake",
    localizacao: "Salt Lake City, Utah, Estados Unidos",
    consagracao: "1893, 6 de abril",
    area: 382207,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg",
    alt: "Templo de Salt Lake em Salt Lake City, Utah"
  },
  // 9. Adicionado (2 de 3)
  {
    nomeDoTemplo: "Bern Switzerland",
    localizacao: "Münchenbuchsee, Berna, Suíça",
    consagracao: "1955, 11 de setembro",
    area: 35546,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784288-wallpaper.jpg",
    alt: "Templo de Berna na Suíça cercado por área verde"
  },
  // 10. Adicionado (3 de 3)
  {
    nomeDoTemplo: "Bountiful Utah",
    localizacao: "Bountiful, Utah, Estados Unidos",
    consagracao: "1995, 8 de janeiro",
    area: 104000,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-lds-766918-wallpaper.jpg",
    alt: "Templo de Bountiful em Utah sob céu limpo"
  }
];

const container = document.querySelector("#templos-container");
const tituloFiltro = document.querySelector("#titulo-filtro");
const botoesFiltro = document.querySelectorAll("nav button");

function obterAnoConsagracao(consagracaoStr) {
  const anoTexto = consagracaoStr.split(",")[0].trim();
  return Number.parseInt(anoTexto, 10);
}

function marcarBotaoAtivo(botaoSelecionado) {
  botoesFiltro.forEach((btn) => btn.classList.remove("ativo"));
  if (botaoSelecionado) {
    botaoSelecionado.classList.add("ativo");
  }
}

function exibirTemplos(listaTemplos, titulo = "Todos os Templos") {
  if (!container || !tituloFiltro) {
    return;
  }

  container.innerHTML = "";
  tituloFiltro.textContent = titulo;

  const fragmento = document.createDocumentFragment();

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
    area.innerHTML = `<strong>Área:</strong> ${templo.area.toLocaleString("pt-BR")} pés quadrados`;

    const imagem = document.createElement("img");
    imagem.src = templo.urlDaImagem;
    imagem.alt = templo.alt;
    imagem.loading = "lazy";
    imagem.width = 400;
    imagem.height = 250;

    cartao.append(nome, local, consagracao, area, imagem);
    fragmento.appendChild(cartao);
  });

  container.appendChild(fragmento);
}

const btnInicio = document.querySelector("#inicio");
if (btnInicio) {
  btnInicio.addEventListener("click", () => {
    marcarBotaoAtivo(btnInicio);
    exibirTemplos(templos, "Todos os Templos");
  });
}

const btnAntigos = document.querySelector("#antigos");
if (btnAntigos) {
  btnAntigos.addEventListener("click", () => {
    marcarBotaoAtivo(btnAntigos);
    exibirTemplos(
      templos.filter((t) => obterAnoConsagracao(t.consagracao) < 1900),
      "Templos Antigos (Antes de 1900)"
    );
  });
}

const btnNovos = document.querySelector("#novos");
if (btnNovos) {
  btnNovos.addEventListener("click", () => {
    marcarBotaoAtivo(btnNovos);
    exibirTemplos(
      templos.filter((t) => obterAnoConsagracao(t.consagracao) > 2000),
      "Templos Novos (Depois de 2000)"
    );
  });
}

const btnGrandes = document.querySelector("#grandes");
if (btnGrandes) {
  btnGrandes.addEventListener("click", () => {
    marcarBotaoAtivo(btnGrandes);
    exibirTemplos(
      templos.filter((t) => t.area > 90000),
      "Templos Grandes (> 90.000 pés²)"
    );
  });
}

const btnPequenos = document.querySelector("#pequenos");
if (btnPequenos) {
  btnPequenos.addEventListener("click", () => {
    marcarBotaoAtivo(btnPequenos);
    exibirTemplos(
      templos.filter((t) => t.area < 10000),
      "Templos Pequenos (< 10.000 pés²)"
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

exibirTemplos(templos, "Todos os Templos");