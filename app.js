const express = require("express");
const bodyParser = require("body-parser");
let app = express();
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res)
{
  console.log("Accessed the home page");
  res.render("index");
});
