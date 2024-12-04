
# Automação de Testes com Cypress

## Descrição do Projeto

Este projeto implementa a automação de testes frontend e backend para o site do Serverest.
Foi utilizado cypress e o design parttner com comando customizados.



## Pré-requisitos

1. Deve ter o Node.js instalado (versão LTS recomendada) versão a partir da 20.
 1.1 - Você pode baixar a versão no site: https://www.npmjs.com/package/node
 
 Após o download e instação, execute o comando no terminal para ver a versão:
 `node -v`

2. Deve ter um gerenciador de pacotes, no caso deste projeto foi utilizado o npm, mais fique a vontade caso goste de outro.
https://www.npmjs.com/

3. Deve instalar o cypress com a versão a partir da versão 13.0.0, para realizar o download, basta selecionar uma versão e seguir os passos no site:
https://docs.cypress.io/app/references/changelog

4. Deve ter o git instalado para versionamento do código e clonagem do projeto.


## Instalação

1. Clone do Repositório:

 1.1. Dentro do terminal, entre no diretório desejado e crie uma pasta;
`mkdir <nome da pasta>`
`cd <nome da pasta criada>`

2. Clone o projeto com o comando: 
`git init`  Para inicializar o git neste diretório
`git clone https://github.com/JulianoC0sta/cypress-serverest`
  
   2.1. Entre na pasta do projeto clonado com o comando:
 `cd cypress-serverest/desafiocypress`

3. Rode o comando para instalar as dependências do cypress:
`npm install`

4. Por fim, rode o comando para executar o projeto:
 `npx cypress open`

Este comando abrira o console visual do cypress, sendo possivel executar e visualizar todos os testes.
