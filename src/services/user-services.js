import { compareSync } from "bcrypt";
import UserRepository from "../repository/user-repository.js";
import Jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config();

import variable from '../config/serverConfig.js'
import { response } from "express";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const response = await this.userRepository.create(data);
      return response;
    } catch (error) {
      console.log("Error in service layer", error);
    }
  }

  async signin(data) {
    try {
      const response = await this.userRepository.getByEmail(data.email);

      const isPasswordMathed = this.comparePassword(
        data.password,
        response.password
      );

      if (!isPasswordMathed) {
        console.log("Passoword is wrong");
        throw { error: "Incorrect Password" };
      }

      const jwtToken = this.createToken({email : response.email,
      id : response._id});

      return jwtToken;


    } catch (error) {
      console.log("Error in repository layer", error);
    }
  }

  async isAuthenticated(token){

   try {
     const isAuthenticated = this.verifyToken(token);
 
     if(!isAuthenticated)
     {
       console.log('Invalid Token');
       throw {error : 'Invalid token'}
     }
 
     const user = await this.userRepository.get(isAuthenticated.id);
 
     if(!user){
       console.log("Token is expired now")
       throw {error : "Token is expired now"}
     } 
 
     return  isAuthenticated;
   } catch (error) {
    console.log("Something wrong in authenticating jwt token", error);
    throw error;
   }



  }



  createToken(user) {
   try {
     const jwt = Jwt.sign(user,'JWT_TOKEN', { expiresIn: "1hr" });
 
     return jwt;
   } catch (error) {
      console.log("Token Creation failed", error)
    throw error;
   }
  }

  verifyToken(token){
    try {
        const decoded = Jwt.verify(token, 'JWT_TOKEN')
        return decoded;
    } catch (error) {
        console.log("TOKEN is not verified")
    }
  }

  comparePassword(plainPassword, hashPassword) {
   try {
     const compare = compareSync(plainPassword, hashPassword);
     return compare;
   } catch (error) {
      console.log("Something went wrong in passoword comparison");
      throw error;
   }
  }
}  

export default UserService;
