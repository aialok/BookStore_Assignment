# Book Directory CRUD Application

This is a basic CRUD application for managing a book directory using Node.js. It allows you to perform the following operations:

- GET all books
- GET a book by ID
- POST a new book
- PUT update an existing book
- DELETE a book by ID
- GET book by Book Name
- GET book by Author Name

## Installation

To install the application, clone the repository and run the following command:

## Usage

To start the application, run the following command:
-  `npm i`
-  `npm start`

This will start the server on port 3000. You can then use a tool like Postman to make requests to the server.

### GET all books

To retrieve all books, make a GET request to the following URL:

### GET a book by ID

To retrieve a book by ID, make a GET request to the following URL:

Replace `:id` with the ID of the book you want to retrieve.

### POST a new book

To add a new book, make a POST request to the following URL:

Include the book details in the request body in JSON format.

### PUT update an existing book

To update an existing book, make a PUT request to the following URL:

Replace `:id` with the ID of the book you want to update. Include the updated book details in the request body in JSON format.

### DELETE a book by ID

To delete a book by ID, make a DELETE request to the following URL:

Replace `:id` with the ID of the book you want to delete.
