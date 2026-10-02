**Projeto Nova-Web - Especificações de UI/UX (Tela de Login)**

1. Conceitos de Usabilidade em Formulários

## Labels vs. Placeholders
A label informa ao usuário qual dado deve ser colocado no campo. O placeholder apresenta uma dica ou exemplo de preenchimento. A label deve continuar visível para que o usuário consiga identificar o campo mesmo depois de inserir uma informação.

## Hierarquia Visual
O botão Primary representa a ação mais importante da página e deve receber maior destaque. No formulário de login, o botão “Entrar” será utilizado como Primary. Já opções como “Criar Conta” e “Esqueci minha senha” serão ações secundárias e terão um destaque visual menor.

2. Estados de Validação dos Campos de Entrada

## Default
Representa o estado normal do campo. Será utilizada uma borda neutra e uma label visível para indicar que o campo está disponível para preenchimento.

## Focus
Acontece quando o usuário seleciona o campo. Será utilizado um destaque na borda para mostrar qual campo está ativo.

## Error
Indica que existe algum problema no preenchimento. O campo terá uma borda vermelha acompanhada de uma mensagem informando o erro.

## Success
Indica que o valor informado está correto. Será utilizado um indicador visual para mostrar que o preenchimento foi validado com sucesso.

## Disabled
Indica que o campo não pode ser utilizado naquele momento. O elemento terá aparência mais clara e menor destaque visual.

3. Padrões de Acessibilidade

A interface deve utilizar cores com contraste suficiente entre o texto e o fundo para facilitar a leitura. Os elementos do formulário devem seguir uma ordem lógica para permitir a navegação pela tecla Tab. As mensagens de erro devem ser objetivas e fáceis de compreender, permitindo que usuários de leitores de tela também recebam as informações necessárias.