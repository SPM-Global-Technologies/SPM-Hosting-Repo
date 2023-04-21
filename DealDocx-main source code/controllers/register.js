const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const register = async (req, res) =>{
    const { first_name, last_name, phone_number, email, password : Npassword } = req.body
    if (!email || !Npassword)return res.json({status : "error", error: "Please enter the password and email"});
    else{
        console.log(email);
        db.query('SELECT email FROM user WHERE email = ? or phone_number=?', [email,phone_number], async (err, result)=>{
          if(err) throw err;
          if (result[0]) return res.json({status: "error", error: "email and phone number has been already been registered"})  
          else{
            const password = await bcrypt.hash(Npassword, 8);
            console.log(password);
            db.query('INSERT INTO user SET ?',{first_name:first_name, phone_number:phone_number, last_name:last_name,email: email, password: password}, (error, results)=> {
                if (error) throw error;
                return res.json({status: "success", error: "user has been registered"})  


            })
          }
        })
    }


}
module.exports = register;