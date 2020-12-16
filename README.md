## Description

This is a simple taxi cab search application. This application backend is written on NextJs and frontend is written on ReactJs. Any user can search using his location (like: dhaka `i.e`: after clicking search button the application will make a fake coordinate to search nearby available taxi cab. Without search key button will be disabled) and filter(like: Normal, Premium). User can combine this search and filter to get the desire data set.




## Setup Backend Environment

```bash
cp .env.example .env
```
Default host and port will be `http://localhost:5000/api` or make the nessary changes in the `.env` file.


## Installation Backend

```bash
$ npm install
```
## Setup Frontend Environment

```bash
cd client
cp .env.example .env
```
Default host and port will be `http://localhost:3000`. vist and search near by taxi or make the nessary changes in the `.env` file.
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