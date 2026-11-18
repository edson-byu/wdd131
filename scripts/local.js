// Rodapé dinâmico (Ano atual e última modificação)
const yearElement = document.querySelector("#currentyear");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const modifiedElement = document.querySelector("#lastModified");
if (modifiedElement) {
    modifiedElement.textContent = `Última modificação: ${document.lastModified}`;
}

// Variáveis estáticas de clima correspondentes ao HTML
const temperatura = 9; // °C
const velocidadeVento = 12; // km/h

// Função exigida pela rubrica (Fórmula de sensação térmica em 1 linha)
function calcularSensacaoTermica(temp, vento) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temp * Math.pow(vento, 0.16)).toFixed(1);
}

// Inserção da Sensação Térmica na página
const elementoSensacao = document.getElementById("sensacao");

if (elementoSensacao) {
    if (temperatura <= 10 && velocidadeVento > 4.8) {
        elementoSensacao.textContent = `${calcularSensacaoTermica(temperatura, velocidadeVento)} °C`;
    } else {
        elementoSensacao.textContent = "N/A";
    }
}