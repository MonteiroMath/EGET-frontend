# E-GET - StockManager

Esse projeto foi desenvolvido em resposta ao teste proposto pela empresa E-GET Desenvolvimento de Sistemas.

O aplicativo faz uso de um backend construído em ExpressJS sobre um banco de dados MYSql, o qual pode ser encontrado [neste repositório](https://github.com/MonteiroMath/EGET-test-backend).

O backend está sendo executando temporariamente em um droplet da DigitalOcean e pode ser acessado clicando [aqui](http://159.89.178.109:8080). Caso o backend não funcione, é provável que ele tenha sido desativado após o resultado do teste.

## Instruções para rodar a aplicação

A aplicação foi desenvolvida em ambiente Linux (Ubuntu 20), utilizando NodeJS versão 18. Se necessário, siga as instruções para instalação do [NodeJS](https://nodejs.org/en/). Você também deverá ter o [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) instalado para seguir as instruções abaixo.

### git clone

Navegue até o diretório em que deseja armazenadar a aplicação e obtenha o código do repositório utilizando o comando git clone:

> git clone https://github.com/MonteiroMath/EGET-frontend.git

Concluída a execução, navegue para a pasta root do repositório:

> cd EGET-frontend

### npm install

Uma vez na pasta root do repositório, utilize o comando npm install para instalar as dependências do projeto:

> npm install

### npm start

Concluída a a instalação das dependências, utilize o script npm start para iniciar a execução do código:

> npm start

Após, abra o browser de sua escolha e navegue para o endereço localhost:3000 para ter acesso ao aplicativo.

> localhost:3000
