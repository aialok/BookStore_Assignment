import BookService from "../services/book-services.js";

const bookService = new BookService();

// Create a new book
export const createBook = async (req, res) => {
    try {
        const response = await bookService.createBook(req.body);

        return res.status(201).json({
            success: true,
            data: response,
            message: "Successfully created the book",
            err: {},
        });
    } catch (error) {
        return res.status(501).json({
            success: true,
            data: {},
            message: "Internal Server error",
            err: { error },
        });
    }
};

// Find a book by its name
export const findByBookName = async (req, res) => {
    try {
        const response = await bookService.findByBookName(req.params.bookName);

        return res.status(200).json({
            success: true,
            data: response,
            message: "Successfully fetched the book",
            err: {},
        });
    } catch (error) {
        return res.status(501).json({
            success: true,
            data: {},
            message: "Internal Server error",
            err: { error },
        });
    }
};

// Find a book by its author name
export const findByAuthorName = async (req, res) => {
    try {
        const response = await bookService.findByAuthorName(req.params.authorName);
      
        return res.status(200).json({
            success: true,
            data: response,
            message: "Successfully fetched the book",
            err: {},
        });
    } catch (error) {
        return res.status(501).json({
            success: true,
            data: {},
            message: "Internal Server error",
            err: { error },
        });
    }
};

// Delete a book by its ID
export const deleteBook = async (req, res) => {
    try {
        const response = await bookService.deleteBook(req.params.bookId);

        return res.status(200).json({
            success: true,
            data: response,
            message: "Successfully deleted the book",
            err: {},
        });
    } catch (error) {
        return res.status(501).json({
            success: true,
            data: {},
            message: "Internal Server error",
            err: { error },
        });
    }
};

// Update a book by its ID
export const updateBook = async (req, res) => {
    try {
        const response = await bookService.update(req.params.bookId, req.body);

        return res.status(200).json({
            success: true,
            data: response,
            message: "Successfully updated the book",
            err: {},
        });
    } catch (error) {
        return res.status(501).json({
            success: true,
            data: {},
            message: "Internal Server error",
            err: { error },
        });
    }
};

// Get all books
export const getAllBooks = async (req, res) => {
    try {
        const response = await bookService.getAllBooks();
        console.log(req.params);
        return res.status(200).json({
            success: true,
            data: response,
            message: "Successfully fetched all the books",
            err: {},
        });
    } catch (error) {
        return res.status(501).json({
            success: true,
            data: {},
            message: "Internal Server error",
            err: { error },
        });
    }
};

// Get a book by its ID
export const getBook = async (req, res) => {
    try {
        const response = await bookService.getBook(req.params.bookId);

        return res.status(200).json({
            success: true,
            data: response,
            message: "Successfully fetched the book",
            err: {},
        });
    } catch (error) {
        return res.status(501).json({
            success: true,
            data: {},
            message: "Internal Server error",
            err: { error },
        });
    }
};
