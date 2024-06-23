const {Router, request} = require('express');
const { check } = require('express-validator');
const { getlistUSers,
    a, 
     authautenticationcontroller,
      singupautenticationcontroller,
       getonlineusers,gerentenauth, 
       employauth,
       discconectUser} = require('../../controllers/auteticationcontrollers');
const { valiJWT } = require('../../middlewares/validar-JWT');
const { validation } = require('../../middlewares/validation');
const router = Router();
const Database = require("../../database/config")



module.exports = Rutas;

 function Rutas(database)  { 

    
router.post("/discconectUser",(req,res)=>discconectUser(database,req,res));
router.post("/employlogin",(req,res)=>employauth(database,req,res))
router.post("/auth",(req,res)=>authautenticationcontroller(database,req,res));
router.post("/gerentelogin",(req,res)=>gerentenauth(database,req,res))
router.post("/singup",[ 
    check("correo","the email is not valid").isEmail(),
    check('nombre',"is obligatory put name no empty").not().isEmpty(),
    check('password','the lenght of password is wrong min 6 letters').isLength({min: 6 },),
    validation
],(req,res)=>singupautenticationcontroller(database,req,res));

return router


}

