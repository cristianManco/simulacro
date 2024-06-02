<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ git clone https://github.com/cristianManco/nestjs-typeorm-example.git
$ cd nestjs-typeorm-example
$ npm install
$ yarn install
```

## environment variables need to be

#### add file .env
```bash
# enviroment variables

DATABASE_TYPE: This specifies the type of database you are using. It can be postgres, mongo, or mysql.
DATABASE_HOST: This is the hostname or IP address of your database server.
DATABASE_PORT: This is the port number on which your database server is listening.
DATABASE_USERNAME: This is the username that your application will use to authenticate with the database.
DATABASE_PASSWORD: This is the password that your application will use to authenticate with the database.
DATABASE_DB: This is the name of the database that your application will connect to.
PORT: This is the port number on which your application will run. In this case, it’s set to 3000.

```


## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

# Digital Library API

## Description
This API provides functionalities for managing a digital library, allowing CRUD operations on books, authors, and sales. It also includes capabilities for pagination, filtering, and sorting, as well as data validations and appropriate response codes.

## Installation and Setup
1. Clone this repository to your local machine.
2. Install dependencies using the command `npm install`.
3. Configure your PostgreSQL or MySQL database and update the configuration in the `config.ts` file.
4. Run database migrations with the command `npm run migration:run`.
5. Start the application using the command `npm run start`.

## Usage
### Available Endpoints
- `GET /api/books/all`: Get all available books.
- `GET /api/books/:id`: Get a specific book by its ID.
- `POST /api/books/new`: Create a new book.
- `PUT /api/books/:id`: Update an existing book.
- `DELETE /api/books/:id`: Delete a book by its ID.
- `GET /api/authors/all`: Get all available authors.
- `GET /api/authors/:id`: Get a specific author by its ID.
- `POST /api/authors/new`: Create a new author.
- `PUT /api/authors/:id`: Update an existing author.
- `DELETE /api/authors/:id`: Delete an author by its ID.
- `GET /api/sales/all`: Get all available sales.
- `GET /api/sales/:id`: Get a specific sale by its ID.
- `POST /api/sales/new`: Register a new sale.
- `PUT /api/sales/:id`: Update an existing sale.
- `DELETE /api/sales/:id`: Delete a sale by its ID.

### API Documentation
The API documentation is available in Swagger. After running the application, visit `http://localhost:3000/api/docs` in your browser to access the documentation.

## Project Structure
```
src/
|-- author/
|   |--config.ts              # Configuration file for database and other settings
|   |--Guard/                 # guard configuration for sales
|
|-- author/
|   |-- entities/             # Author entity definition
|   |-- dto/                  # DTOs (Data Transfer Objects) for author operations
|   |-- controller/           # Controller for author operations
|   |-- module/               # Module for author-related functionalities
|   |--  service              # Service for author operations
|
|-- book/
|   |-- dto/                  # DTOs for book operations
|   |-- entities/             # Book entity definition
|   |-- controller/           # Controller for book operations
|   |-- module/               # Module for book-related functionalities
|   |-- service               # Service for book operations
|
|-- sales/
|   |-- dto/                  # DTOs for sales operations
|   |-- entities/             # Sale entity definition
|   |-- controller/           # Controller for sales operations
|   |-- module/               # Module for sale-related functionalities
|   |--  service              # Service for sale operations
|
|-- app.module.ts             # Main application module
|-- main.ts                   # Application entry point
|-- ...                       # Other files and folders
```

## Contribution
To contribute to this project, follow these steps:
1. Fork this repository.
2. Create a new branch with the prefix `feature/`or  `feat/` followed by your feature name.
3. Make your changes and tests.
4. Make a pull request to the `develop` branch of this repository.

- Author - [Cristian Manco](https://github.com/cristianManco)


## License
This project is licensed under the MIT License. See the LICENSE file for more details.

---

For any questions or issues, Cristian Manco at camilomanco2005@gmail.com Thank you for using our API!
