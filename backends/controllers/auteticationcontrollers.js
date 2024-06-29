const {request , response} = require('express')
const bcryptjs = require("bcryptjs")
const { validationResult } = require('express-validator');
const {Generate }= require("../helpers/tokengenerator")

const {User} = require("../src/class/User")
const {GenearteGeren} = require("../helpers/GerentGenearator")
const {GenerateEmployT}= require("../helpers/EmplyGenerator");
const { Database } = require('../database/config');

const getlistUSers = async (database,req = request,res = response) =>{
   await database.GetUsers((err,data)=>{
    if(err){
        res.json({msg:"Error al obtener users"})
        res.statusCode = 400
    }

    res.json({users:data})
    res.statusCode =200;
   })
}

const getonlineusers = async (database,req = reques, res = response )=>{
    res.json({msg : "Valid token all good"})
}
const discconectUser = async(database = Database.prototype ,req,res)=>{
    const userpasslogin= {nombre , password} = req.body

  
        //Exist Username
        const usuario = await database.UserQuery().FilterByField("username",nombre);

        if(usuario.lenght == 0 ){
            res.statusCode= 400;
            return res.json({msg : "This username no exist in DB"})
        }

        //PasswordVerifictaion

       const validpassword = bcryptjs.compareSync(password,usuario[0].password)
       if(!validpassword){
        res.statusCode =400;
        res.json({msg: "Error password is not valid"}) 
       }
       
       usuario[0].conectado = false;


       const asd = await database.UserQuery().UpdateField(usuario[0].id,"conectado",false)

       res.json({usuario,msg:"Disconnect sucefully"})
       
}
const authautenticationcontroller = async (database =  Database.prototype  , req = request,res=response)=>{
  
    const userpasslogin= {nombre , password} = req.body


        //Exist Username

    
        const usuario = await database.UserQuery().FilterByField("username",nombre);

   
        if(usuario.length == 0){
            res.statusCode= 400;
            return res.json({msg : "This username no exist in DB"})
        }

       //Online verification
       /*if(usuario.online){
            res.statusCode = 400;
            return res.json({msg: " This user is already login"})
        }*/
        //PasswordVerifictaion
       const validpassword = bcryptjs.compareSync(password,usuario[0].password)

       if(!validpassword){
        res.statusCode =400;
        return res.json({msg: "Error password is not valid"}) 
       }

       //Generating Token
       var token =""
       const verificliente = await database.clientesquey().FilterByField("id_user",usuario[0].id)
       const gerenteverifi = await database.AdministradorQuery().FilterByField("id_user",usuario[0].id)
       if(verificliente.lenght != 0){

         token = await Generate({uid:usuario[0].id ,isuser:true});

       }
       if(gerenteverifi != 0){

        
        token = await Generate({uid:usuario[0].id ,isgerente:true});
       }

       if(verificliente ==0  && gerenteverifi ==0){
        
        res.statusCode =400;
        return res.json({msg: "this username is not valid"}) 

       }

       usuario[0].conectado = true;
     
       const on = await database.UserQuery().UpdateField(usuario[0].id,"conectado","true")
                       
    
       if(!on){

        res.statusCode =400;
        return res.json({msg: "An erro ocurred"}) 
       }

      return   res.json({usuario,token})
        

   

}
const employauth = async(database =  Database.prototype,req =request,res=response)=>{

    const userpasslogin= {nombre , password} = req.body

   
    
    const usuario = await database.EmployQuery().FilterByField("username",nombre);

    if(typeof(usuario) == typeof(undefined)){
        res.statusCode= 400;
        return res.json({msg : "This username is not employ"})
    }
    
   const validpassword = bcryptjs.compareSync(password,usuario[0].password)

   if(!validpassword){
    res.statusCode =400;
    return res.json({msg: "Error password is not valid"}) 
   }

   //Generating Token

   const token = await GenerateEmployT(usuario.id);

  return  res.json({usuario,token})
}

const gerentenauth = async(database =  Database.prototype,req =request,res=response)=>{

    const userpasslogin= {nombre , password} = req.body

   
    
    const usuario = await database.GerenteQuery().FilterByField("username",nombre);

    if(typeof(usuario)== typeof(undefined)){
        res.statusCode= 400;
        return res.json({msg : "This username is not gerent"})
    }

    const isgerente = await database.FindGerenteByIdEmpleado(usuario[0].id)

    console.log(isgerente)

    if(isgerente == undefined){
        res.statusCode= 400;
        return res.json({msg : "This username is not gerent"})
    }

   const validpassword = bcryptjs.compareSync(password,usuario[0].password)

   if(!validpassword){
    res.statusCode =400;
    return res.json({msg: "Error password is not valid"}) 
   }

   //Generating Token

   const token = await GenearteGeren(usuario.id);

  return  res.json({usuario,token})
}

const singupautenticationcontroller = async (database = Database.prototype,req =request,res=response)=>{

    const{ nombre , correo, password , rol }= req.body;

    const UsuarioARegistrarse = new User(nombre , correo, false,password, rol);
    //Username exist validation
    const username =  await database.UserQuery().FilterByField("username",nombre);


    if(username.length != 0){
        res.statusCode = 404;
        return res.json({msg:"this username is already taken"})
    }
    //Email validation

    const email = await database.UserQuery().FilterByField("mail",correo);



    if(email.length != 0){
       
         res.statusCode = 400;
        return   res.json({
            msg:"the email exist"
        });

 
    }

    //encripting passwrod
    const passwordcrypter = bcryptjs.genSaltSync();
    UsuarioARegistrarse.password = bcryptjs.hashSync(password, passwordcrypter);


    //Save database
    const respuesta = await database.UserQuery().Add([nombre,UsuarioARegistrarse.password,correo],["username","password","mail"])
    const usuarioregsitrado = await database.UserQuery().FilterByField("username",nombre);
    const addclientes = await database.clientesquey().Add([usuarioregsitrado[0].id],["id_user"])

    if(!respuesta){
            res.statusCode = 404;
            res.json({msg:"Error Creating"})
        }
            res.statusCode = 200;
            res.json({msg:"sucefully created",user:respuesta})

    
        

}
module.exports = {

    getlistUSers,
    authautenticationcontroller,
    discconectUser,
    singupautenticationcontroller,
    getonlineusers,
    gerentenauth,
    employauth

}