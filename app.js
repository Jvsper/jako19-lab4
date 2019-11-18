const express = require("express");
const app = express();
const port = 3000;

app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

//routes

app.get("/", function (req,res){
	res.render("index.html");
})

app.get("/mercury", function (req,res){
	res.render("mercury.html");
})

app.get("/venus", function (req,res){
	res.render("venus.html");
})

app.get("/earth", function (req,res){
	res.render("earth.html");
})

app.get("/jupiter", function (req,res){
	res.render("jupiter.html");
})

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Express server is now running");
})


/*
app.listen(port, function(){
	console.log("Express server is running on port 3000");
})
*/