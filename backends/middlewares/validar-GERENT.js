const { request } = require("express")
const jwt = require("jsonwebtoken");
const { extractallPayload } = require("../helpers/tokengenerator");

const valiADMIN = (req =request, res ,next)=>{

    const token = req.header("Authorizathion");
    if(!token){

        res.statusCode = 400;
        return res.json({msg: "No token in petition"})
    }
    
    try{
        extractallPayload(token).then((payload)=>{
      
            if(payload.uid.isgerente){
            next();
            }else{
                res.statusCode = 400;
                return res.json({msg: "this user is not admin"})
            }
          
        });
      

    }catch(error){

        console.log(error)
        res.status=401;
        res.json({msg : "No valid token"})
    }
    console.log(token)

    


}
module.exports = {
    valiADMIN
}