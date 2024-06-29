const JWT = require('jsonwebtoken')

const Generate =( uid) =>{

    return new Promise((resolve ,reject)=>{
            const payload = {uid}
            console.log(uid)
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
const extractPayload =(token)=>{

    return new Promise((resolve,reject)=>{

        JWT.verify(token, process.env.secretJWT, (err, decoded) => {
            if (err) {
              console.error('Error al verificar el token:', err);
              reject(err)
            }
            resolve(decoded.uid.uid)
          })
})


 
}

const extractallPayload =(token)=>{

    return new Promise((resolve,reject)=>{

        JWT.verify(token, process.env.secretJWT, (err, decoded) => {
            if (err) {
              console.error('Error al verificar el token:', err);
              reject(err)
            }
            resolve(decoded)
          })
})
}

module.exports = {
     Generate,
     extractPayload,
     extractallPayload
}