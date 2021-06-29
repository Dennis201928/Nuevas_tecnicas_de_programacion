//            DataValidator.js

 //const{User}=require(`../lib/Shema/User`)

function datavalidator(check="query",schema){

    return (req,res,next)=>{
        var data=req[check]
        const{error,value}=schema.validate(data)

        if (error) {
            res.status(406).json({
                msg:error.details[0].message,
            })
        }else{
            req[check]=value
            next()
        }

    }
}
////

/*
function datavalidator(req, res, next) {
  req.pruebaMiddle = "Hola mundo con middleware";
  next();
}
*/
module.exports.datavalidator = datavalidator;
