const db = require("../routes/db-config")
const jwt  = require("jsonwebtoken");
const md5  = require("md5");
const { jsPDF } = require("jspdf");
var base_url = process.env.BASE_URL;


module.exports = {
    /**
     * `Account._add()`
     */
     add: function(req, res) {
        // var users = user.get();
        if(req.user){
            var content_title = req.body.content_title;
            var content_org = req.body.content_org;
            var content_number = req.body.content_number;
            var content_category = req.body.content_category;
            var content_description = req.body.content_description;

            var content_locked = req.body.content_locked;
            if(content_locked == null){
                content_locked=0;
            }
            
            var user_id = req.user.user_id;
            var d = Date();
            var a = d.toString()
            var content_key = md5(a+""+content_title+""+user_id+""+content_category);

            db.query('INSERT INTO catalogcontent SET ?',{content_key:content_key, user_id:user_id, content_title:content_title, content_org:content_org, content_number:content_number, content_category: content_category, content_description: content_description, content_locked:content_locked}, (error, results)=> {
                if (error) {
                    throw error;
                    // req.flash("error","Failed to Created!")
                    // res.redirect("/")
                }
                req.flash("success","Successfully Created!")
                res.redirect("/catalogcontent")
            })
        }else{
            req.flash("error","Failed to Created! please login")
            res.redirect("/")

        }

    },

    get:function(user,callback){
       
        db.query('SELECT * FROM catalogcontent WHERE user_id='+user.user_id , (error, results)=> {
            if (error) {
                throw error;
            }
            callback(null, results);
        })
       
    },

    getById:function(user,id,callback){
        db.query('SELECT * FROM catalogcontent WHERE user_id='+user.user_id+' and content_key="'+id+'"' , (error, results)=> {
            if (error) {
                throw error;
            }
            callback(null, results[0]);
        })
    },

    updatecatalogcontent: function(req, res) {
        // var users = user.get();
        console.log(req.body);
        if(req.user){
            if(req.body.name){
                var name = req.body.name;
                var id = req.body.id;
                var user_id = req.user.user_id;
                var value = req.body.value;
                var set_val = "";
                if(name=="content_title")
                {
                    set_val += "content_title = '"+value+"'";
                }
                if(name=="content_org")
                {
                    set_val += "content_org = '"+value+"'";
                }
                if(name=="content_number")
                {
                    set_val += "content_number = '"+value+"'";
                }
                if(name=="content_category")
                {
                    set_val += "content_category = '"+value+"'";
                }
                if(name=="content_locked")
                {
                    set_val += "content_locked = '"+value+"'";
                }
                if(name=="content_description")
                {
                    set_val += "content_description = '"+value+"'";
                }
                
                var currentdate = new Date(); 
               var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
                set_val += ", content_modifiedon = '"+datetime+"'"

                db.query("UPDATE catalogcontent SET "+set_val+ " WHERE content_key='"+id+"' and user_id="+user_id , (error, results)=> {
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

    pdfcreatecatalogcontent:function(req, res){
        console.log(req.body)
        const user = req.user
        const id = req.body.id
       
        db.query('SELECT * FROM catalogcontent WHERE user_id='+user.user_id+' and content_key="'+id+'"' , (error, results)=> {
            if (error) {
                throw error;
            }

            const resdata = results[0];

            const content_data = resdata.content_description;
            var d = Date();
            var a = d.toString()
            var pdf_key = md5(a+""+id+""+user.user_id+""+content_data);

            const doc = new jsPDF();
            var splitTitle = doc.splitTextToSize(content_data, 180);
            doc.text(15, 20, splitTitle);
            doc.save("pdf/"+pdf_key+".pdf");
            return res.json({status: "success", success: "User has been logged In", path:"pdf/"+pdf_key+".pdf" });

        })
    },
}