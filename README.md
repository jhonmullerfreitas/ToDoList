# ToDoList
- É uma aplicaçãp web fullstack feita para atender as funcionalidades de um CRUD, ela conta com um banco de dados fictício que zera a cada reinicialização do servidor, nesta aplicação você pode realizar seu cadastro de usuário, criar suas listas, adicionar itens, atualizá-los, marcar como concluído e até mesmo apagá-los. Feita para você que deseja facilitar sua vida anotando tudo o que precisa.

## Interface

## Tecnologias utilizadas:
- ReactJS
- JavaScript
- Material UI (MUI)

## Clone:
- Você pode realizar o clone deste repositório contendo a aplicação completa através do comando `$ git clone https://github.com/jhonmullerfreitas/ToDoList.git`
- Quando realizar o clone poderá notar dois diretórios (app e api), através do comando `$ cd app` você poderá estar entrando no diretório da interface (app)
- Você precisará instalar os pacotes e dependências necessárias para rodar o projeto, utilize o comando `$ yarn install`
- Feito isso, você poderá executar o projeto em localhost:3000, para isso execute o comando `$ yarn start`, você será redirecionado para uma nova página na web que abrirá automaticamente.

## Funcionalidades da Interface:
- Cadastro e login de usuário;
- Criação, atualização e deleção de lista;
- Criação, atualização e deleção de itens;
- Edição de email e senha de usuário;

## API

## Tecnologias utilizadas:
- Express
- JavaScript
- Axios

## Clone:
- Você pode realizar o clone deste repositório contendo a aplicação completa através do comando `$ git clone https://github.com/jhonmullerfreitas/ToDoList.git`
- Quando realizar o clone poderá notar dois diretórios (app e api), através do comando `$ cd api` você poderá estar entrando no diretório da API (api)
- Você precisará instalar os pacotes e dependências necessárias para rodar o projeto, utilize o comando `$ npm install`
- Feito isso, você poderá executar o projeto em localhost:3001, para isso execute o comando `$ npm run dev`, você poderá utilizar a interface para realizar as requisições ou utilizar um cliente HTTP como Postman ou Insomnia.

## Funcionalidades da API:
- Cadastro,leitura, atualização, deleção e login de usuário;
- Criação, leitura, atualização e deleção de lista;
- Criação, leitura, atualização e deleção de itens;

## Exemplos e Endpoints

<table>
  <tr>
    <th>Verbo HTTP</th>
    <th>URL</th>
    <th>Body</th>
    <th>Header</th>
    <th>Função</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>http://localhost:3001/user</td>
    <td>{
          "email": "user@gmail.com",
          "password": "123456",
        }
    </td>
    <td></td>
    <td>Cadastrar usuário</td>
  </tr>
  
  <tr>
    <td>POST</td>
    <td>http://localhost:3001/user/login</td>
    <td>{
          "email": "user@gmail.com",
          "password": "123456"
        }
    </td>
    <td></td>
    <td>Realiza Login, retorna token e id de usuário</td>
  </tr>
  
  <tr>
    <td>PATCH</td>
    <td>http://localhost:3001/user/idUsuario</td>
    <td>{
          "email": "test@mail.com",
          "password": "12354654"
        }
    </td>
    <td></td>
    <td>Atualiza email e senha</td>
  </tr>
  
  <tr>
    <td>GET</td>
    <td>http://localhost:3001/user</td>
    <td>No body</td>
    <td>Bearer token_de_login</td>
    <td>Lista todos os usuários</td>
  </tr>
  
  <tr>
    <td>GET</td>
    <td>http://localhost:3001/user/idUsuario</td>
    <td>No body</td>
    <td>Bearer token_de_login</td>
    <td>Lista usuário específico</td>
  </tr>
  
  <tr>
    <td>DELETE</td>
    <td>http://localhost:3001/user/idUsuario</td>
    <td>No body</td>
    <td>Bearer token_de_login</td>
    <td>Deleta um usuário</td>
  </tr>
  
</table>

<table>
  <tr>
    <th>Verbo HTTP</th>
    <th>URL</th>
    <th>Body</th>
    <th>Header</th>
    <th>Função</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>http://localhost:3001/list</td>
    <td>{
          "name": "Compras"
        }
    </td>
    <td>Bearer toke_de_login</td>
    <td>Cria Lista</td>
  </tr>
  
  <tr>
    <td>PATCH</td>
    <td>http://localhost:3001/list/id_da_lista</td>
    <td>{
          "name": "Supermercado"
        }
    </td>
    <td>Bearer token_de_login</td>
    <td>Atualiza o nome da lista</td>
  </tr>
  
  <tr>
    <td>GET</td>
    <td>http://localhost:3001/list</td>
    <td>No Body
    </td>
    <td>Bearer token_de_login</td>
    <td>Retorna todas as listas</td>
  </tr>
  
  <tr>
    <td>GET</td>
    <td>http://localhost:3001/list/id_da_lista</td>
    <td>No Body
    </td>
    <td>Bearer token_de_login</td>
    <td>Retorna lista específica</td>
  </tr>
 
  <tr>
    <td>DELETE</td>
    <td>http://localhost:3001/list/id_da_lista</td>
    <td>No body</td>
    <td>Bearer token_de_login</td>
    <td>Deleta uma lista</td>
  </tr>
  
</table>

<table>
  <tr>
    <th>Verbo HTTP</th>
    <th>URL</th>
    <th>Body</th>
    <th>Header</th>
    <th>Função</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>http://localhost:3001/item/id_da_lista</td>
    <td>{
          "name": "Frutas"
        }
    </td>
    <td>Bearer toke_de_login</td>
    <td>Cria novo item para a lista</td>
  </tr>
  
  <tr>
    <td>PATCH</td>
    <td>http://localhost:3001/item/id_da_lista</td>
    <td>{
          "name": "Melancia",
          "idItem": "458c59c-df54s6f84"
        }
    </td>
    <td>Bearer token_de_login</td>
    <td>Atualiza o nome do item da lista</td>
  </tr>
  
  <tr>
    <td>GET</td>
    <td>http://localhost:3001/item/id_da_lista</td>
    <td>No Body
    </td>
    <td>Bearer token_de_login</td>
    <td>Retorna todas os itens da lista</td>
  </tr>
  
  <tr>
    <td>PUT</td>
    <td>http://localhost:3001/item/id_da_lista</td>
    <td>{"idItem": "458c59c-df54s6f84"
    </td>
    <td>Bearer token_de_login</td>
    <td>Marca um item como concluído ou não</td>
  </tr>
 
  <tr>
    <td>DELETE</td>
    <td>http://localhost:3001/item/id_da_lista</td>
    <td>{"idItem": "458c59c-df54s6f84"</td>
    <td>Bearer token_de_login</td>
    <td>Deleta um item de uma lista</td>
  </tr>
  
</table>

## Contatos:
- Em caso de dúvidas ou algum problema entre em contato pelo email: jmuller.jhon80@gmail.com
