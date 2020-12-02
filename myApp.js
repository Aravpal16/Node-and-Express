var express = require('express');
var app = express();
//console.log("Hello World");

app.get('/',(req,res)=>{
  res.sendFile(__dirname + "/views/index.html");
})

app.use(express.static(__dirname + "/public"))


app.get('/json',(req,res)=>{
  var response="Hello json";
  if(process.env.MESSAGE_STYLE === "uppercase"){
    response="Hello json".toUpperCase();
  }
  
  res.json({"message": response});
})


app.get('/man',(req,res,next)=>{
  var string = req.method + " " + req.path + " - " + req.ip;
  
  console.log(string);
  next();
})




























 module.exports = app;
