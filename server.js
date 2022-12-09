var express = require("express");
var app = express();
var path = require("path"); 
var HTTP_PORT = process.env.PORT || 8080;  

function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/finalViews/home.html"));
});

app.get("/register", function(req, res){
    res.sendFile(path.join(__dirname, "/finalViews/register.html"));
});

app.get("/signIn", function(req, res){
    res.sendFile(path.join(__dirname, "/finalViews/signIn.html"));
});

app.use((req, res) => {
    res.status(404).send("page not found");
  });

app.listen(HTTP_PORT, onHttpStart);