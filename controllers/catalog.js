const db = require("../routes/db-config")
const jwt  = require("jsonwebtoken");
const md5  = require("md5");
var base_url = process.env.BASE_URL;


module.exports = {
    /**
     * `Account._add()`
     */
    add: async function(req, res) {
        // var users = user.get();
        if(req.user){
            var title = req.body.title;
            var category = req.body.category;
            var status = req.body.status;
            var globals = req.body.globals;
            if(globals == null){
                globals=0;
            }
            var wide = req.body.wide;
            if(wide == null){
                wide=0;
            }
            var update_type = req.body.update_type;
            var user_id = req.user.user_id;
            var d = Date();
            var a = d.toString()
            var catalog_key = md5(a+""+title+""+user_id+""+category);
            if(title != ""){
             await new Promise((resolve, reject) => { 
              db.query('INSERT INTO catalog SET ?',{catalog_key:catalog_key, user_id:user_id, title:title, category:category, status:status, globals: globals, wide: wide, update_type:update_type}, async (error, results)=> {
                if (error) {
                    reject(error);
                    // req.flash("error","Failed to Created!")
                    // res.redirect("/")
                }
                req.flash("success","Successfully Created!")
                // res.redirect("/catalog")
                var total_sections = req.body.total_sections;
                var total_questions = req.body.total_questions;
                for(i=0;i<total_sections;i++){
                    //console.log(req.body.sectiontitle[i]);
                    // var catalog_key = req.params.id;
                    var user_id = req.user.user_id;
                    var catalog_section_number = '';
                    var catalog_section_title = '';
                    var catalog_section_status = 0;
                    
                    if(req.body.sectioncount[i] != undefined){
                        catalog_section_number = req.body.sectioncount[i];
                    }
                    if(req.body.sectiontitle[i] != undefined){
                        catalog_section_title = req.body.sectiontitle[i];
                    }
                    if(req.body.sectionhide != undefined){
                      if(req.body.sectionhide[i] != undefined){
                        catalog_section_status = 1;
                      }
                    }
                    var d = Date();
                    var a = d.toString()
                    var catalog_section_key = md5(a+""+catalog_key+""+user_id+""+catalog_section_title);
                                    //console.log(i);

                    await new Promise((resolve, reject) => {
                      db.query('INSERT INTO catalog_section SET ?',{catalog_key:catalog_key, catalog_section_key:catalog_section_key,user_id:user_id, catalog_section_number:catalog_section_number, catalog_section_title:catalog_section_title, catalog_section_status:catalog_section_status}, async (error, results)=> {
                        if (error) {
                            reject(error);
                            // req.flash("error","Failed to Created!")
                            // res.redirect("/")
                        }
                        var catalog_section_id = results.insertId;

                        var questionscount = req.body.questionscount;
                        var questionsname = req.body.questionsname;
                        var questionstoggle = req.body.questionstoggle;
                        var questionsrequired = req.body.questionsrequired;


                        

                        for(var j=0;j<total_questions;j++){
                            var catalog_questions_num = '';
                            var catalog_questions_name = '';
                            var catalog_questions_required = 0;
                            var catalog_questions_toggle = '';
                            
                            //console.log(i+"_"+j)

                            //console.log(req.body.questionscount[i]);
                            // if(req.body.questionscount != undefined){
                                if(req.body.questionscount[i] != undefined){
                                    if(req.body.questionscount[i][j] != undefined){
                                        catalog_questions_num = req.body.questionscount[i][j];
                                    }
                                }
                            // }

                            // if(req.body.questionsname != undefined){
                                if(req.body.questionsname[i] != undefined){
                                    if(req.body.questionsname[i][j] != undefined){
                                        catalog_questions_name = req.body.questionsname[i][j];
                                    }
                                }
                            // }

                            // if(req.body.questionstoggle != undefined){
                                if(req.body.questionstoggle[i] != undefined){
                                    if(req.body.questionstoggle[i][j] != undefined){
                                        catalog_questions_toggle = req.body.questionstoggle[i][j];
                                    }
                                }
                            // }

                            if(req.body.questionsrequired != undefined){
                                if(req.body.questionsrequired[i] != undefined){
                                    if(req.body.questionsrequired[i][j] != undefined){
                                        catalog_questions_required = 1;
                                    }
                                }
                            }
                            var d = Date();
                            var a = d.toString()
                            var catalog_questions_key = md5(a+""+catalog_section_key+""+user_id+""+catalog_questions_name);
                            if(catalog_questions_num != ''){
                              //console.log({catalog_key:catalog_key, catalog_section_key:catalog_section_key, catalog_questions_key:catalog_questions_key, user_id:user_id, catalog_section_id:catalog_section_id, catalog_questions_num:catalog_questions_num, catalog_questions_name:catalog_questions_name, catalog_questions_required:catalog_questions_required, catalog_questions_toggle:catalog_questions_toggle});
                            
                              await new Promise((resolve, reject) => {
                                db.query('INSERT INTO catalog_questions SET ?',{catalog_key:catalog_key, catalog_section_key:catalog_section_key, catalog_questions_key:catalog_questions_key, user_id:user_id, catalog_section_id:catalog_section_id, catalog_questions_num:catalog_questions_num, catalog_questions_name:catalog_questions_name, catalog_questions_required:catalog_questions_required, catalog_questions_toggle:catalog_questions_toggle}, async (error, results)=> {
                                if (error) {
                                    reject(error);
                                    // req.flash("error","Failed to Created!")
                                    // res.redirect("/")
                                }
                                resolve(true)
                              })

                              });
                            }

                        }
                        resolve(true)
                      })


                    })
                    
                }
                resolve(true)
              })
             })
            }
            res.redirect(base_url+"catalog");

        }else{
            req.flash("error","Failed to Created! please login")
            res.redirect("/")
        }
    },

    get:function(user,callback){
       
        db.query('SELECT * FROM catalog WHERE user_id='+user.user_id, (error, results)=> {
            if (error) {
                throw error;
            }
            callback(null, results);
        })
       
    },

    getpublished:function(user,callback){
       
        db.query('SELECT * FROM catalog WHERE user_id='+user.user_id+' and status="PUBLISHED"', (error, results)=> {
            if (error) {
                throw error;
            }
            callback(null, results);
        })
       
    },

    getById:function(user,id,callback){
        db.query('SELECT * FROM catalog WHERE user_id='+user.user_id+' and catalog_key="'+id+'"' , (error, results)=> {
            if (error) {
                throw error;
            }
            callback(null, results[0]);
        })
    },

    updatecatalog: function(req, res) {
        // var users = user.get();
        //console.log(req.body);
        if(req.user){
            if(req.body.name){
                var name = req.body.name;
                var id = req.body.id;
                var user_id = req.user.user_id;
                var value = req.body.value;
                var set_val = "";
                if(name=="title")
                {
                    set_val += "title = '"+value+"'";
                }
                if(name=="category")
                {
                    set_val += "category = '"+value+"'";
                }
                if(name=="status")
                {
                    set_val += "status = '"+value+"'";
                }
                if(name=="globals")
                {
                    set_val += "globals = '"+value+"'";
                }
                if(name=="wide")
                {
                    set_val += "wide = '"+value+"'";
                }
                if(name=="update_type")
                {
                    set_val += "update_type = '"+value+"'";
                }
                
                var currentdate = new Date(); 
               var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
                set_val += ", modified_on = '"+datetime+"'"

                db.query("UPDATE catalog SET "+set_val+ " WHERE catalog_key='"+id+"' and user_id="+user_id , (error, results)=> {
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

    getCatalog: async function(id, user){
        // var catalog_key = catalog_key;
        var user_id = user.user_id;
        
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM catalog WHERE user_id='+user.user_id+' and catalog_key="'+id+'"' , (error, results)=> {
                if (error) {
                    throw error;
                }
                return error ? reject(error) : resolve(results[0]);
    
            })
        });
    },

    editsubmitcatalog: async function(req, res) {
        //console.log(req.body);
        if(req.user){
            if(req.body.total_sections){
                var total_sections = req.body.total_sections;
                var total_questions = req.body.total_questions;
                for(i=0;i<total_sections;i++){
                    //console.log(req.body.sectiontitle[i]);
                    var catalog_key = req.params.id;
                    var user_id = req.user.user_id;
                    var catalog_section_number = '';
                    var catalog_section_title = '';
                    var catalog_section_status = 0;
                    
                    if(req.body.sectioncount[i] != undefined){
                        catalog_section_number = req.body.sectioncount[i];
                    }
                    if(req.body.sectiontitle[i] != undefined){
                        catalog_section_title = req.body.sectiontitle[i];
                    }
                    if(req.body.sectionhide != undefined){
                      if(req.body.sectionhide[i] != undefined){
                        catalog_section_status = 1;
                      }
                    }
                    var d = Date();
                    var a = d.toString()
                    var catalog_section_key = md5(a+""+catalog_key+""+user_id+""+catalog_section_title);
                                    //console.log(i);

                    await new Promise((resolve, reject) => {
                      db.query('INSERT INTO catalog_section SET ?',{catalog_key:catalog_key, catalog_section_key:catalog_section_key,user_id:user_id, catalog_section_number:catalog_section_number, catalog_section_title:catalog_section_title, catalog_section_status:catalog_section_status}, async (error, results)=> {
                        if (error) {
                            reject(error);
                            // req.flash("error","Failed to Created!")
                            // res.redirect("/")
                        }
                        var catalog_section_id = results.insertId;

                        var questionscount = req.body.questionscount;
                        var questionsname = req.body.questionsname;
                        var questionstoggle = req.body.questionstoggle;
                        var questionsrequired = req.body.questionsrequired;


                        

                        for(var j=0;j<total_questions;j++){
                            var catalog_questions_num = '';
                            var catalog_questions_name = '';
                            var catalog_questions_required = 0;
                            var catalog_questions_toggle = '';
                            
                            //console.log(i+"_"+j)

                            //console.log(req.body.questionscount[i]);
                            // if(req.body.questionscount != undefined){
                                if(req.body.questionscount[i] != undefined){
                                    if(req.body.questionscount[i][j] != undefined){
                                        catalog_questions_num = req.body.questionscount[i][j];
                                    }
                                }
                            // }

                            // if(req.body.questionsname != undefined){
                                if(req.body.questionsname[i] != undefined){
                                    if(req.body.questionsname[i][j] != undefined){
                                        catalog_questions_name = req.body.questionsname[i][j];
                                    }
                                }
                            // }

                            // if(req.body.questionstoggle != undefined){
                                if(req.body.questionstoggle[i] != undefined){
                                    if(req.body.questionstoggle[i][j] != undefined){
                                        catalog_questions_toggle = req.body.questionstoggle[i][j];
                                    }
                                }
                            // }

                            if(req.body.questionsrequired != undefined){
                                if(req.body.questionsrequired[i] != undefined){
                                    if(req.body.questionsrequired[i][j] != undefined){
                                        catalog_questions_required = 1;
                                    }
                                }
                            }
                            var d = Date();
                            var a = d.toString()
                            var catalog_questions_key = md5(a+""+catalog_section_key+""+user_id+""+catalog_questions_name);
                            if(catalog_questions_num != ''){
                              //console.log({catalog_key:catalog_key, catalog_section_key:catalog_section_key, catalog_questions_key:catalog_questions_key, user_id:user_id, catalog_section_id:catalog_section_id, catalog_questions_num:catalog_questions_num, catalog_questions_name:catalog_questions_name, catalog_questions_required:catalog_questions_required, catalog_questions_toggle:catalog_questions_toggle});
                            
                              await new Promise((resolve, reject) => {
                                db.query('INSERT INTO catalog_questions SET ?',{catalog_key:catalog_key, catalog_section_key:catalog_section_key, catalog_questions_key:catalog_questions_key, user_id:user_id, catalog_section_id:catalog_section_id, catalog_questions_num:catalog_questions_num, catalog_questions_name:catalog_questions_name, catalog_questions_required:catalog_questions_required, catalog_questions_toggle:catalog_questions_toggle}, async (error, results)=> {
                                if (error) {
                                    reject(error);
                                    // req.flash("error","Failed to Created!")
                                    // res.redirect("/")
                                }
                                resolve(true)
                              })

                              });
                            }

                        }
                        resolve(true)
                      })


                    })
                    
                }
                res.redirect(base_url+"catalog")

            }
        }

    },

    copycatalog: async function(req, res) {
        // var users = user.get();
        if(req.user){
            var count = await getCount(req.body, req.user.user_id)
            //console.log("__________________________________________________________________"+count.count);
            var copy_text = "(copy)";
            // for(var i=0;i<parseInt(count.count);i++)
            // {
            //     if(i>1){
            //        copy_text += copy_text;

            //     }
            // }
            var title = req.body.title+""+copy_text+"("+count.count+")";
            var category = req.body.category;
            var status = "IN PROCESS";
            if(req.body.status != "")
            {
                status = status;
            }
            var globals = req.body.globals;
            if(globals == null){
                globals=0;
            }
            var wide = req.body.wide;
            if(wide == null){
                wide=0;
            }
            var update_type = req.body.update_type;
            var user_id = req.user.user_id;
            var d = Date();
            var a = d.toString()
            var catalog_key = md5(a+""+title+""+user_id+""+category);
            if(title != ""){
             await new Promise((resolve, reject) => { 
              db.query('INSERT INTO catalog SET ?',{catalog_key:catalog_key, user_id:user_id, title:title, category:category, status:status, globals: globals, wide: wide, update_type:update_type}, async (error, results)=> {
                if (error) {
                    reject(error);
                    // req.flash("error","Failed to Created!")
                    // res.redirect("/")
                }
                req.flash("success","Successfully Created!")
                // res.redirect("/catalog")
                var total_sections = req.body.total_sections;
                var total_questions = req.body.total_questions;
                for(i=0;i<total_sections;i++){
                    //console.log(req.body.sectiontitle[i]);
                    // var catalog_key = req.params.id;
                    var user_id = req.user.user_id;
                    var catalog_section_number = '';
                    var catalog_section_title = '';
                    var catalog_section_status = 0;
                    
                    if(req.body.sectioncount[i] != undefined){
                        catalog_section_number = req.body.sectioncount[i];
                    }
                    if(req.body.sectiontitle[i] != undefined){
                        catalog_section_title = req.body.sectiontitle[i];
                    }
                    if(req.body.sectionhide != undefined){
                      if(req.body.sectionhide[i] != undefined){
                        catalog_section_status = 1;
                      }
                    }
                    var d = Date();
                    var a = d.toString()
                    var catalog_section_key = md5(a+""+catalog_key+""+user_id+""+catalog_section_title);
                                    //console.log(i);

                    await new Promise((resolve, reject) => {
                      db.query('INSERT INTO catalog_section SET ?',{catalog_key:catalog_key, catalog_section_key:catalog_section_key,user_id:user_id, catalog_section_number:catalog_section_number, catalog_section_title:catalog_section_title, catalog_section_status:catalog_section_status}, async (error, results)=> {
                        if (error) {
                            throw error;
                            reject(error);
                            // req.flash("error","Failed to Created!")
                            // res.redirect("/")
                        }
                        //console.log(results);
                        var catalog_section_id = results.insertId;

                        var questionscount = req.body.questionscount;
                        var questionsname = req.body.questionsname;
                        var questionstoggle = req.body.questionstoggle;
                        var questionsrequired = req.body.questionsrequired;


                        

                        for(var j=0;j<total_questions;j++){
                            var catalog_questions_num = '';
                            var catalog_questions_name = '';
                            var catalog_questions_required = 0;
                            var catalog_questions_toggle = '';
                            
                            //console.log(i+"_"+j)

                            //console.log(req.body.questionscount[i]);
                            // if(req.body.questionscount != undefined){
                                if(req.body.questionscount[i] != undefined){
                                    if(req.body.questionscount[i][j] != undefined){
                                        catalog_questions_num = req.body.questionscount[i][j];
                                    }
                                }
                            // }

                            // if(req.body.questionsname != undefined){
                                if(req.body.questionsname[i] != undefined){
                                    if(req.body.questionsname[i][j] != undefined){
                                        catalog_questions_name = req.body.questionsname[i][j];
                                    }
                                }
                            // }

                            // if(req.body.questionstoggle != undefined){
                                if(req.body.questionstoggle[i] != undefined){
                                    if(req.body.questionstoggle[i][j] != undefined){
                                        catalog_questions_toggle = req.body.questionstoggle[i][j];
                                    }
                                }
                            // }

                            if(req.body.questionsrequired != undefined){
                                if(req.body.questionsrequired[i] != undefined){
                                    if(req.body.questionsrequired[i][j] != undefined){
                                        catalog_questions_required = 1;
                                    }
                                }
                            }
                            var d = Date();
                            var a = d.toString()
                            var catalog_questions_key = md5(a+""+catalog_section_key+""+user_id+""+catalog_questions_name);
                            if(catalog_questions_num != ''){
                              //console.log({catalog_key:catalog_key, catalog_section_key:catalog_section_key, catalog_questions_key:catalog_questions_key, user_id:user_id, catalog_section_id:catalog_section_id, catalog_questions_num:catalog_questions_num, catalog_questions_name:catalog_questions_name, catalog_questions_required:catalog_questions_required, catalog_questions_toggle:catalog_questions_toggle});
                            
                              await new Promise((resolve, reject) => {
                                db.query('INSERT INTO catalog_questions SET ?',{catalog_key:catalog_key, catalog_section_key:catalog_section_key, catalog_questions_key:catalog_questions_key, user_id:user_id, catalog_section_id:catalog_section_id, catalog_questions_num:catalog_questions_num, catalog_questions_name:catalog_questions_name, catalog_questions_required:catalog_questions_required, catalog_questions_toggle:catalog_questions_toggle}, async (error, results)=> {
                                if (error) {
                                    reject(error);
                                    // req.flash("error","Failed to Created!")
                                    // res.redirect("/")
                                }
                                resolve(true)
                              })

                              });
                            }

                        }
                        resolve(true)
                      })


                    })
                    
                }
                resolve(true)
              })
             })
            }
            res.redirect(base_url+"catalog");

        }else{
            req.flash("error","Failed to Created! please login")
            res.redirect("/")

        }

    },

    getCount:getCount,

    deletecatalog: async function(req, res){
        if(req.user){
            db.query('DELETE FROM catalog WHERE user_id='+req.user.user_id+' and catalog_key="'+req.params.id+'"' , (error, results)=> {
                if (error) {
                    throw error;
                }
                db.query('DELETE FROM catalog_section WHERE user_id='+req.user.user_id+' and catalog_key="'+req.params.id+'"' , (error, results)=> {
                    if (error) {
                        throw error;
                    }
                    db.query('DELETE FROM catalog_questions WHERE user_id='+req.user.user_id+' and catalog_key="'+req.params.id+'"' , (error, results)=> {
                        if (error) {
                            throw error;
                        }
                        req.flash("error","Failed to Delete! please login")
                        res.redirect("/catalog")
                    })
                })
    
            })
        }else{
            req.flash("error","Failed to Delete! please login")
            res.redirect("/")

        }
    },

    getCatalogSections: async function(catalog_key, user){
        var catalog_key = catalog_key;
        var user_id = user.user_id;
        
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM catalog_section WHERE user_id='+user_id+' and catalog_key="'+catalog_key+'"' , (error, results)=> {
                //console.log('SELECT * FROM catalog_section WHERE user_id='+user_id+' and catalog_key="'+catalog_key+'"')
                if (error) {
                    throw error;
                }
                return error ? reject(error) : resolve(results);
    
            })
        });
    },

    getCatalogQuestions: async function(catalog_key, user){
        var catalog_key = catalog_key;
        var user_id = user.user_id;
        
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM catalog_questions WHERE user_id='+user_id+' and catalog_key="'+catalog_key+'"' , (error, results)=> {
                //console.log('SELECT * FROM catalog_questions WHERE user_id='+user_id+' and catalog_key="'+catalog_key+'"')
                if (error) {
                    throw error;
                }
                return error ? reject(error) : resolve(results);
    
            })
        });
    },

    autoUpdateCatalog: async function(req, res) {
        console.log(req.body);
        if(req.user){
            // if(req.body.total_sections){
                // var total_sections = req.body.total_sections;
                // var total_questions = req.body.total_questions;

                if(req.body.delete_section.length > 0)
                {
                    var userid = req.user.user_id;

                    for(s=0;s<req.body.delete_section.length;s++)
                    {
                        console.log('DELETE FROM `catalog_section` WHERE catalog_section_key="'+req.body.delete_section[s]+'" AND user_id='+userid);
                        await new Promise((resolve, reject) => {
                            db.query('DELETE FROM `catalog_section` WHERE catalog_section_key="'+req.body.delete_section[s]+'" AND user_id='+userid, async (error, results)=> {
                                if (error) {
                                    reject(error);
                                }
                                console.log('DELETE FROM `catalog_questions` WHERE catalog_section_key="'+req.body.delete_section[s]+'" AND user_id='+userid)
                                db.query('DELETE FROM `catalog_questions` WHERE catalog_section_key="'+req.body.delete_section[s]+'" AND user_id='+userid, async (error, results)=> {
                                    if (error) {
                                        reject(error);
                                    }
                                    resolve(true)
                                });

                            });
                        })
                    }
                }

                if(req.body.delete_questions.length > 0)
                {
                    var userid = req.user.user_id;

                    for(s=0;s<req.body.delete_questions.length;s++)
                    {
                        await new Promise((resolve, reject) => {
                            db.query('DELETE FROM `catalog_questions` WHERE catalog_section_key="'+req.body.delete_questions[s][0]+'" AND user_id='+userid+' AND catalog_questions_key="'+req.body.delete_questions[s][1]+'"', async (error, results)=> {
                                if (error) {
                                    reject(error);
                                }
                                resolve(true)
                            });
                        })
                    }
                }

                for(i=1;i<=req.body.sectioncount.length;i++){
                    //console.log(req.body.sectiontitle[i]);
                    var catalog_key = req.params.id;
                    var user_id = req.user.user_id;
                    var catalog_section_number = '';
                    var catalog_section_title = '';
                    var catalog_section_status = 0;
                    
                    if(req.body.sectioncount[i] != undefined){
                        catalog_section_number = req.body.sectioncount[i];
                    }
                    if(req.body.sectiontitle[i] != undefined){
                        catalog_section_title = req.body.sectiontitle[i];
                    }

                    if(req.body.sectiontitle[i] != undefined){
                        catalog_section_title = req.body.sectiontitle[i];
                    }

                    if(req.body.sectionhide != undefined){
                      if(req.body.sectionhide[i] != undefined){
                        catalog_section_status = 1;
                      }
                    }


                    var d = Date();
                    var a = d.toString()
                    var catalog_section_key = md5(a+""+catalog_key+""+user_id+""+catalog_section_title);

                    if(req.body.sectionkey[i] != 0){
                        catalog_section_key = req.body.sectionkey[i];
                    }
                                    //console.log(i);
                    var sec_count = 0;
                    if(req.body.sectioncount[i] != undefined){
                        sec_count = await getCountSections(req.body.sectioncount[i], catalog_key, req.user.user_id);
                    }
                    //console.log("________"+req.body.sectioncount[i]+"_"+catalog_key+"_"+req.user.user_id+"_"+sec_count);
                    if(parseInt(sec_count.count) > 0)
                    {
                        await new Promise((resolve, reject) => {
                            db.query('UPDATE catalog_section SET ? WHERE catalog_key=? AND user_id=? AND catalog_section_number=?',[{catalog_section_title:catalog_section_title, catalog_section_status:catalog_section_status},catalog_key, user_id,catalog_section_number], async (error, results)=> {
                              if (error) {
                                  reject(error);
                                  // req.flash("error","Failed to Created!")
                                  // res.redirect("/")
                              }
      
                              var questionscount = req.body.questionscount;
                              var questionsname = req.body.questionsname;
                              var questionstoggle = req.body.questionstoggle;
                              var questionsrequired = req.body.questionsrequired;
      
                              for(var j=1;j<=req.body.questionscount[i].length;j++){
                                  var catalog_questions_num = '';
                                  var catalog_questions_name = '';
                                  var catalog_questions_required = 0;
                                  var catalog_questions_toggle = '';
                                  
                                  console.log(i+"_"+j)
      
                                  //console.log(req.body.questionscount[i]);
                                  // if(req.body.questionscount != undefined){
                                      if(req.body.questionscount[i] != undefined){
                                          if(req.body.questionscount[i][j] != undefined){
                                              catalog_questions_num = req.body.questionscount[i][j];
                                          }
                                      }
                                  // }
      
                                  // if(req.body.questionsname != undefined){
                                      if(req.body.questionsname[i] != undefined){
                                          if(req.body.questionsname[i][j] != undefined){
                                              catalog_questions_name = req.body.questionsname[i][j];
                                          }
                                      }
                                  // }
      
                                  // if(req.body.questionstoggle != undefined){
                                      if(req.body.questionstoggle[i] != undefined){
                                          if(req.body.questionstoggle[i][j] != undefined){
                                              catalog_questions_toggle = req.body.questionstoggle[i][j];
                                          }
                                      }
                                  // }
      
                                  if(req.body.questionsrequired != undefined){
                                      if(req.body.questionsrequired[i] != undefined){
                                          if(req.body.questionsrequired[i][j] != undefined){
                                              catalog_questions_required = 1;
                                          }
                                      }
                                  }
                                  var d = Date();
                                  var a = d.toString()
                                  var catalog_questions_key = md5(a+""+catalog_section_key+""+user_id+""+catalog_questions_name);
                                  console.log(catalog_questions_num)
                                  
                                  if(catalog_questions_num != '' && catalog_questions_num > 0){
                                    ques_num=catalog_questions_num.split(".");
                                  var ques_count = await getCountQuestions(req.body.sectioncount[i]+'.'+ques_num[1], catalog_key, req.user.user_id);
                                  catalog_questions_num = req.body.sectioncount[i]+'.'+ques_num[1];
                                    // //console.log({catalog_key:catalog_key, catalog_section_key:catalog_section_key, catalog_questions_key:catalog_questions_key, user_id:user_id, catalog_section_id:catalog_section_id, catalog_questions_num:catalog_questions_num, catalog_questions_name:catalog_questions_name, catalog_questions_required:catalog_questions_required, catalog_questions_toggle:catalog_questions_toggle});
                                  
                                    await new Promise((resolve, reject) => {
                                        if(parseInt(ques_count.count) > 0){
                                            db.query('UPDATE catalog_questions SET ? WHERE catalog_key=? AND user_id=? AND catalog_questions_num=?',[{catalog_questions_name:catalog_questions_name, catalog_questions_required:catalog_questions_required, catalog_questions_toggle:catalog_questions_toggle},catalog_key, user_id, catalog_questions_num], async (error, results)=> {
                                                if (error) {
                                                    reject(error);
                                                    // req.flash("error","Failed to Created!")
                                                    // res.redirect("/")
                                                }
                                                resolve(true)
                                              })
                                        }else{
                                            var catalog_section_id = req.body.sectioncount[i];

                                            db.query('INSERT INTO catalog_questions SET ?',{catalog_key:catalog_key, catalog_section_key:catalog_section_key, catalog_questions_key:catalog_questions_key, user_id:user_id, catalog_section_id:catalog_section_id, catalog_questions_num:catalog_questions_num, catalog_questions_name:catalog_questions_name, catalog_questions_required:catalog_questions_required, catalog_questions_toggle:catalog_questions_toggle}, async (error, results)=> {
                                                if (error) {
                                                    reject(error);
                                                    // req.flash("error","Failed to Created!")
                                                    // res.redirect("/")
                                                }
                                                resolve(true)
                                              })
                                        }
                                      
      
                                    });
                                  }
      
                              }
                              resolve(true)
                            })
      
      
                            })
                    }else{
                        if(catalog_section_number > 0){
                            await new Promise((resolve, reject) => {
                                db.query('INSERT INTO catalog_section SET ?',{catalog_key:catalog_key, catalog_section_key:catalog_section_key,user_id:user_id, catalog_section_number:catalog_section_number, catalog_section_title:catalog_section_title, catalog_section_status:catalog_section_status}, async (error, results)=> {
                                  if (error) {
                                      reject(error);
                                      // req.flash("error","Failed to Created!")
                                      // res.redirect("/")
                                  }
                                  var catalog_section_id = results.insertId;
          
                                  var questionscount = req.body.questionscount;
                                  var questionsname = req.body.questionsname;
                                  var questionstoggle = req.body.questionstoggle;
                                  var questionsrequired = req.body.questionsrequired;
          
          
                                  
          
                                  for(var j=0;j<req.body.questionscount.length;j++){
                                      var catalog_questions_num = '';
                                      var catalog_questions_name = '';
                                      var catalog_questions_required = 0;
                                      var catalog_questions_toggle = '';
                                      
                                      //console.log(i+"_"+j)
          
                                      //console.log(req.body.questionscount[i]);
                                      // if(req.body.questionscount != undefined){
                                          if(req.body.questionscount[i] != undefined){
                                              if(req.body.questionscount[i][j] != undefined){
                                                  catalog_questions_num = req.body.questionscount[i][j];
                                              }
                                          }
                                      // }
          
                                      // if(req.body.questionsname != undefined){
                                          if(req.body.questionsname[i] != undefined){
                                              if(req.body.questionsname[i][j] != undefined){
                                                  catalog_questions_name = req.body.questionsname[i][j];
                                              }
                                          }
                                      // }
          
                                      // if(req.body.questionstoggle != undefined){
                                          if(req.body.questionstoggle[i] != undefined){
                                              if(req.body.questionstoggle[i][j] != undefined){
                                                  catalog_questions_toggle = req.body.questionstoggle[i][j];
                                              }
                                          }
                                      // }
          
                                      if(req.body.questionsrequired != undefined){
                                          if(req.body.questionsrequired[i] != undefined){
                                              if(req.body.questionsrequired[i][j] != undefined){
                                                  catalog_questions_required = 1;
                                              }
                                          }
                                      }
                                      var d = Date();
                                      var a = d.toString()
                                      var catalog_questions_key = md5(a+""+catalog_section_key+""+user_id+""+catalog_questions_name);
                                      if(catalog_questions_num != ''){
                                        //console.log({catalog_key:catalog_key, catalog_section_key:catalog_section_key, catalog_questions_key:catalog_questions_key, user_id:user_id, catalog_section_id:catalog_section_id, catalog_questions_num:catalog_questions_num, catalog_questions_name:catalog_questions_name, catalog_questions_required:catalog_questions_required, catalog_questions_toggle:catalog_questions_toggle});
                                      
                                        await new Promise((resolve, reject) => {
                                          db.query('INSERT INTO catalog_questions SET ?',{catalog_key:catalog_key, catalog_section_key:catalog_section_key, catalog_questions_key:catalog_questions_key, user_id:user_id, catalog_section_id:catalog_section_id, catalog_questions_num:catalog_questions_num, catalog_questions_name:catalog_questions_name, catalog_questions_required:catalog_questions_required, catalog_questions_toggle:catalog_questions_toggle}, async (error, results)=> {
                                          if (error) {
                                              reject(error);
                                              // req.flash("error","Failed to Created!")
                                              // res.redirect("/")
                                          }
                                          resolve(true)
                                        })
          
                                        });
                                      }
          
                                  }
                                  resolve(true)
                                })
          
          
                                })
                        }
                        
                    }
                    
                }
                return res.json({status: "success"});

            // }
        }

    },

    getCountSections:getCountSections,

    getCountQuestions:getCountQuestions,

}


async function getCount(data, user_id){
    return new Promise((resolve, reject) => {
        db.query('SELECT count(*) as count FROM catalog WHERE user_id='+user_id+' and title LIKE "%'+data.title+'(copy)%"' , (error, results)=> {
            if (error) {
                throw error;
            }
            return error ? reject(error) : resolve(results[0]);

        })
    });
}

async function getCountSections(sectioncount, catalog_key, user_id){
    return new Promise((resolve, reject) => {
        console.log('SELECT count(*) as count FROM catalog_section WHERE user_id='+user_id+' and catalog_key = "'+catalog_key+'" and catalog_section_number="'+sectioncount+'"');
        db.query('SELECT count(*) as count FROM catalog_section WHERE user_id='+user_id+' and catalog_key = "'+catalog_key+'" and catalog_section_number="'+sectioncount+'"' , (error, results)=> {
            if (error) {
                throw error;
            }
            return error ? reject(error) : resolve(results[0]);

        })
    });
}

async function getCountQuestions(questionscount,catalog_key, user_id){
    return new Promise((resolve, reject) => {
        db.query('SELECT count(*) as count FROM catalog_questions WHERE user_id='+user_id+' and catalog_questions_num = "'+questionscount+'" and catalog_key="'+catalog_key+'"' , (error, results)=> {
            if (error) {
                throw error;
            }
            return error ? reject(error) : resolve(results[0]);

        })
    });
}