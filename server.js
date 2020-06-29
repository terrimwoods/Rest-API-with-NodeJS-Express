var express = require("express");
var app = express();


//*********************************************** */
/** Server Configuration */
/*********************************************** */

// render HTML from the endpoints
var ejs = require("ejs");
const bodyParser = require("body-parser");
app.set("views", __dirname + "/public");
app.engine("html", ejs.renderFile);
app.set("view engine", ejs);

//server static file (js, css, img, pdf)
app.use(express.static(__dirname+"/public"));


//configure body-parser to read req payload
var bparser = require("body-parser");
app.use(bparser.json());


/***************************** */
//Server HTML
/**************************** */

app.get("/", function(req, res){
    res.render("index.html");
});
// create the /admin endpoint
//server the admin.html

app.get("/admin", function(req, res){
    res.render("admin.html");
});

app.get("/about", function(req, res){
    res.send("<h1 style='color:blue'>Terri Woods!</h1>");
});

app.get("/contact", function(req, res){
    res.send("<h1 style='color:blueviolet'>Please contact me at 318-820-9371!</h1>");
});

//*************************** */
//*********API ENDPOINTS********
//*************************** */
var list = [];

app.post("/API/items", function(req,res){
   // console.log("Browser created a POST req");
    var item = req.body;
    list.push(item);

    res.json(item);
});


app.get("/API/items", function(req, res){
    res.json(list);
});



//start the project
app.listen(8080, function(){
    console.log("Server running at localhost:8080");
});


//CTRL + C: to kill the server
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// https://www.restapitutorial.com/httpstatuscodes.html


//please contact me at my@mail.com

//API -> Application Programing Interface