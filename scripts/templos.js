// Exibe o ano atual no rodapé
const currentyearSpan = document.getElementById("currentyear");
if (currentyearSpan) {
    currentyearSpan.textContent = new Date().getFullYear();
}

// Exibe a data da última modificação do documento no rodapé
const lastModifiedParagraph = document.getElementById("lastModified");
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Última Modificação: ${document.lastModified}`;
}

// Funcionalidade do Menu Hambúrguer Responsivo
const hambutton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

if (hambutton && navigation) {
    hambutton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        hambutton.classList.toggle("open");
    });
}