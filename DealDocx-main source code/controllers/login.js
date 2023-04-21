const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");
const bcrypt = require("bcrypt");

const login = async (req , res) =>{
const{ email, password} = req.body;
if(!email || !password) return res.json({status: "error", error: "Please enter your email and password"});
else{
    db.query('SELECT user_id as id,email,password FROM user WHERE email = ?',[email], async (Err, result) => {
        console.log(result)
        if (Err) throw Err;
        if(!result.length || !await bcrypt.compare(password,result[0].password)) return res.json({status : "error",
        error: "Incorrect Email or password" })
        else{
            const token = jwt.sign ({id: result[0].id}, process.env.JWT_SECRET,{
                expiresIn:"1d"
            })
            const cookieOptions={
                expiresIn: new Date(Date.now() + parseInt(process.env.COOKIE_EXPIRES) * 24 * 60 * 60 * 1000),
                httpOnly: true
            }
            console.log(cookieOptions)
            res.cookie("userRegistered", token, cookieOptions);
            return res.json({status: "success", success: "User has been logged In"});
                
        }

    })
}

}
   
module.exports = login;