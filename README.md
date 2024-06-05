<h1 align=center>E-mail Regex Validation</h1>

## Sobre
Este projeto tem como intuito propor uma solução a uma situação-problema apresentada, onde a ideia é que a validação de e-mail seja executada com Expressões Regulares (Regex).

## Tecnologias Utilizadas
• NestJS <br>
• Class Transformer & Class Validator <br>
• Sequelize <br>
• SQLite

## Getting Started
Abra o terminal e clone este repositório pelo comando: <br>
`git clone https://github.com/leonardomeira/projeto-validacao-email`

Para instalar as dependências, digite: <br>
`npm install`

E para iniciar o projeto, apenas execute o comando: <br>
`npm run start:dev`

Recomendo a instalação da extensão **Thunder Client** caso você utilize o Visual Studio Code para realizar as requisições pelo endereço raiz *http://localhost:3000*. Ou, caso prefira, utilizar aplicações como **Insomnia** ou **Postman**.

Você deve tentar realizar o cadastro de um usuário com as seguintes propriedades:

`forename: string;` <br>
`surname: string;` <br>
`email: string;` <br>
`password: string;` <br/>
`role: string;`