// Exibir o ano atual no rodapé de forma dinâmica
const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = today.getFullYear();

// Exibir a data da última modificação do documento no rodapé
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Última Modificação: ${document.lastModified}`;

// Funcionalidade do Menu de Navegação Responsivo (Hambúrguer)
const menuButton = document.querySelector('#menu-button');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.classList.toggle('open');
    
    // Altera o símbolo do botão entre hambúrguer (☰) e fechar (✕)
    if (menuButton.classList.contains('open')) {
        menuButton.textContent = '✕';
    } else {
        menuButton.textContent = '☰';
    }
});