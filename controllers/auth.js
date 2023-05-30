const express = require("express");
const register = require("./register")
const login = require("./login")
const loggedIn = require("./loggedin")
const opportunity = require("./opportunity")
const catalog = require("./catalog")
const contentcatalog = require("./contentcatalog")
const bid_estimation = require("./bid_estimation")
const quotes = require("./quotes")

const account = require("./account")

const logout = require("./logout");
const lookups = require("./lookups");
const router = express.Router();

router.post("/register", register) 
router.post("/login",login);
router.get('/logout', logout);

router.post("/createaccount", loggedIn, account.add);
router.post("/updateaccount", loggedIn, account.updateaccount);
router.post("/create_opportunity/:id", loggedIn, opportunity.add);
router.post("/updateOpportunity", loggedIn, opportunity.updateopportunity);

// catalog
router.post("/createcatalog", loggedIn, catalog.add);
router.post("/updatecatalog", loggedIn, catalog.updatecatalog);
router.post("/editsubmitcatalog/:id", loggedIn, catalog.editsubmitcatalog);
router.post("/copycatalog/:id", loggedIn, catalog.copycatalog);
router.get("/catalog/delete/:id", loggedIn, catalog.deletecatalog);
router.post("/autoUpdateCatalog/:id", loggedIn, catalog.autoUpdateCatalog);


// content catalog
router.post("/createcatalogcontent", loggedIn, contentcatalog.add);
router.post("/updatecatalogcontent", loggedIn, contentcatalog.updatecatalogcontent);

// Bid Estimation Calc
router.post("/bid_estimation_calc", loggedIn, bid_estimation.calculation);

// lookups
router.post("/lookups/add", loggedIn, lookups.add);
router.post("/lookups/add_lookups_data", loggedIn, lookups.add_lookups_data);
router.post("/lookups/delete_lookups_data", loggedIn, lookups.delete_lookups_data);
router.post("/lookups/updatelookups", loggedIn, lookups.updatelookups);
router.post("/lookups/getParentLookupsData", loggedIn, lookups.getParentLookupsData);


module.exports = router;