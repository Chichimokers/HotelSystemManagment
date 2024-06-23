const {validationResult} = require("express-validator")

const validation = ( req,res, next ) => {

    const error = validationResult(req);


    if(!error.isEmpty()){

                res.statusCode = 400;
        return res.json(error);
        
    }
    next();

}

module.exports = {
    validation
}