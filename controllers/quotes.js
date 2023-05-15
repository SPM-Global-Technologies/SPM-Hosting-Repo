const db = require("../routes/db-config")

var base_url = process.env.BASE_URL;

module.exports = {
    /**
     * `._add()`
     */
    add:async function(req, res, next){
       var template_type = req.body.template_type;
       var account_id = req.params.accid;
       var opportunity_id = req.params.oppid;
       var user_id = req.user.user_id;

       console.log("titles :: "+template_type)
    //    db.query('SELECT * FROM quotes WHERE user_id='+user_id+' and account_id="'+account_id+'"'+' and opportunity_id="'+opportunity_id+'"'+' and template_type="'+template_type+'"',(error, result)=>{
    //         if (error) {
    //             throw error;
    //         }
    //         console.log(result.length)
    //         if(result.length > 0){
    //             req.quotes = result[0];
    //             return next();
    //         }else{
                db.query('SELECT * FROM quotes WHERE user_id='+user_id+' and account_id="'+account_id+'"'+' and opportunity_id="'+opportunity_id+'"',(error, result)=>{
                    if (error) {
                        throw error;
                    }
                    var count = 1;
if(result.length >0){
    count = parseInt(result.length+1);
}
if(count < 10){
    count = "00" + count;
}
if(count >= 10 && count < 100){
    count = "0" + count;
}
if(count >= 100 && count < 1000){
    count = ""+count;
}

                    // var count = 1;
                    // if(result.length >0){
                    //     // if(parseInt(result[0].quotes_name)){
                    //         count = parseInt(result.length+1);
                    //     // }
                    // }
                    // if(count > 0 && count < 10){
                    //     count = 0+""+0+""+0+""+count
                    // }
                    // if(count >= 10 && count < 100){
                    //     count = 0+""+0+""+count
                    // }
                    // if(count >= 100 && count < 999){
                    //     count = 0+""+count
                    // }
                    
                    db.query('INSERT INTO quotes SET ?',{template_type:template_type, user_id:user_id, account_id:account_id, opportunity_id:opportunity_id, quotes_name:count}, (error, results)=> {
                        if (error) {
                            throw error;
                        }
                        // console.log(results)
                        // db.query('SELECT * FROM quotes WHERE user_id='+user_id+' and account_id="'+account_id+'"'+' and opportunity_id="'+opportunity_id+'"'+' and template_type="'+template_type+'"',(error, result)=>{
                            // if (error) {
                            //     throw error;
                            // }
                            req.quotes = count;

                            return next();
                        // });
                    })

                })

    //         }

    //    })
        
    },

    /**
     * `.get()`
     */
     get:async function(req, res, next){
        var account_id = req.params.accid;
        var opportunity_id = req.params.oppid;
        var user_id = req.user.user_id;

        db.query('SELECT * FROM quotes WHERE user_id='+user_id+' and account_id="'+account_id+'"'+' and opportunity_id="'+opportunity_id+'"',(error, result)=>{
            if (error) {
                throw error;
            }
            req.quotes = result;
            return next();
            
        });
     },

     /**
     * `.get()`
     */
      getById:async function(req, res, next){
        var account_id = req.params.accid;
        var template_type = req.params.template_type;
        var quotes_id = req.params.quoteid;

        var opportunity_id = req.params.oppid;
        var user_id = req.user.user_id;

        db.query('SELECT * FROM quotes WHERE user_id='+user_id+' and account_id="'+account_id+'" and opportunity_id="'+opportunity_id+'" and template_type="'+template_type+'" and quotes_id="'+quotes_id+'"',(error, result)=>{
            if (error) {
                throw error;
            }
            if(result.length >0){
               req.quotes = result[0].quotes_name;
            }else{
                req.quotes = 0;
            }
            return next();
            
        });
     },
}