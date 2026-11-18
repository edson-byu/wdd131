// Rodapé dinâmico (Ano atual e última modificação)
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Última modificação: ${document.lastModified}`;

// Variáveis estáticas correspondentes ao HTML
const temperatura = 9; // °C
const velocidadeVento = 12; // km/h

// Função em 1 linha exigida pela rubrica (Fórmula métrica em °C e km/h)
function calcularSensacaoTermica(temp, vento) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temp * Math.pow(vento, 0.16)).toFixed(1);
}

// Verificação das condições antes de chamar a função
const elementoSensacao = document.getElementById("sensacao");

if (temperatura <= 10 && velocidadeVento > 4.8) {
    elementoSensacao.textContent = `${calcularSensacaoTermica(temperatura, velocidadeVento)} °C`;
} else {
    elementoSensacao.textContent = "N/A";
} °C` : "N/A";