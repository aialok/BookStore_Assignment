import express from 'express'

const router = express.Router();

import {signUp, signIn , isAuthenticated} from '../../controller/user-controller.js'
import {createBook, getAllBooks, deleteBook, updateBook, findByBookName, findByAuthorName} from '../../controller/book-controller.js'

router.post("/user/signup", signUp);
router.post('/user/signin', signIn);
router.post('/user/isAuthenticated', isAuthenticated);

// Book routes
router.post("/book", createBook); // Create a new book
router.get("/book", getAllBooks); // Get all books
router.delete("/book/:bookId", deleteBook); // Delete a book by its ID
router.put("/book/:bookId", updateBook); // Update a book by its ID
router.get("/book/:bookName", findByBookName); // Find a book by its name
router.get("/book/author/:authorName", findByAuthorName); // Find a book by its author name



export default router;