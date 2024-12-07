const auth = (req,res,next)=>{
    const key = "xyz";
    const isAuthorized = key == "xyz";
    if(!isAuthorized){
        res.status(401).send("unauthorized access");
    }
    next();
};

const userAuth = (req,res,next)=>{
    const key = "xyz";
    const isAuthorized = key == "xyz";
    if(!isAuthorized){
        res.status(401).send("unauthorized access");
    }
    next();
};

module.exports = {auth,userAuth};