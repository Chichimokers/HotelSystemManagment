const JWT = require('jsonwebtoken')

const GenearteGeren =  ( uid = ' ') =>{

    return new Promise((resolve ,reject)=>{
            const payload = {uid}
            JWT.sign(
            payload,
            process.env.secretGEREN,
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
    GenearteGeren
}