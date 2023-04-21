const db = require("../routes/db-config")
const jwt  = require("jsonwebtoken");
const logout = (req,res,next)=>{
    if(!req.cookies.userRegistered) {
        res.redirect("/")
    }else{
        // req.cookies.userRegistered = "";
        res.clearCookie("userRegistered");
        res.redirect("/")

    }
    // try{
    //     const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SECRET);
    //     console.log(decoded)

    //     db.query('SELECT * FROM user WHERE user_id=?',[decoded.id],(err, result)=>{
    //         if(err) return next();
    //         console.log(result)

    //         req.user = result[0];

    //         return next()
    //     })
    // }catch(err){
    //     if(err) return next();

    // }
}

module.exports = logout;
