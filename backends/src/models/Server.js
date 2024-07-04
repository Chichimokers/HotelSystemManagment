const express = require('express');
require ('dotenv').config();
const cors = require('cors')


const BD = require("../../database/config");
const  expressListEndpoints = require('express-list-endpoints');

class Server {

    constructor(){

        this.app = express();


        this.port = 8080;

        this.autenticationpath = "/auth";
        this.dbroute = "/db"
        this.userroutes="/user"

        this.dbconnection()

        this.middelwares();


        this.routes();
    }
 
    dbconnection(){
      this.database = new BD.Database();
    }
    //MIDLEWARES
    middelwares(){
        //Para parsear un json easy
   
     this.app.use(cors({
        origin: 'http://localhost:4200', // Replace with your Angular app's URL
        methods: 'GET, POST, PUT, DELETE, OPTIONS,PATCH',
 
      }));
       this.app.use(express.json())
        //en la peticion pones const {nombres, apellido } = req.body
      
    
       this.app.use(express.static('../public'));
    }
    //SERVER INITIALIZATION
    strartserver(){
        
    this.app.listen(this.port,()=>{
    
    console.log("The server is runnig in port  ", this.port);

   // console.log(expressListEndpoints(this.app))

})
    }
    //RUTAS
    routes(){

      this.app.use(this.autenticationpath,require("../routes/autentication")(this.database))
      
      this.app.use(this.dbroute,require("../routes/databseroutes")(this.database))

      this.app.use(this.userroutes,require("../routes/UserRoutes")(this.database))

      this.app.get('/', (req, res) => {
        res.send(expressListEndpoints(this.app))
      });
      this.app.get('*', (req, res) => {
        res.json("estas inflanda")
      });
        
    }
}
module.exports = Server;