const JWT = require('jsonwebtoken')

const Generate =  ( uid = ' ') =>{

    return new Promise((resolve ,reject)=>{
            const payload = {uid}
            JWT.sign(
            payload,
            process.env.secretJWT,
            {expiresIn: '4h'},
            (err,token)=>{
                if(err){
                    console.log(err)
                    reject("cannot generate JWT")

                }else{
                    resolve(token);
                }})
                

})}


module.exports = {
     Generate
}