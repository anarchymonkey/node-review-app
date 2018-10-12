const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/review_app",{ useNewUrlParser: true }); // connecting to mongo database
let app = express();
app.set("view engine","ejs");
app.use(express.static("public"));

let databaseSchema = mongoose.Schema({
  name : String,
  review : String
});

let databaseModel = mongoose.model("databaseModel",databaseSchema);

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

app.get("/reviews/add",function(req,res){
  res.render("addReview");
  let name = name;
  let review = review;
  let dbEntry = {name:name,review:review};
  databaseModel.create(dbEntry,function(err,res){
    if(err)
    {
      console.log("Data Not Entered");
    }
    else {
      res.redirect("/reviews");
    }
  });
});
app.listen(process.env.PORT || 3000 , function(){
  console.log("Server Started on port 3000");
});
