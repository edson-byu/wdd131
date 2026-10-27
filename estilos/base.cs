/* Configurações Globais */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f7f6;
    color: #333333;
    line-height: 1.6;
}

/* Header */
header {
    background-color: #003366;
    color: #ffffff;
    text-align: center;
    padding: 1.5rem;
}

#titulo-curso {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

/* Navegação com Flexbox */
nav {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

nav a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 400;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

nav a:hover {
    background-color: #0055a5;
    color: #ffffff;
}

/* Main */
main {
    max-width: 900px;
    margin: 2rem auto;
    padding: 0 1rem;
}

main h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: #003366;
}

/* Cartões usando CSS Grid */
.card-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

@media (min-width: 768px) {
    .card-container {
        grid-template-columns: 1fr 1fr;
    }
}

.card {
    background-color: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.card h2 {
    background-color: #003366;
    color: #ffffff;
    padding: 0.5rem;
    margin: -1.5rem -1.5rem 1rem -1.5rem;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    font-size: 1.2rem;
    text-align: center;
}

.card img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto 1rem auto;
    border-radius: 4px;
}

/* Footer */
footer {
    background-color: #003366;
    color: #ffffff;
    text-align: center;
    padding: 1.5rem;
    margin-top: 3rem;
    font-size: 0.9rem;
}

footer p {
    margin: 0.5rem 0;
}