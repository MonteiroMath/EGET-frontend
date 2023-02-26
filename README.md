# E-GET - StockManager

Esse projeto foi desenvolvido em resposta ao teste proposto pela empresa E-GET Desenvolvimento de Sistemas.

O aplicativo faz uso de um backend construído em ExpressJS sobre um banco de dados MySql, o qual pode ser encontrado [neste repositório](https://github.com/MonteiroMath/EGET-test-backend).

O backend está sendo executando temporariamente em um droplet da DigitalOcean e pode ser acessado clicando [aqui](http://159.89.178.109:8080). Caso o backend não funcione, é provável que ele tenha sido desativado após o resultado do teste.

## Instruções para rodar a aplicação

A aplicação foi desenvolvida em ambiente Linux (Ubuntu 20), utilizando NodeJS versão 18. Se necessário, siga as instruções para instalação do [NodeJS](https://nodejs.org/en/). Você também deverá ter o [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) instalado para seguir as instruções abaixo.

### - git clone

Navegue até o diretório em que deseja armazenadar a aplicação e obtenha o código do repositório utilizando o comando git clone:

> git clone https://github.com/MonteiroMath/EGET-frontend.git

Concluída a execução, navegue para a pasta root do repositório:

> cd EGET-frontend

### - npm install

Uma vez na pasta root do repositório, utilize o comando npm install para instalar as dependências do projeto:

> npm install

### - npm start

Concluída a a instalação das dependências, utilize o script npm start para iniciar a execução do código:

> npm start

Após, abra o browser de sua escolha e navegue para o endereço localhost:3000 para ter acesso ao aplicativo.

> localhost:3000

### - Observação:

Ao seguir as instruções acima, você rodará o aplicativo em modo de desenvolvimento, não de produção. A versão em produção pode ser acessada no link indicado no topo deste arquivo.

## Atendimento aos critérios do teste

### - Requisitos Funcionais

A aplicação permite o controle de um estoque de produtos, possuindo funções para adicionar, editar e remover produtos, bem como para buscar produtos por nome, categoria e preço.

Foi implementada uma barra superior para navegação entre as páginas da aplicação.

### - Utilização de React

Foi utilizado o Framework React para desenvolvimento do projeto.

### - Armazenamento de dados em LocalStorage ou em Backend Remoto e acessível pela internet.

Optou-se pelo armazenamento de dados em backend remoto, o qual pode ser acessado clicando [aqui](http://159.89.178.109:8080).

### - Utilização de Styled Components para estilização da interface

Utilizou-se a library Styled Components para estilização da interface.

### - Utilização de Hooks do React.

Foram utilizados vários hooks do react, conforme lista (não exaustiva) de exemplos:

- useState: [SearchBar.js](https://github.com/MonteiroMath/EGET-frontend/blob/master/src/components/ProductListPage/SearchBar/SearchBar.js) e [NewProductForm.js](https://github.com/MonteiroMath/EGET-frontend/blob/master/src/components/AddProductPage/NewProductForm/NewProductForm.js);

- useEffect: [ProductListPage.js](https://github.com/MonteiroMath/EGET-frontend/blob/master/src/components/ProductListPage/ProductListPage.js);

- useCallback: [ProductPage.js]https://github.com/MonteiroMath/EGET-frontend/blob/master/src/components/ProductPage/ProductPage.js;

- useMemo: [NewProductForm.js](https://github.com/MonteiroMath/EGET-frontend/blob/master/src/components/AddProductPage/NewProductForm/NewProductForm.js).

Também foram usados hooks de outras libraries em vários componentes, tais como useDispatch e useSelector (react-redux) e useNavigate e useParams (react-router).

### - Comunicação entre componentes através de props e/ou callback functions

A comunicação através de props e callback functions foi amplamente utilizada no desenvolvimento. Como exemplos, podem-se indicar:

- Comunicação entre os componentes [NewProductForm](https://github.com/MonteiroMath/EGET-frontend/blob/master/src/components/AddProductPage/NewProductForm/NewProductForm.js) e [FormItem](https://github.com/MonteiroMath/EGET-frontend/blob/master/src/components/AddProductPage/NewProductForm/FormItem/FormItem.js);

- Comunicação entre os componentes [ProductCard](https://github.com/MonteiroMath/EGET-frontend/blob/master/src/components/ProductListPage/ProductList/ProductCard/ProductCard.js) e [Modal](https://github.com/MonteiroMath/EGET-frontend/blob/master/src/components/Shared/Modal/Modal.js).

### - Renderização condicional

Foi empregada renderização condicional em várias oportunidades. Cita-se como exemplo o componente [ProductListPage](https://github.com/MonteiroMath/EGET-frontend/blob/master/src/components/ProductListPage/ProductListPage.js).

### -  Manipulação de Eventos

Foram manipulados eventos em diversas oportunidades. Citam-se como exemplos (lista não exaustiva):

- onClick: [ProductCard.js](https://github.com/MonteiroMath/EGET-frontend/blob/master/src/components/ProductListPage/ProductList/ProductCard/ProductCard.js)

- onKeyDown, onChange: [SearchBar.js](https://github.com/MonteiroMath/EGET-frontend/blob/master/src/components/ProductListPage/SearchBar/SearchBar.js)

### - Uso de React Router para criação de rotas e navegação

A library React Router foi utilizada para criação de rotas e navegação, conforme explicitado em:

- Criação de rotas: [App.js](https://github.com/MonteiroMath/EGET-frontend/blob/master/src/App.js)

- Uso do componente Link: [NavBar.js](https://github.com/MonteiroMath/EGET-frontend/blob/master/src/components/Shared/Navbar/Navbar.js)

- Uso do hook useNavigate: [AddProductPage.js](https://github.com/MonteiroMath/EGET-frontend/blob/master/src/components/AddProductPage/AddProductPage.js)

### - Formulário e Validação de Dados

Houve implementação de um formulário com validação de dados e requisição em API no componente [NewProductForm](https://github.com/MonteiroMath/EGET-frontend/blob/master/src/components/AddProductPage/NewProductForm/NewProductForm.js)

### - Uso do Redux

Houve utilização de Redux na implementação, conforme explicitado [aqui](https://github.com/MonteiroMath/EGET-frontend/tree/master/src/store).

### - Criação de elementos visuais do zero

Os elementos visuais foram criados do zero utilizando Styled Components. Não foram empregadas libraries externas para estilização.

### - Aplicação responsiva

A aplicação foi desenvolvida de maneira responsiva.

### - Filtro avançado para busca de produtos por várias propriedades ao mesmo tempo

Implementou-se filtro para busca de produtos por várias propriedades ao mesmo tempo, o que pode ser verificado no componente [SearchBar](https://github.com/MonteiroMath/EGET-frontend/blob/master/src/components/ProductListPage/SearchBar/SearchBar.js) e no arquivo [parseQuery.js](https://github.com/MonteiroMath/EGET-frontend/blob/master/src/components/ProductListPage/SearchBar/utils/parseQuery.js)

### - Jest e Enzyme

### - Hospedagem na nuvem

Tanto o backend quanto o backend foram hospedados (temporariamente) em droplets da DigitalOcean, conforme links: [backend](http://159.89.178.109:8080) e [frontend](adicionar link)
