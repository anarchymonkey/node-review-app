const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/review_app",{ useNewUrlParser: true }); // connecting to mongo database
let app = express();
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res)
{
  console.log("Accessed the home page");
  res.render("index");
});
app.get("/reviews",function(req,res)
{
  console.log("Accessed the reviews page");
  res.render("reviews");
});
app.listen(process.env.PORT || 3000 , function(){
  console.log("Server Started on port 3000");
});
