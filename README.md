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

# Projeto Nova-Web - UI/UX Design

## Aula 09: Tabelas de Dados e Perfil de Usuário

### 1. Conceitos de UX para Tabelas

* **Organização das informações:**

  * Informações escritas ficam preferencialmente alinhadas à esquerda.
  * Valores numéricos e preços ficam alinhados à direita.
  * Indicadores de status e botões de ação podem ficar centralizados.

* **Pesquisa e filtros:**

  * A busca deve ficar próxima ao topo da tabela, facilitando a localização das informações.
  * Opções de filtragem podem ser organizadas em menus para evitar excesso de elementos na tela.

* **Facilidade de leitura:**

  * Em tabelas maiores, o cabeçalho pode permanecer visível durante a rolagem.
  * Diferenciar as linhas por cores suaves ou divisórias ajuda o usuário a acompanhar os dados.

### 2. Protótipo Desenvolvido no Figma

* **Link do Projeto:** (https://www.figma.com/design/qe8AWijkq4rykyS9WkMkB7/Prot%C3%B3tipo-no-Figma?node-id=0-1&t=MeB8JACeLBIBQbnp-1)

* **Interfaces criadas:**

  1. **Perfil do Usuário:** Tela com informações pessoais, foto, função, situação da conta e opções para alterar os dados.
  2. **Consulta de Usuários:** Tela com uma tabela para visualizar e administrar usuários, incluindo pesquisa, filtros, navegação entre páginas e opções de edição e exclusão.
