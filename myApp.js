var express = require('express');
var app = express();
//console.log("Hello World");

var myLogger = (req, res, next) => {
let ClientIp = req.ip
let path = req.path
let method = req.method

console.log(method + " " + path + " - " + ClientIp);
next()
}
app.use(myLogger);

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

app.get("/now",(req,res,next)=>{
  req.time=new Date().toString();
  
  next();
},(req, res) =>{
  res.send({time:req.time})})

app.get("/:word/echo",(req,res)=>{
  res.json({echo:req.params.word});
})





























 module.exports = app;
