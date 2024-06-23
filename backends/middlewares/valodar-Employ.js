const { request } = require("express")
const jwt = require("jsonwebtoken")

const valiEmploy = (req =request, res ,next)=>{
    const token = req.header("Authorizathion");
    if(!token){
        res.statusCode = 400;
        return res.json({msg: "No token in petition"})
    }
    
    try{

        jwt.verify(token,process.env.secretEmploy)
        next();

    }catch(error){

        console.log(error)
        res.status=401;
        res.json({msg : "No valid token"})
    }
    console.log(token)

    


}
module.exports = {
    valiEmploy
}