const Auth = (obj) => async (req,res,next)=>{
    try{
        if(obj === "ADMIN"){
            return next()
        }
        else
        {
            throw new Error("This is UnAuthorised");
        }
    }
    catch(err){
        return res.status(401).json({
            message:err.message
        })
    }
}
module.exports = {Auth}