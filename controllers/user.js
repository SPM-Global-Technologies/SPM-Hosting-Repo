const db = require("../routes/db-config")
const jwt  = require("jsonwebtoken");

module.exports = {

    /**
     * `get.user()`
     */
    get: function(req, res) {
        console.log(req.cookies)
        if(!req.cookies.userRegistered) return false;
        try{
        const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SECRET);
        console.log(decoded)

        db.query('SELECT * FROM user WHERE user_id=?',[decoded.id],(err, result)=>{
            if(err) return false;
            console.log(result)

            // req.user = result[0];

            return result[0];
        })
        }catch(err){
            return false;

        }
    }
}