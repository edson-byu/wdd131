const produtos = [
  {
    id: "fc-1888",
    nome: "capacitor de fluxo",
    classificacaomedia: 4.5
  },
  {
    id: "fc-2050",
    nome: "fios elétricos",
    classificacaomedia: 4.7
  },
  {
    id: "fs-1987",
    nome: "circuitos de tempo",
    classificacaomedia: 3.5
  },
  {
    id: "ac-2000",
    nome: "reator de baixa tensão",
    classificacaomedia: 3.9
  },
  {
    id: "jj-1969",
    nome: "equalizador de distorção",
    classificacaomedia: 5.0
  }
];

function popularProdutos() {
  const selectProduto = document.querySelector("#nome-produto");
  if (!selectProduto) {
    return;
  }

  produtos.forEach((produto) => {
    const option = document.createElement("option");
    option.value = produto.id;
    option.textContent = produto.nome;
    selectProduto.appendChild(option);
  });
}

function atualizarContadorAvaliacoes() {
  const contadorElemento = document.querySelector("#contador-avaliacoes");
  if (!contadorElemento) {
    return;
  }

  const chaveStorage = "totalAvaliacoesProduto";
  const totalAtual = Number(localStorage.getItem(chaveStorage) || 0) + 1;
  localStorage.setItem(chaveStorage, String(totalAtual));
  contadorElemento.textContent = String(totalAtual);
}

function atualizarRodape() {
  const anoElemento = document.querySelector("#ano-atual");
  const modElemento = document.querySelector("#ultima-modificacao");

  if (anoElemento) {
    anoElemento.textContent = String(new Date().getFullYear());
  }

  if (modElemento) {
    modElemento.textContent = `Última modificação: ${document.lastModified}`;
  }
}

popularProdutos();
atualizarContadorAvaliacoes();
atualizarRodape();