import mongoose from "mongoose";
import serverConfig from "./serverConfig.js";
const connect = async()=>{
  await mongoose
  .connect(serverConfig.MONGO_DB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
}

export default connect; 

