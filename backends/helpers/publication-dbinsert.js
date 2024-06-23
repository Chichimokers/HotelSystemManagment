
const Publicacion = require('../src/models/articlemodel') 

const InsertDBPublication = async (nombre,content)=>{

  return new Promise((resolve,reject)=> {
        try{

        const Article = new Publicacion({owner:nombre,content:content})

        Article.save()

        resolve(true)

        }catch(error){

            reject(false)
            console.log(error);
            throw new Error("Cannto insert in DB the article")
        }




  })
}

module.exports = {
     InsertDBPublication
}