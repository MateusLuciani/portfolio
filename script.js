
let texto = document.querySelector("#texto");


let nome = prompt("Qual o seu nome?");

if (nome && nome.trim() !== "") {
    texto.textContent = nome;
} else {
    texto.textContent = "Mateus"; 
}