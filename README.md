<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Simple library system build with nestJS.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```


## Routes

### GET - list all books

> URL http://localhost:3000/books

<br/>

### GET - list book by url

> URL http://localhost:3000/books/:id

<br/>

### GET - search by word

> URL http://localhost:3000/books/search/:word

Exemple: 
> if :word = Harry
>URL WILL BE LIKE: http://localhost:3000/books/search/Harry

<br/>
results will be all books with 'Harry' in his name.
<br/>
Result exemple: 

```JSON
[
  {
    "id": 1,
    "codigo": "HARRY01",
    "nome": "Harry Potter e a Pedra Filosofal",
    "preco": 29.9,
    "createdAt": "2021-05-25T21:50:33.038Z",
    "updatedAt": "2021-05-25T21:58:52.941Z"
  },
  {
    "id": 2,
    "codigo": "HARRY02",
    "nome": "Harry Potter e a Câmara Secreta",
    "preco": 29.9,
    "createdAt": "2021-05-25T21:51:06.361Z",
    "updatedAt": "2021-05-25T21:51:06.361Z"
  },
  {
    "id": 3,
    "codigo": "HARRY03",
    "nome": "Harry Potter e o prisioneiro de Azkaban",
    "preco": 29.9,
    "createdAt": "2021-05-25T21:51:35.124Z",
    "updatedAt": "2021-05-25T21:51:35.124Z"
  },
  {
    "id": 4,
    "codigo": "HARRY04",
    "nome": "Harry Potter e o Cálice de Fogo",
    "preco": 29.9,
    "createdAt": "2021-05-25T21:52:18.521Z",
    "updatedAt": "2021-05-25T21:52:18.521Z"
  },
  {
    "id": 5,
    "codigo": "HARRY05",
    "nome": "Harry Potter e a Ordem da Fênix",
    "preco": 29.9,
    "createdAt": "2021-05-25T21:52:26.782Z",
    "updatedAt": "2021-05-25T21:52:26.782Z"
  },
  {
    "id": 6,
    "codigo": "HARRY06",
    "nome": "Harry Potter e o Enigma do Príncipe",
    "preco": 29.9,
    "createdAt": "2021-05-25T21:52:36.152Z",
    "updatedAt": "2021-05-25T21:52:36.152Z"
  },
  {
    "id": 13,
    "codigo": "HARRY07",
    "nome": "Harry Potter e as Relíquias da Morte",
    "preco": 29.9,
    "createdAt": "2021-05-25T23:00:25.548Z",
    "updatedAt": "2021-05-25T23:00:25.548Z"
  }
]
````

<br/>

<br/>

### POST - create book

> URL http://localhost:3000/books

body:

```JSON
{
	"codigo": "HARRY07",
	"nome": "Harry Potter e as Relíquias da Morte",
	"preco": 29.9
}
````

<br/>

### PUT - update a book

> URL http://localhost:3000/books

```JSON
{
	"id": 1,
	"codigo": "HARRY07",
	"nome": "Harry Potter e as Relíquias da Morte",
	"preco": 29.9
}
````

<br/>

### DELETE - remove a books

> URL http://localhost:3000/books/:id


<br/>

## License

Nest is [MIT licensed](LICENSE).
