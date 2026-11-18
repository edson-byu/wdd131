// Atualiza o rodapé com o ano atual e a última data de modificação
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Última modificação: ${document.lastModified}`;

// Função de cálculo de sensação térmica (Wind Chill) em Celsius estritamente em uma linha de código
const calcularSensacaoTermica = (temp, velocidadeVento) => 
    (temp <= 10 && velocidadeVento > 4.8) ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(velocidadeVento, 0.16) + 0.3965 * temp * Math.pow(velocidadeVento, 0.16)).toFixed(1) : "N/A";

// Valores estáticos definidos na página
const temperaturaAtual = parseFloat(document.getElementById("temp").textContent);
const velocidadeVentoAtual = parseFloat(document.getElementById("vento").textContent);

// Exibe o resultado condicionalmente
const resultadoSensacao = calcularSensacaoTermica(temperaturaAtual, velocidadeVentoAtual);
document.getElementById("sensacao").textContent = resultadoSensacao !== "N/A" ? `${resultadoSensacao} °C` : "N/A";