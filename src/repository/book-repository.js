import Book from "../models/bookstore.js";
import CrudRepository from "./crud-repository.js";

class BookRepository extends CrudRepository{

    constructor(){
        super(Book)
    }

    async findByBookName(bookName){
            try {
                const book = await Book.findOne({name : bookName});
                return book;
            } catch (error) {
                console.log("There is error in repository layer", error);
            }

    }

    async findByAuthor(authorName){
        try {
            const book = await Book.findOne({author : authorName});
            return book;
        } catch (error) {
            console.log("There is error in repository layer", error);
        }

    }

}

export default BookRepository;