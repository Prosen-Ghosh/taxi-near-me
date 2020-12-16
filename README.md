<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


## Setup Backend Environment

```bash
cp .env.example .env
```
make the nessary changes in the `.env` file.


## Installation Backend

```bash
$ npm install
```
## Setup Frontend Environment

```bash
cd client
cp .env.example .env
```
make the nessary changes in the `.env` file.
## Installation Frontend

```bash
cd client
$ npm install
```
## Seed DB

```bash
npx nestjs-command create:bulk-taxi
```

## Remove Data From DB
```bash
npx nestjs-command remove:all-taxi
```

## Running the backend app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the frontend app

```bash
cd client
# development
$ npm run start

# production
$ npm run build
```

## Test Backend

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [Prosen Ghosh](https://www.linkedin.com/in/prosen-ghosh/)