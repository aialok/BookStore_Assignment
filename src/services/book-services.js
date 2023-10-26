import BookRepository from "../repository/book-repository.js";

class BookService {
  constructor() {
    this.bookRepository = new BookRepository();
  }

  async createBook(data) {
    try {
      const book = await this.bookRepository.create(data);
      return book;
    } catch (error) {
      console.log("There is error in service layer", error);
    }
  }

  async findByBookName(data) {
    try {
      const book = await this.bookRepository.findByBookName(data);
      return book;
    } catch (error) {
      console.log("There is error in service layer", error);
    }
  }

  async FindByAuthorName(data) {
    try {
      const book = await this.bookRepository.FindByAuthorName(data);
      return book;
    } catch (error) {
      console.log("There is error in service layer", error);
    }
  }

  async deleteBook(bookId) {
    try {
      const response = await this.bookRepository.destroy(bookId);
      return response;
    } catch (error) {
      console.log("There is error in service layer", error);
    }
  }

  async update(bookId, data) {
    try {
      const response = await this.bookRepository.update(bookId, data);
      return response;
    } catch (error) {
      console.log("There is error in service layer", error);
    }
  }

  async getAllBooks() {
    try {
      const response = await this.bookRepository.getAll();
      return response;
    } catch (error) {
      console.log("There is error in service layer", error);
    }
  }

  async getBook(bookId) {
    try {
      const response = await this.bookRepository.get(bookId);
      return response;
    } catch (error) {
      console.log("There is error in service layer", error);
    }
  }

}

export default BookService;
