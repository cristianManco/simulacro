<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
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
- `GET /books`: Get all available books.
- `GET /books/:id`: Get a specific book by its ID.
- `POST /books`: Create a new book.
- `PUT /books/:id`: Update an existing book.
- `DELETE /books/:id`: Delete a book by its ID.
- `GET /authors`: Get all available authors.
- `GET /authors/:id`: Get a specific author by its ID.
- `POST /authors`: Create a new author.
- `PUT /authors/:id`: Update an existing author.
- `DELETE /authors/:id`: Delete an author by its ID.
- `GET /sales`: Get all available sales.
- `GET /sales/:id`: Get a specific sale by its ID.
- `POST /sales`: Register a new sale.
- `PUT /sales/:id`: Update an existing sale.
- `DELETE /sales/:id`: Delete a sale by its ID.

### API Documentation
The API documentation is available in Swagger. After running the application, visit `http://localhost:3000/api/docs` in your browser to access the documentation.

## Project Structure
```
src/
|-- author/
|   |-- dto/                  # DTOs (Data Transfer Objects) for author operations
|   |-- entities/             # Author entity definition
|   |-- author.controller.ts  # Controller for author operations
|   |-- author.module.ts      # Module for author-related functionalities
|   |-- author.service.ts     # Service for author operations
|
|-- book/
|   |-- dto/                  # DTOs for book operations
|   |-- entities/             # Book entity definition
|   |-- book.controller.ts    # Controller for book operations
|   |-- book.module.ts        # Module for book-related functionalities
|   |-- book.service.ts       # Service for book operations
|
|-- sales/
|   |-- dto/                  # DTOs for sales operations
|   |-- entities/             # Sale entity definition
|   |-- sale.controller.ts    # Controller for sales operations
|   |-- sale.module.ts        # Module for sale-related functionalities
|   |-- sale.service.ts       # Service for sale operations
|
|-- app.module.ts             # Main application module
|-- main.ts                   # Application entry point
|-- config.ts                 # Configuration file for database and other settings
|-- ...                       # Other files and folders
```

## Contribution
To contribute to this project, follow these steps:
1. Fork this repository.
2. Create a new branch with the prefix `feature/` followed by your feature name.
3. Make your changes and tests.
4. Make a pull request to the `develop` branch of this repository.

- Author - [Cristian Manco](https://github.com/cristianManco)


## License
This project is licensed under the MIT License. See the LICENSE file for more details.

---

For any questions or issues, contact Stiven Loaiza at camilomanco2005@gmail.com Thank you for using our API!