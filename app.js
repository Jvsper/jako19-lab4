const express = require("express");
const app = express();
const port = 3000;

app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
//routes

app.get("/", function (req,res){
	res.render("index.html");
})

app.get("/mercury", function (req,res){
	res.render("mercury.html");
})

app.get("/", function (req,res){
	res.send("This will be Venus web page!");
})

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Express server is now running.");
})