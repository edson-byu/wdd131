// Obter o ano atual para o rodapé
const anoAtualSpan = document.querySelector("#anoatual");
const anoAtual = new Date().getFullYear();
anoAtualSpan.textContent = anoAtual;

// Obter a data da última modificação do documento
const ultimaModificacaoP = document.querySelector("#ultimaModificacao");
ultimaModificacaoP.textContent = `Última modificação: ${document.lastModified}`;