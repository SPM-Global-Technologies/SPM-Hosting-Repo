const db = require("../routes/db-config")
const jwt  = require("jsonwebtoken");
const md5  = require("md5");


module.exports = {

    /**
     * `Account._add()`
     */
    add: function(req, res) {
        // var users = user.get();
        if(req.user){
            var accounts = req.body.accounts;
            var owner = req.body.owner;
            var user_id = req.user.user_id;
            // console.log(req.user)
            var parent_account = req.body.parent_account;
            var description = req.body.description;
            var region = req.body.region;
            var industry = req.body.industry;
            var vertical = req.body.vertical;
            var type = req.body.type;

            var billing_street1 = req.body.billing_street1;
            var billing_street2 = req.body.billing_street2;
            var billing_city = req.body.billing_city;
            var billing_state = req.body.billing_state;
            var billing_zip = req.body.billing_zip;
            var billing_country = req.body.billing_country;
            var billing_phone = req.body.billing_phone;
            var shipping_street1 = req.body.shipping_street1;
            var shipping_street2 = req.body.shipping_street2;
            var shipping_city = req.body.shipping_city;
            var shipping_state = req.body.shipping_state;
            var shipping_zip = req.body.shipping_zip;
            var shipping_country = req.body.shipping_country;
            var shipping_phone = req.body.shipping_phone;
        
            var excelrate_partner = req.body.excelrate_partner;
            var commercial_region = req.body.commercial_region;
            var commercial_subregion = req.body.commercial_subregion;
            var vat_number = req.body.vat_number;
            var delivery_area = req.body.delivery_area;

            var d = Date();
            var a = d.toString()

            var access_key = md5(a+""+accounts+""+user_id+""+owner);

            db.query('INSERT INTO accounts SET ?',{user_id:user_id, accounts:accounts, owner:owner, parent_account:parent_account, description: description, region: region, industry:industry, vertical:vertical, type:type, billing_street1:billing_street1, billing_street2:billing_street2, billing_city:billing_city, billing_state:billing_state, billing_zip:billing_zip, billing_country:billing_country, billing_phone:billing_phone, shipping_street1:shipping_street1, shipping_street2:shipping_street2, shipping_city:shipping_city, shipping_state:shipping_state, shipping_zip:shipping_zip, shipping_country:shipping_country, shipping_phone:shipping_phone, excelrate_partner:excelrate_partner, commercial_region:commercial_region, commercial_subregion:commercial_subregion, vat_number:vat_number, delivery_area:delivery_area, access_key:access_key}, (error, results)=> {
                if (error) {
                    throw error;
                    // req.flash("error","Failed to Created!")
                    // res.redirect("/")
                }
                req.flash("success","Successfully Created!")
                res.redirect("/createaccount")
            })
        }else{
            req.flash("error","Failed to Created! please login")
            res.redirect("/")

        }

    },

    get:function(user,callback){
       
            db.query('SELECT * FROM accounts WHERE user_id='+user.user_id , (error, results)=> {
                if (error) {
                    throw error;
                }
                callback(null, results);
            })
           
    },

    getById:function(user,id,callback){
        db.query('SELECT * FROM accounts WHERE user_id='+user.user_id+' and access_key="'+id+'"' , (error, results)=> {
            if (error) {
                throw error;
            }
            callback(null, results[0]);
        })
    },

    getAccount: async function(id, user){
        var catalog_key = catalog_key;
        var user_id = user.user_id;
        
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM accounts WHERE user_id='+user.user_id+' and access_key="'+id+'"' , (error, results)=> {
                if (error) {
                    throw error;
                }
                return error ? reject(error) : resolve(results[0]);
    
            })
        });
    },

    updateaccount: function(req, res) {
        // var users = user.get();
        console.log(req.body);
        if(req.user){
            if(req.body.name){
                var name = req.body.name;
                var id = req.body.id;
                var user_id = req.user.user_id;
                var value = req.body.value;
                var set_val = "";
                if(name=="accounts")
                {
                    set_val += "accounts = '"+value+"'";
                }
                if(name=="owner")
                {
                    set_val += "owner = '"+value+"'";
                }
                if(name=="parent_account")
                {
                    set_val += "parent_account = '"+value+"'";
                }
                if(name=="description")
                {
                    set_val += "description = '"+value+"'";
                }
                if(name=="region")
                {
                    set_val += "region = '"+value+"'";
                }
                if(name=="industry")
                {
                    set_val += "industry = '"+value+"'";
                }
                if(name=="vertical")
                {
                    set_val += "vertical = '"+value+"'";
                }
                if(name=="type")
                {
                    set_val += "type = '"+value+"'";
                }
                if(name=="billing_street1")
                {
                    set_val += "billing_street1 = '"+value+"'";
                }
                if(name=="billing_street2")
                {
                    set_val += "billing_street2 = '"+value+"'";
                }
                if(name=="billing_city")
                {
                    set_val += "billing_city = '"+value+"'";
                }
                if(name=="billing_state")
                {
                    set_val += "billing_state = '"+value+"'";
                }
                if(name=="billing_zip")
                {
                    set_val += "billing_zip = '"+value+"'";
                }
                if(name=="billing_country")
                {
                    set_val += "billing_country = '"+value+"'";
                }
                if(name=="billing_phone")
                {
                    set_val += "billing_phone = '"+value+"'";
                }
                if(name=="shipping_street1")
                {
                    set_val += "shipping_street1 = '"+value+"'";
                }
                if(name=="shipping_street2")
                {
                    set_val += "shipping_street2 = '"+value+"'";
                }
                if(name=="shipping_city")
                {
                    set_val += "shipping_city = '"+value+"'";
                }
                if(name=="shipping_state")
                {
                    set_val += "shipping_state = '"+value+"'";
                }
                if(name=="shipping_zip")
                {
                    set_val += "shipping_zip = '"+value+"'";
                }
                if(name=="shipping_country")
                {
                    set_val += "shipping_country = '"+value+"'";
                }
                if(name=="shipping_phone")
                {
                    set_val += "shipping_phone = '"+value+"'";
                }
                if(name=="notes")
                {
                    set_val += "notes = '"+value+"'";
                }
                if(name=="external_refrences_id1")
                {
                    set_val += "external_refrences_id1 = '"+value+"'";
                }
                if(name=="external_refrences_id2")
                {
                    set_val += "external_refrences_id2 = '"+value+"'";
                }
                if(name=="crm_refrence")
                {
                    set_val += "crm_refrence = '"+value+"'";
                }
                if(name=="file_path")
                {
                    set_val += "file_path = '"+value+"'";
                }
                var currentdate = new Date(); 
               var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
                set_val += ", modified_on = '"+datetime+"'"

                console.log("UPDATE accounts SET "+set_val+ " WHERE id="+id+" and user_id="+user_id)
                db.query("UPDATE accounts SET "+set_val+ " WHERE access_key='"+id+"' and user_id="+user_id , (error, results)=> {
                    if (error) {
                        // throw error;
                        // res.json(JSON.stringify({status:"error", name:name, id:id}))
                        res.send({status:"error", name:name, id:id})


                    }
                    res.send({status:"success", name:name, id:id})
                    // res.json(JSON.stringify({status:"success", name:name, id:id}))
                })
            }else{
                // res.json(JSON.stringify({status:"error"}))
                res.send({status:"error"})

            }
           

           
        }else{
            // res.json(JSON.stringify({status:"error"}))
            res.send({status:"error"})


        }

    },


}