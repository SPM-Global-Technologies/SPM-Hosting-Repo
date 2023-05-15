const db = require("../routes/db-config")
const jwt  = require("jsonwebtoken");
const md5  = require("md5");
var base_url = process.env.BASE_URL;


module.exports = {
    /**
     * `Country.get()`
     */

    get: async function(){
        
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM countriesandcurriencies' , (error, results)=> {
                //console.log('SELECT * FROM catalog_section WHERE user_id='+user_id+' and catalog_key="'+catalog_key+'"')
                if (error) {
                    throw error;
                }
                return error ? reject(error) : resolve(results);
    
            })
        });
    },

}