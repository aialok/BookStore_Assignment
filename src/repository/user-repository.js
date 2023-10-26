import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository{

    constructor(){
        super(User)
    }

    async getByEmail(email){
        try {
            const response = await User.findOne({email}).lean();
            return response;
        } catch (error) {
                console.log("There is error in User Repository");
        }
    }

    async getAll(){
        try {
            const result = await User.find({}).populate( {path : 'user'}).populate({path :'likeable'});
            return result;
        } catch (error) {
          console.log("Something went wrong in the crud Repository");
          throw error;
        }
    }


}

export default UserRepository;