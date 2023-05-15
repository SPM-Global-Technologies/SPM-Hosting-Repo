const db = require("../routes/db-config")
const jwt  = require("jsonwebtoken");
const md5  = require("md5");

module.exports = {
    /**
     * `Lookups._add()`
     */

    add: async function(req, res){
        //var users = user.get();
        if(req.user){
            console.log(req.body)
            // var owner = req.body.owner;
            var user_id = req.user.user_id;
            var class_name = req.body.class_name;
          

            var d = Date();
            var a = d.toString();

            var access_key = md5(a+""+user_id+""+class_name);

            var looks_count = await getCountLookups(class_name, req.user.user_id);
            if(looks_count.count > 0)
            {
                return res.json({status: "error_exists",body:"Class Name Already Exists"});

            }else{

                db.query('INSERT INTO lookups SET ?', {user_id:user_id, class_name:class_name, lookups_accesskey:access_key},(error, result)=>{
                    if(error){
                        return res.json({status: "error"});
                        
                        // req.flash("error","Failed to Created!")
                        // res.redirect("/")
                    }
                    req.flash("success","Successfully Created!")
                    // res.redirect("/lookups")
                    return res.json({status: "success",access_key:access_key});

                })
            }

        





        }


    },

    get: async function(user){
        
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM lookups where user_id = '+user.user_id , (error, results)=> {
                //console.log('SELECT * FROM catalog_section WHERE user_id='+user_id+' and catalog_key="'+catalog_key+'"')
                if (error) {
                    throw error;
                }
                return error ? reject(error) : resolve(results);
    
            })
        });
    },

    getLookups_guided: async function(user){
        
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM lookups where user_id = '+user.user_id+' AND lookups_status=0' , (error, results)=> {
                //console.log('SELECT * FROM catalog_section WHERE user_id='+user_id+' and catalog_key="'+catalog_key+'"')
                if (error) {
                    throw error;
                }
                return error ? reject(error) : resolve(results);
    
            })
        });
    },

    get_lookups_data: async function(user){
        
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM lookups_data where user_id = '+user.user_id+' AND disable=0 ORDER BY `value1` ASC' , (error, results)=> {
                //console.log('SELECT * FROM catalog_section WHERE user_id='+user_id+' and catalog_key="'+catalog_key+'"')
                if (error) {
                    throw error;
                }
                return error ? reject(error) : resolve(results);
    
            })
        });
    },

    getById: async function(user, access_key){
        
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM lookups where user_id='+user.user_id+' AND lookups_accesskey="'+access_key+'"' , (error, results)=> {
                //console.log('SELECT * FROM catalog_section WHERE user_id='+user_id+' and catalog_key="'+catalog_key+'"')
                if (error) {
                    throw error;
                }
                return error ? reject(error) : resolve(results[0]);
    
            })
        });
    },

    add_lookups_data: function (req, res){
        //var users = user.get();
        if(req.user){
            console.log(req.body)
            var lookups = req.body.lookups;
            var user_id = req.user.user_id;
            var lookups_accesskey = req.body.lookups_accesskey;
            var code = req.body.code;
            var value1 = req.body.value1;
            var value2 = req.body.value2;
            var disable = req.body.disable;
            var value2 = req.body.value2;
          

            var d = Date();
            var a = d.toString();

            var access_key = md5(a+""+user_id+""+lookups);

            var access_key_id = req.body.access_key_id;

            if(access_key_id == ""){

                db.query('INSERT INTO lookups_data SET ?', {user_id:user_id, lookups_data_accesskey:access_key, lookups_accesskey:lookups_accesskey, lookups_name:lookups, code:code, value1:value1, value2:value2, disable:disable},(error, result)=>{
                    if(error){
                        return res.json({status: "error"});
                        
                        // req.flash("error","Failed to Created!")
                        // res.redirect("/")
                    }
                    // req.flash("success","Successfully Created!")
                    // res.redirect("/lookups")
                    return res.json({status: "success",access_key:access_key});

                })
            }else{

                db.query('UPDATE `lookups_data` SET lookups_name="'+lookups+'", code="'+code+'", value1="'+value1+'", value2="'+value2+'", disable='+disable+' WHERE user_id='+user_id+' AND lookups_data_accesskey="'+access_key_id+'" AND lookups_accesskey="'+lookups_accesskey+'"',(error, result)=>{
                    if(error){
                        return res.json({status: "error"});
                        
                        // req.flash("error","Failed to Created!")
                        // res.redirect("/")
                    }
                    // req.flash("success","Successfully Created!")
                    // res.redirect("/lookups")
                    return res.json({status: "success",access_key:access_key});

                })

            }

        





        }


    },

    getByLookupsData: async function(user, access_key){
        
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM lookups_data where user_id='+user.user_id+' AND lookups_accesskey="'+access_key+'"' , (error, results)=> {
                //console.log('SELECT * FROM catalog_section WHERE user_id='+user_id+' and catalog_key="'+catalog_key+'"')
                if (error) {
                    throw error;
                }
                return error ? reject(error) : resolve(results);
    
            })
        });
    },

    delete_lookups_data: function (req, res){
        //var users = user.get();
        if(req.user){
            console.log(req.body)
            var user_id = req.user.user_id;
            var lookups_accesskey = req.body.lookups_accesskey;
            var lookups_data_accesskey = req.body.lookups_data_access_key_id;

            db.query('DELETE FROM `lookups_data` WHERE user_id='+user_id+' AND lookups_accesskey="'+lookups_accesskey+'" AND lookups_data_accesskey="'+lookups_data_accesskey+'"' , (error, results)=> {
                //console.log('SELECT * FROM catalog_section WHERE user_id='+user_id+' and catalog_key="'+catalog_key+'"')
                if (error) {
                    return res.json({status: "error"});
                }
                return res.json({status: "success",access_key:lookups_data_accesskey});
    
            })
        }
    },

    updatelookups: function (req, res){
        //var users = user.get();
        if(req.user){
            console.log(req.body)
            var user_id = req.user.user_id;
            var lookups_accesskey = req.body.lookups_accesskey;
            var disable = req.body.disable;

            db.query('UPDATE `lookups` SET lookups_status="'+disable+'" WHERE user_id='+user_id+' AND lookups_accesskey="'+lookups_accesskey+'"' , (error, results)=> {
                //console.log('SELECT * FROM catalog_section WHERE user_id='+user_id+' and catalog_key="'+catalog_key+'"')
                if (error) {
                    return res.json({status: "error"});
                }
                return res.json({status: "success"});
    
            })
        }
    },

    getCountLookups:getCountLookups,

    getLookupsData:getLookupsData

}

async function getCountLookups(class_name, user_id){
    return new Promise((resolve, reject) => {
        db.query('SELECT count(*) as count FROM lookups WHERE user_id='+user_id+' and class_name="'+class_name+'"' , (error, results)=> {
            if (error) {
                throw error;
            }
            return error ? reject(error) : resolve(results[0]);

        })
    });
}

async function getLookupsData(class_name, user_id){
    return new Promise(async (resolve, reject) => {
        await db.query('SELECT * FROM lookups WHERE user_id='+user_id+' and class_name="'+class_name+'"' , async (error, results)=> {
            if (error) {
                throw error;
            }
            console.log(results.length)
            if(results.length >0){

              await db.query('SELECT * FROM lookups_data WHERE user_id='+user_id+' and lookups_accesskey="'+results[0].lookups_accesskey+'"' , (error, data)=> {
                if (error) {
                    throw error;
                }

                return error ? reject(error) : resolve(data);
              });
            }else{

                return error ? reject(error) : resolve(results);

            }

        })
    });
}
