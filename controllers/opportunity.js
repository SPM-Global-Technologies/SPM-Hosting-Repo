const db = require("../routes/db-config")
const jwt  = require("jsonwebtoken");


module.exports = {

    /**
     * `Account._add()`
     */
    add: function(req, res) {
        // var users = user.get();
        if(req.user){
            console.log("id :: "+req.params.id);
            var account_id = req.params.id;
            var user_id = req.user.user_id;
            var opp_name = req.body.opp_name;

            var net_price = req.body.net_price;
            var margin = req.body.margin;
            var cost = req.body.cost;
            var stage = req.body.stage;
            var probability = req.body.probability;
            var hours = req.body.hours;

            var close = req.body.close;
            var start = req.body.start;
            var duration_weeks = req.body.duration_weeks;
            var owner = req.body.owner;
            var region = req.body.region;
            var vertical = req.body.vertical;
            var practice = req.body.practice;
            var currency = req.body.currency;
            var org = req.body.org;
            var type = req.body.type;
            console.log(opp_name);
            db.query('INSERT INTO opportunity SET ?',{account_id:account_id, user_id:user_id, opportunity_name:opp_name, net_price:net_price, margin:margin, cost: cost, stage: stage, probability:probability, hours:hours, close:close, start:start, duration_weeks:duration_weeks, owner:owner, region:region, vertical:vertical, practice:practice, currency:currency, org:org, type:type}, (error, results)=> {
                if (error) {
                    throw error;
                    // req.flash("error","Failed to Created!")
                    // res.redirect("/")
                }
                req.flash("success","Successfully Created!")
                res.redirect("/account/edit/"+account_id)
            })
        }else{
            req.flash("error","Failed to Created! please login")
            res.redirect("/")

        }
    },

    getByAccId:function(user,id,callback){
        db.query('SELECT * FROM opportunity WHERE user_id='+user.user_id+' and account_id="'+id+'"' , (error, results)=> {
            if (error) {
                throw error;
            }
            callback(null, results);
        })
    },

    getById:function(user, accid, oppid, callback){
        db.query('SELECT * FROM opportunity WHERE user_id='+user.user_id+' and account_id="'+accid+'" and opportunity_id="'+oppid+'"' , (error, results)=> {
            if (error) {
                throw error;
            }
            callback(null, results[0]);
        })
    },

    getOpportunity: async function(accid, oppid, user){
        var catalog_key = catalog_key;
        var user_id = user.user_id;
        
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM opportunity WHERE user_id='+user.user_id+' and account_id="'+accid+'" and opportunity_id="'+oppid+'"' , (error, results)=> {
                if (error) {
                    throw error;
                }
                return error ? reject(error) : resolve(results[0]);
    
            })
        });
    },

    updateopportunity: function(req, res) {
        // var users = user.get();
        console.log(req.body);
        if(req.user){
            if(req.body.name){
                var name = req.body.name;
                var oppid = req.body.oppid;
                var accid = req.body.accid;
                var user_id = req.user.user_id;
                var value = req.body.value;
                var set_val = "";
                if(name=="opportunity_name")
                {
                    set_val += "opportunity_name = '"+value+"'";
                }
                if(name=="net_price")
                {
                    set_val += "net_price = '"+value+"'";
                }
                if(name=="margin")
                {
                    set_val += "margin = '"+value+"'";
                }
                if(name=="cost")
                {
                    set_val += "cost = '"+value+"'";
                }
                if(name=="stage")
                {
                    set_val += "stage = '"+value+"'";
                }
                if(name=="probability")
                {
                    set_val += "probability = '"+value+"'";
                }
                if(name=="hours")
                {
                    set_val += "hours = '"+value+"'";
                }
                if(name=="close")
                {
                    set_val += "close = '"+value+"'";
                }
                if(name=="start")
                {
                    set_val += "start = '"+value+"'";
                }
                if(name=="duration_weeks")
                {
                    set_val += "duration_weeks = '"+value+"'";
                }
                if(name=="account")
                {
                    set_val += "account = '"+value+"'";
                }
                if(name=="opp_type")
                {
                    set_val += "opp_type = '"+value+"'";
                }
                if(name=="permission_type")
                {
                    set_val += "permission_type = '"+value+"'";
                }
                if(name=="owner")
                {
                    set_val += "owner = '"+value+"'";
                }
                if(name=="region")
                {
                    set_val += "region = '"+value+"'";
                }
                if(name=="vertical")
                {
                    set_val += "vertical = '"+value+"'";
                }
                if(name=="practice")
                {
                    set_val += "practice = '"+value+"'";
                }
                if(name=="currency")
                {
                    set_val += "currency = '"+value+"'";
                }
                if(name=="org")
                {
                    set_val += "org = '"+value+"'";
                }
                if(name=="type")
                {
                    set_val += "type = '"+value+"'";
                }
                if(name=="status")
                {
                    set_val += "status = '"+value+"'";
                }
                if(name=="parent_opportunity")
                {
                    set_val += "parent_opportunity = '"+value+"'";
                }
                if(name=="permision_type")
                {
                    set_val += "permision_type = '"+value+"'";
                }
                if(name=="list_price")
                {
                    set_val += "list_price = '"+value+"'";
                }
                if(name=="discount")
                {
                    set_val += "discount = '"+value+"'";
                }
                if(name=="avg_rate")
                {
                    set_val += "avg_rate = '"+value+"'";
                }
                if(name=="description")
                {
                    set_val += "description = '"+value+"'";
                }
                if(name=="delivery_manager")
                {
                    set_val += "delivery_manager = '"+value+"'";
                }
                if(name=="due_date")
                {
                    set_val += "due_date = '"+value+"'";
                }
                if(name=="template_quote")
                {
                    set_val += "template_quote = '"+value+"'";
                }
                if(name=="billingstreet1")
                {
                    set_val += "billingstreet1 = '"+value+"'";
                }
                if(name=="billingstreet2")
                {
                    set_val += "billingstreet2 = '"+value+"'";
                }
                if(name=="billingcity")
                {
                    set_val += "billingcity = '"+value+"'";
                }
                if(name=="billingstate")
                {
                    set_val += "billingstate = '"+value+"'";
                }
                if(name=="billingzip")
                {
                    set_val += "billingzip = '"+value+"'";
                }
                if(name=="billingcountry")
                {
                    set_val += "billingcountry = '"+value+"'";
                }
                if(name=="billingphone")
                {
                    set_val += "billingphone = '"+value+"'";
                }
                if(name=="shippingstreet1")
                {
                    set_val += "shippingstreet1 = '"+value+"'";
                }
                if(name=="shippingstreet2")
                {
                    set_val += "shippingstreet2 = '"+value+"'";
                }
                if(name=="shippingcity")
                {
                    set_val += "shippingcity = '"+value+"'";
                }
                if(name=="shippingstate")
                {
                    set_val += "shippingstate = '"+value+"'";
                }
                
                if(name=="shippingzip")
                {
                    set_val += "shippingzip = '"+value+"'";
                }
                if(name=="shippingcountry")
                {
                    set_val += "shippingcountry = '"+value+"'";
                }
                if(name=="shippingphone")
                {
                    set_val += "shippingphone = '"+value+"'";
                }
                var currentdate = new Date(); 
                var datetime = currentdate.getFullYear() + "-"
                 + (currentdate.getMonth()+1)  + "-" 
                 + currentdate.getDate() + " "  
                 + currentdate.getHours() + ":"  
                 + currentdate.getMinutes() + ":" 
                 + currentdate.getSeconds();
                 set_val += ", modified_on = '"+datetime+"'"
 

                db.query("UPDATE opportunity SET "+set_val+ " WHERE opportunity_id='"+oppid+"' and account_id='"+accid+"' and user_id="+user_id , (error, results)=> {
                    if (error) {
                        // throw error;
                        // res.json(JSON.stringify({status:"error", name:name, id:id}))
                        res.send({status:"error", name:name, oppid:oppid, accid:accid})


                    }
                    res.send({status:"success", name:name, oppid:oppid, accid:accid})
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