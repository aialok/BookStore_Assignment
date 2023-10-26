import express  from "express"   
import bodyParser from "body-parser"
import connect from "./config/dbConfig.js";
import serverConfig from  "./config/serverConfig.js"
import apiRoutes from './routes/index.js'


// Intances
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/api', apiRoutes);


const setupAndStartServer = async (req,res)=>{
    app.listen(serverConfig.PORT, (req,res)=>{
        console.log(`Server started at ${serverConfig.PORT}`)
        connect();
    })

}

setupAndStartServer();