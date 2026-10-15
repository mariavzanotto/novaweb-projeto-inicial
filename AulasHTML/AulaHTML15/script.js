/*
Descrição: Exercícios da Aula 15 - JavaScript aplicado a Formulários
nome_arquivo: script.js
nome_exercicio: Atividade 15 - JavaScript aplicado a Formulários
nome_aluno: Maria Fernanda de Oliveira Zanotto
email_aluno: maria.zanotto@edu.senai.br
turma: TBE-1BAA-26
*/ 

function cadastrar(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem");

    mensagem.textContent = "Cadastrado com sucesso! Bem-vindo(a), " + nome + "!";
}
