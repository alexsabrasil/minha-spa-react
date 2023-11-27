## Projeto educacional proposto no Bootcamp de Programação Web Full Stack 2.2023, Campinho Digital.

#### Minha SPA React 

Este projeto é uma Single Page Application (SPA) criada com React, utilizando rotas para navegação entre páginas.
##
## Estrutura do Projeto

O projeto possui a seguinte estrutura:

- `src/components`: Contém componentes reutilizáveis.
- `src/pages`: Contém as páginas da aplicação.
- `src/utils`: Contém utilitários, como a chamada à API.
- `src/styles.css`: Arquivo de estilo global.
- `src/App.js`: Componente principal que configura as rotas.

## Tecnologias Utilizadas

- React
- React Router DOM
- Axios para chamadas à API
- Node Fetch para requisições HTTP em JavaScript
- Nodemon para desenvolvimento
- Font Awesome para ícones

## Como Executar o Projeto

1. Clone o repositório: `git clone <URL_do_repositorio>`
2. Instale as dependências: `npm install`
3. Inicie o servidor de desenvolvimento: `npm start`

## Comandos Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento.
- `npm build`: Cria uma versão de produção.
- `npm test`: Executa testes.

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 

## Resultado do App

![imagem-spa1](https://github.com/alexsabrasil/minha-spa-react/assets/113733583/8aa47c60-2e9f-4525-bd5b-1b7b4e37dbda)

![imagem-spa2](https://github.com/alexsabrasil/minha-spa-react/assets/113733583/b6e5a0e4-02d9-47f7-881d-e89bb542c979)

##

## Finalidade desse projeto:

Este projeto é uma estrutura básica de uma Single Page Application (SPA) construída com React. Ele demonstra o uso de rotas para navegação entre diferentes páginas dentro da aplicação. Vou destacar algumas funcionalidades principais e áreas de foco:

1 - Rotas com React Router DOM: O projeto utiliza a biblioteca react-router-dom para definir e gerenciar as rotas da aplicação. Ele possui três páginas principais: Home, Tarefas e Sobre.

2 - Estilização com CSS: Há um arquivo de estilo global (styles.css) que fornece estilos básicos para a aplicação. Além disso, o projeto utiliza a biblioteca Font Awesome para incluir ícones nas páginas.

3 - Integração com uma API fictícia: O projeto inclui uma simulação de chamada a uma API fictícia usando a função getUsers localizada em utils/api.js. Essa função é usada para obter uma lista de usuários, que é exibida na página Home.

4 - Footer com Links para Redes Sociais: O componente Footer inclui links para redes sociais (LinkedIn e GitHub) e fornece um exemplo de como adicionar informações adicionais ao rodapé da aplicação.

5 - Componentes Funcionais e Hooks: As páginas (Home, Tarefas, Sobre) são implementadas como componentes funcionais. O hook useEffect é usado para realizar operações assíncronas, como a busca de dados da API.

6 - Controle de Estado com Hooks: O estado é gerenciado usando o hook useState. Por exemplo, na página Home, a lista de usuários é armazenada no estado.

7 - Projeto Configurado com create-react-app: O projeto foi iniciado usando create-react-app, uma ferramenta que configura um ambiente de desenvolvimento React com as configurações iniciais.

Este projeto é um exemplo educacional destinado a demonstrar conceitos básicos do React, rotas, chamadas à API e estilização. Espero ter a oportunidade de praticar e criar outros projeto no mundo real. 

