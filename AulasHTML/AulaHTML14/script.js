/*
Descrição: Exercícios da Aula 14 - CSS para Formulários
nome_arquivo: script.js
nome_exercicio: Atividade 14 - Estilizando Formulários com CSS      
nome_aluno: Maria Fernanda de Oliveira Zanotto
email_aluno: maria.zanotto@edu.senai.br
turma: TBE-1BAA-26
*/ 
 
const botao = document.getElementById("habilitar");
const concluido = document.getElementById("concluido");
const campos = [
    document.getElementById("nome"),
    document.getElementById("email"),
    document.getElementById("telefone"),
    document.getElementById("idade")
];
let indice = 0;
botao.addEventListener("click", function() {
    if (indice < campos.length) {
        campos[indice].disabled = false;
        campos[indice].focus();
    }
});
campos.forEach(function(campo, posicao) {
    campo.addEventListener("blur", function() {
        if (!campo.disabled) {
            campo.disabled = true;
            indice = Math.max(indice, posicao + 1);
        }
    });
});
concluido.addEventListener("click", function() {
    campos.forEach(function(campo) {
        campo.value = "";
        campo.disabled = true;
    });
    indice = 0;
});
