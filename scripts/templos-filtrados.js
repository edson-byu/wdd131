const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
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
    nomeDoTemplo: "Porto Alegre Brasil",
    localizacao: "Porto Alegre, Rio Grande do Sul, Brasil",
    consagracao: "2000, 17 de dezembro",
    area: 10700,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/porto-alegre-brazil/400x250/porto-alegre-brazil-temple-lds-83426-wallpaper.jpg",
    alt: "Templo de Porto Alegre Brasil"
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
  }
];

function anoConsagracao(texto) {
  return parseInt(String(texto).split(",")[0].trim(), 10);
}

function mostrarTemplos(lista, titulo = "Todos os Templos") {
  const grid = document.querySelector("#templos-container") || document.querySelector("main > div");
  const h2 = document.querySelector("#titulo-filtro") || document.querySelector("main h2");

  if (h2) h2.textContent = titulo;
  if (!grid) return;

  grid.innerHTML = "";

  lista.forEach((templo) => {
    const card = document.createElement("article");
    card.className = "cartao-templo";

    const nome = document.createElement("h3");
    nome.textContent = templo.nomeDoTemplo;

    const local = document.createElement("p");
    local.innerHTML = `<strong>Localização:</strong> ${templo.localizacao}`;

    const data = document.createElement("p");
    data.innerHTML = `<strong>Consagração:</strong> ${templo.consagracao}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Área:</strong> ${Number(templo.area).toLocaleString("en-US")} sq ft`;

    const img = document.createElement("img");
    img.src = templo.urlDaImagem;
    img.alt = templo.alt || `Templo de ${templo.nomeDoTemplo}`;
    img.loading = "lazy";
    img.width = 400;
    img.height = 250;

    card.append(nome, local, data, area, img);
    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarTemplos(templos, "Todos os Templos");

  document.querySelector("#inicio")?.addEventListener("click", () => {
    mostrarTemplos(templos, "Todos os Templos");
  });

  document.querySelector("#antigos")?.addEventListener("click", () => {
    mostrarTemplos(
      templos.filter((t) => anoConsagracao(t.consagracao) < 1900),
      "Templos Antigos"
    );
  });

  document.querySelector("#novos")?.addEventListener("click", () => {
    mostrarTemplos(
      templos.filter((t) => anoConsagracao(t.consagracao) > 2000),
      "Templos Novos"
    );
  });

  document.querySelector("#grandes")?.addEventListener("click", () => {
    mostrarTemplos(
      templos.filter((t) => Number(t.area) > 90000),
      "Templos Grandes"
    );
  });

  document.querySelector("#pequenos")?.addEventListener("click", () => {
    mostrarTemplos(
      templos.filter((t) => Number(t.area) < 10000),
      "Templos Pequenos"
    );
  });

  const ano = document.querySelector("#ano-atual") || document.querySelector("#currentyear");
  if (ano) ano.textContent = new Date().getFullYear();

  const mod = document.querySelector("#ultima-modificacao") || document.querySelector("#lastModified");
  if (mod) mod.textContent = document.lastModified;
});