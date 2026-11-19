const templos = [
  // 1. Original
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  // 2. Original
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  // 3. Original
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  // 4. Original
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  // 5. Original
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  // 6. Original
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  // 7. Original
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // 8. Adicionado pelo aluno (1 de 3)
  {
    nomeDoTemplo: "Porto Alegre Brasil",
    localizacao: "Porto Alegre, Rio Grande do Sul, Brasil",
    consagracao: "2000, 17 de dezembro",
    area: 10700,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/porto-alegre-brazil/400x250/porto-alegre-brazil-temple-lds-83426-wallpaper.jpg"
  },
  // 9. Adicionado pelo aluno (2 de 3)
  {
    nomeDoTemplo: "Salt Lake",
    localizacao: "Salt Lake City, Utah, Estados Unidos",
    consagracao: "1893, 6 de abril",
    area: 382207,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  // 10. Adicionado pelo aluno (3 de 3)
  {
    nomeDoTemplo: "Bern Switzerland",
    localizacao: "Münchenbuchsee, Berna, Suíça",
    consagracao: "1955, 11 de setembro",
    area: 35546,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784288-wallpaper.jpg"
  }
];

const container = document.querySelector("#templos-container");
const tituloFiltro = document.querySelector("#titulo-filtro");

function obterAnoConsagracao(consagracaoStr) {
  const anoTexto = consagracaoStr.split(",")[0].trim();
  return parseInt(anoTexto, 10);
}

function exibirTemplos(listaTemplos, titulo = "Início — Todos os Templos") {
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
    area.innerHTML = `<strong>Área:</strong> ${templo.area.toLocaleString("en-US")} sq ft`;

    const imagem = document.createElement("img");
    imagem.src = templo.urlDaImagem;
    imagem.alt = `Templo de ${templo.nomeDoTemplo}`;
    imagem.loading = "lazy";
    imagem.width = 400;
    imagem.height = 250;

    cartao.append(nome, local, consagracao, area, imagem);
    container.appendChild(cartao);
  });
}

document.querySelector("#inicio").addEventListener("click", () => {
  exibirTemplos(templos, "Início — Todos os Templos");
});

document.querySelector("#antigos").addEventListener("click", () => {
  const antigos = templos.filter((t) => obterAnoConsagracao(t.consagracao) < 1900);
  exibirTemplos(antigos, "Templos Antigos (Antes de 1900)");
});

document.querySelector("#novos").addEventListener("click", () => {
  const novos = templos.filter((t) => obterAnoConsagracao(t.consagracao) > 2000);
  exibirTemplos(novos, "Templos Novos (Depois de 2000)");
});

document.querySelector("#grandes").addEventListener("click", () => {
  const grandes = templos.filter((