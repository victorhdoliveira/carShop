## CarShop

Neste projeto, foram utilizados os princípios da Programação Orientada a Objetos (POO) para desenvolver uma API com CRUD capaz de gerenciar uma concessionária de veículos. Além disso, para armazenar os dados, foi utilizado o banco de dados MongoDB e o framework Mongoose para facilitar a interação com o banco de dados.

## API

| Método HTTP | Endpoint   | Descrição               | 
| :---------- | :--------- | :---------------------- |
| POST        | `/cars`   | Cadastra um carro no Banco de Dados    
| POST        | `/motorcycles`   | Cadastra uma moto no Banco de Dados    
| GET         | `/cars`|  Retorna a lista de carros
| GET         | `/cars/:id`   | Retorna o carro conforme o id
| GET         | `/motorcycles` | Retorna a lista de motos
| GET         | `/motorcycles/:id`   | Retorna a moto conforme o id
| PUT         | `/cars/:id`   | Atualiza os dados do carro de acordo com o id
| PUT         | `/motorcycles/:id`   | Atualiza os dados da moto de acordo com o id
| DELETE        | `/cars/:id`   | Deleta o carro selecionado pelo id
| DELETE        | `/motorcycles/:id`   | Deleta a moto selecionado pelo id


### Corpo das requisições

- POST `/cars`

```json
{
  "model": "Golf",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```

- POST `/motorcycles`

```json
{
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true,
  "buyValue": 30.000,
  "category": "Street",
  "engineCapacity": 600
}
```


## Tecnologias
* Node.js
* TypeScript
* MongoDB
* Mongoose
* Mocha
* Docker
* docker-compose

## Instalando Dependências

Clone o projeto

```bash
  git clone git@github.com:victorhdoliveira/carShop.git
```
Instale as dependências

```bash
  npm install
```
### Com Docker

1. Na raíz do projeto, rode os serviços node e db com o seguinte comando: 
```bash
npm run compose:up -d
```
2. Abra o terminal interativo do container:
```bash
docker exec -it car_shop bash
```
3. Instale as dependências dentro do container:
```bash
npm install
```

## Testes

Para rodar os testes rode o seguinte comando:

```bash
  npm run test:mocha
```
