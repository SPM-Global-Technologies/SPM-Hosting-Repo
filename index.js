 const cookieParser = require("cookie-parser");
const express = require("express");
var session = require('express-session');
 const db = require("./routes/db-config");
 const app = express();
 const bodyParser = require('body-parser'); 
//  const cookie = require("cookie-Parser");
 const flash = require('connect-flash');
const PORT = process.env.PORT || 3000;
const router = express.Router();

// app.use(cookie());
app.use(express.static(__dirname + '/public'))
app.use('/js', express.static(__dirname + '/public/assets/js'))

// app.use(express.static(__dirname + '/public'))
app.use('/css', express.static(__dirname + '/public/assets/css'))

// app.use(express.static(__dirname + '/public'))
app.use('/images', express.static(__dirname + '/public/assets/images'))

app.use('/pdf', express.static(__dirname + '/pdf'))


app.use(bodyParser.urlencoded({
  extended: true
}));

// app.use(cookieParser());
app.use(cookieParser('secret'));
app.use(session({cookie: { maxAge: 60000 }}));
app.use(flash());
app.use(router);

app.use(bodyParser.json());
// app.use(app.router)

// app.use(express.bodyParser());
// app.use(express.urlencoded());


// app.use('/js', express.static(__dirname + '/public/js'))
// app.use('/css', express.static(__dirname + '/public/css'))
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json());
db.connect((err)=>{
    if (err) throw err;

})
app.use("/", require("./routes/pages"))
app.use("/api", require("./controllers/auth"));
// app.listen(PORT);
// const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});