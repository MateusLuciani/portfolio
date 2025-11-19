// 1. Seleciona o elemento HTML
let texto = document.querySelector("#texto");

// 2. Pergunta o nome ao usuário
let nome = prompt("Qual o seu nome?");

// 3. Verifica se o usuário digitou algo válido
// (Se 'nome' não for null E não for uma string vazia)
if (nome && nome.trim() !== "") {
    texto.textContent = nome;
} else {
    // Caso o usuário cancele ou deixe em branco, define um padrão
    texto.textContent = "Mateus"; 
}