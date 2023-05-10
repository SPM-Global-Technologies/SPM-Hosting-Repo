const express = require("express");
const loggedIn = require("../controllers/loggedin")
const account = require("../controllers/account")
const opportunity = require("../controllers/opportunity")
const catalog = require("../controllers/catalog")
const contentcatalog = require("../controllers/contentcatalog")
const Excel = require('exceljs');
const bid_estimation = require("../controllers/bid_estimation")
const quotes = require("../controllers/quotes")

const FormulaParser = require('hot-formula-parser').Parser;
const parser = new FormulaParser();

function getCellResult(worksheet, cellLabel) {
    if (worksheet.getCell(cellLabel).formula) {
      return parser.parse(worksheet.getCell(cellLabel).formula).result;
    } else {
      return worksheet.getCell(cellCoord.label).value;
    }
}


const router = express.Router();
var base_url = process.env.BASE_URL;
router.get("/",loggedIn,(req, res) => {
    if(req.user){
        res.render("home",{status:"ok", base_url:base_url, user:req.user})
    }else{
        res.render("index",{status:"no", base_url:base_url, user:"nothing"})
    }
}) 

router.get("/register", loggedIn, (req, res) => {
// res.sendFile("public/register.html");
    if(req.user){
        res.redirect("/");
    }else{
        res.sendFile("register.html", {root: "./public"});
    }
})

router.get("/login", loggedIn, (req, res) => {
    if(req.user){
        res.redirect("/");
    }else{
        res.sendFile("login.html", {root: "./public"});
    }
})

router.get("/accounts", loggedIn, (req, res) => {
    if(req.user){
        account.get(req.user,function(err,result){
            if(err){
                throw err;
            }
            //console.log(result)
            res.render("accounts",{status:"ok", base_url:base_url, user:req.user, accounts:result})
        });
        
    }else{
        res.render("index",{status:"no", base_url:base_url, user:"nothing"})
    }
})

router.get("/createaccount", loggedIn, (req, res) => {
    if(req.user){
        account.get(req.user,function(err,result){
            if(err){
                throw err;
            }
            //console.log(result)
            res.render("createaccount",{status:"ok", base_url:base_url, user:req.user, accounts:result})
        });
    }else{
        res.render("index",{status:"no", base_url:base_url, user:"nothing"})
    }
})

router.get("/accoutslistings", loggedIn, (req, res) => {
    if(req.user){
        account.get(req.user,function(err,result){
            if(err){
                throw err;
            }
            //console.log(result)
            res.render("accoutslistings",{status:"ok", base_url:base_url, user:req.user, accounts:result})
        });
    }else{
        res.render("index",{status:"no", base_url:base_url, user:"nothing"})
    }
})

router.get("/account/edit/:id", loggedIn, (req, res) => {
    //console.log(req.params.id)
    if(req.user){
        account.get(req.user,function(err,result){
            if(err){
                throw err;
            }
            account.getById(req.user, req.params.id,function(err,data){
                if(err){
                    throw err;
                }
                opportunity.getByAccId(req.user, req.params.id, function(err,opp_data){
                    if(err){
                        throw err;
                    }
                    res.render("editaccount",{status:"ok", base_url:base_url, id:req.params.id, user:req.user, accounts:result, account_data:data, opp_data:opp_data});

                })
                // //console.log(result)
            });
        });
    }else{
        res.render("index",{status:"no", base_url:base_url, user:"nothing"})
    }
})

router.get("/opportunities/add/:id", loggedIn, (req, res) => {
    //console.log(req.params.id)
    if(req.user){
        
            account.getById(req.user, req.params.id,function(err,data){
                if(err){
                    throw err;
                }

                // //console.log(result)
                res.render("create_opportunities",{status:"ok", base_url:base_url, id:req.params.id, user:req.user, account_data:data})
            });
        
    }else{
        res.render("index",{status:"no", base_url:base_url, user:"nothing"})
    }
})

router.get("/opportunities/opportunitydata/:accid/:oppid", loggedIn, quotes.get, (req, res) => {
    //console.log(req.params.accid)
    if(req.user){
        
            account.getById(req.user, req.params.accid,function(err,data){
                if(err){
                    throw err;
                }

                // //console.log(result)
                opportunity.getById(req.user, req.params.accid, req.params.oppid, function(err,opp_data){
                    if(err){
                        throw err;
                    }
                    res.render("opportunitydata",{status:"ok", base_url:base_url, accid:req.params.accid, oppid:req.params.oppid, user:req.user, account_data:data, opp_data:opp_data, quotes: req.quotes})
                });
            });
        
    }else{
        res.render("index",{status:"no", base_url:base_url, user:"nothing"})
    }
})

router.get("/catalog", loggedIn, (req, res) => {
    if(req.user){
        catalog.get(req.user,function(err,result){
            if(err){
                throw err;
            }
            //console.log(result)
            res.render("catalog",{status:"ok", base_url:base_url, user:req.user, catalog:result})
        });
        
    }else{
        res.render("index",{status:"no", base_url:base_url, user:"nothing"})
    }
})

router.get("/createcatalog", loggedIn, (req, res) => {
    if(req.user){
        catalog.get(req.user,function(err,result){
            if(err){
                throw err;
            }
            
            //console.log(result)
            res.render("createcatalog",{status:"ok", base_url:base_url, user:req.user, catalog:result})
        });
        
    }else{
        res.render("index",{status:"no", base_url:base_url, user:"nothing"})
    }
})

router.get("/catalog/edit/:id", loggedIn, async (req, res) => {
    if(req.user){
        var template_type = req.params.id;
        var sections = await catalog.getCatalogSections(template_type,req.user);
        var questions = await catalog.getCatalogQuestions(template_type,req.user);

        catalog.get(req.user,function(err,result){
            if(err){
                throw err;
            }
            catalog.getById(req.user, req.params.id, function(err,catresult){
                //console.log(catresult);

                res.render("editcatalog",{status:"ok", id:req.params.id, base_url:base_url, user:req.user, catalog:result, catalog_data:catresult, sections:sections, questions:questions})
            });

        });
        
    }else{
        res.render("index",{status:"no", base_url:base_url, user:"nothing"})
    }
})

router.get("/quote/creation/:opp_id/:acc_key", loggedIn, (req, res) => {
    if(req.user){
        catalog.getpublished(req.user,function(err,result){
            if(err){
                throw err;
            }
            
            res.render("quotecreation",{status:"ok", id:req.params.opp_id, acc_key:req.params.acc_key,base_url:base_url, user:req.user, catalog:result})
            

        });
        
    }else{
        res.render("index",{status:"no", base_url:base_url, user:"nothing"})
    }
})


router.get("/catalogcontent", loggedIn, (req, res) => {
    if(req.user){
        contentcatalog.get(req.user,function(err,result){
            if(err){
                throw err;
            }
            
            //console.log(result)
            res.render("catalogcontent",{status:"ok", base_url:base_url, user:req.user, contentcatalog:result})
        });
        
    }else{
        res.render("index",{status:"no", base_url:base_url, user:"nothing"})
    }
})

router.get("/catalogcontent/create", loggedIn, (req, res) => {
    if(req.user){
        contentcatalog.get(req.user,function(err,result){
            if(err){
                throw err;
            }
            
            //console.log(result)
            res.render("catalogcontentcreate",{status:"ok", base_url:base_url, user:req.user, contentcatalog:result})
        });
        
    }else{
        res.render("index",{status:"no", base_url:base_url, user:"nothing"})
    }
})

router.get("/catalogcontent/edit/:id", loggedIn, async (req, res) => {
    if(req.user){
        
        contentcatalog.get(req.user,function(err,result){
            if(err){
                throw err;
            }
            contentcatalog.getById(req.user, req.params.id, function(err,catresult){
                //console.log(catresult);

                res.render("catalogcontentedit",{status:"ok", id:req.params.id, base_url:base_url, user:req.user, contentcatalog:result, content_data:catresult})
            });

        });
        
    }else{
        res.render("index",{status:"no", base_url:base_url, user:"nothing"})
    }
})

router.get("/quotes/create/:accid/:oppid", loggedIn, async (req, res) => {
    if(req.user){
        var accounts = await account.getAccount(req.params.accid, req.user);
        var opp_data = await opportunity.getOpportunity(req.params.accid, req.params.oppid, req.user);

        catalog.getpublished(req.user,function(err,result){
            if(err){
                throw err;
            }
            
            res.render("quotescreate",{status:"ok", id:req.params.id, oppid:req.params.oppid, accid:req.params.accid,base_url:base_url, user:req.user, catalog:result, accounts:accounts, opp_data:opp_data})
            

        });
        
    }else{
        res.render("index",{status:"no", base_url:base_url, user:"nothing"})
    }
})

router.get("/guidedsellingview/:accid/:oppid/:template_type/:quoteid", loggedIn, quotes.getById, async (req, res) => {
    var template_type = req.params.template_type;
    var sections = await catalog.getCatalogSections(template_type,req.user);
    var questions = await catalog.getCatalogQuestions(template_type,req.user);
    var accounts = await account.getAccount(req.params.accid, req.user);
    var opp_data = await opportunity.getOpportunity(req.params.accid, req.params.oppid, req.user);
    var catalog_data = await catalog.getCatalog(template_type, req.user);

    var workbook = new Excel.Workbook();
    var workval = await workbook.xlsx.readFile(__dirname+'/../excel/DD_EXCEL_CLC_ENGINE.xlsx').then(function() {
        var worksheet = workbook.getWorksheet(3);
        var A1 = worksheet.getCell('A1').value; 
        var B1 = worksheet.getCell('B1').value; 

        var A2 = worksheet.getCell('A2').value; 
        var B2 = worksheet.getCell('B2').value; 

        var A3 = worksheet.getCell('A3').value; 
        var B3 = worksheet.getCell('B3').value; 

        var A4 = worksheet.getCell('A4').value; 
        var B4 = worksheet.getCell('B4').value; 

        var A5 = worksheet.getCell('A5').value; 
        var B5 = worksheet.getCell('B5').value; 

        var A6 = worksheet.getCell('A6').value; 
        var B6 = worksheet.getCell('B6').value; 

        var A7 = worksheet.getCell('A7').value; 
        var B7 = worksheet.getCell('B7').value; 

        var A8 = worksheet.getCell('A8').value; 
        var B8 = worksheet.getCell('B8').value; 

        var A9 = worksheet.getCell('A9').value; 
        var B9 = worksheet.getCell('B9').value; 

        var A10 = worksheet.getCell('A10').value; 
        var B10 = worksheet.getCell('B11').value; 

        var A11 = worksheet.getCell('A11').value; 
        var B11 = worksheet.getCell('B11').value; 

        var A12 = worksheet.getCell('A12').value; 
        var B12 = worksheet.getCell('B12').value; 

        var A13 = worksheet.getCell('A13').value; 
        var B13 = worksheet.getCell('B13').value; 

        // var B8 = worksheet.getCell('B8').value.result;
        // var B9 = worksheet.getCell('B9').value.result;

    
        return {A1:A1, B1:B1, A2:A2, B2:B2, A3:A3, B3:B3, A4:A4, B4:B4, A5:A5, B5:B5, A6:A6, B6:B6, A7:A7, B7:B7, A8:A8, B8:B8, A9:A9, B9:B9, A10:A10, B10:B10, A11:A11, B11:B11, A12:A12, B12:B12, A13:A13, B13:B13};
  
    });
    if(req.user){
        catalog.get(req.user,function(err,result){
            if(err){
                throw err;
            }
            
            bid_estimation.get(req.user, req.params.accid, req.params.oppid, template_type, function(err,bid_estimation){
                if(err){
                    throw err;
                }
                res.render("guidedselling",{status:"ok", id:req.params.id, oppid:req.params.oppid, accid:req.params.accid,base_url:base_url, user:req.user, catalog:result, quotes:req.quotes, calc_data:workval, template_type:template_type, bid_estimation:bid_estimation,sections:sections, questions:questions, accounts:accounts, opp_data:opp_data, catalog_data:catalog_data})
            
            })
            

        });
        
    }else{
        res.render("index",{status:"no", base_url:base_url, user:"nothing"})
    }
})

router.post("/guidedselling/:accid/:oppid", loggedIn, quotes.add,  async (req, res) => {
    var template_type = req.body.template_type;
    var sections = await catalog.getCatalogSections(template_type,req.user);
    var questions = await catalog.getCatalogQuestions(template_type,req.user);
    var accounts = await account.getAccount(req.params.accid, req.user);
    var opp_data = await opportunity.getOpportunity(req.params.accid, req.params.oppid, req.user);
    var catalog_data = await catalog.getCatalog(template_type, req.user);

    //console.log(sections)
    var workbook = new Excel.Workbook();
    var workval = await workbook.xlsx.readFile(__dirname+'/../excel/DD_EXCEL_CLC_ENGINE.xlsx').then(function() {
        var worksheet = workbook.getWorksheet(3);
        var A1 = worksheet.getCell('A1').value; 
        var B1 = worksheet.getCell('B1').value; 

        var A2 = worksheet.getCell('A2').value; 
        var B2 = worksheet.getCell('B2').value; 

        var A3 = worksheet.getCell('A3').value; 
        var B3 = worksheet.getCell('B3').value; 

        var A4 = worksheet.getCell('A4').value; 
        var B4 = worksheet.getCell('B4').value; 

        var A5 = worksheet.getCell('A5').value; 
        var B5 = worksheet.getCell('B5').value; 

        var A6 = worksheet.getCell('A6').value; 
        var B6 = worksheet.getCell('B6').value; 

        var A7 = worksheet.getCell('A7').value; 
        var B7 = worksheet.getCell('B7').value; 

        var A8 = worksheet.getCell('A8').value; 
        var B8 = worksheet.getCell('B8').value; 

        var A9 = worksheet.getCell('A9').value; 
        var B9 = worksheet.getCell('B9').value; 

        var A10 = worksheet.getCell('A10').value; 
        var B10 = worksheet.getCell('B11').value; 

        var A11 = worksheet.getCell('A11').value; 
        var B11 = worksheet.getCell('B11').value; 

        var A12 = worksheet.getCell('A12').value; 
        var B12 = worksheet.getCell('B12').value; 

        var A13 = worksheet.getCell('A13').value; 
        var B13 = worksheet.getCell('B13').value; 

        // var B8 = worksheet.getCell('B8').value.result;
        // var B9 = worksheet.getCell('B9').value.result;

    
        return {A1:A1, B1:B1, A2:A2, B2:B2, A3:A3, B3:B3, A4:A4, B4:B4, A5:A5, B5:B5, A6:A6, B6:B6, A7:A7, B7:B7, A8:A8, B8:B8, A9:A9, B9:B9, A10:A10, B10:B10, A11:A11, B11:B11, A12:A12, B12:B12, A13:A13, B13:B13};
  
    });
    if(req.user){
        catalog.get(req.user,function(err,result){
            if(err){
                throw err;
            }
            
            bid_estimation.get(req.user, req.params.accid, req.params.oppid, template_type, function(err,bid_estimation){
                if(err){
                    throw err;
                }
                res.render("guidedselling",{status:"ok", id:req.params.id, oppid:req.params.oppid, accid:req.params.accid,base_url:base_url, user:req.user, catalog:result, quotes:req.quotes, calc_data:workval, template_type:template_type, bid_estimation:bid_estimation, sections:sections, questions:questions, accounts:accounts, opp_data:opp_data, catalog_data:catalog_data})
            
            })
            

        });
        
    }else{
        res.render("index",{status:"no", base_url:base_url, user:"nothing"})
    }
})


router.get("/guidedselling/sow/:accid/:oppid/:template_type", loggedIn, async (req, res) => {
    if(req.user){
        contentcatalog.get(req.user,function(err,result){
            if(err){
                throw err;
            }
            
            
            res.render("sow",{status:"ok", id:req.params.id, oppid:req.params.oppid, template_type:req.params.template_type, accid:req.params.accid,base_url:base_url, user:req.user, contentcatalog:result})
            

        });
        
    }else{
        res.render("index",{status:"no", base_url:base_url, user:"nothing"})
    }
})
module.exports = router;



