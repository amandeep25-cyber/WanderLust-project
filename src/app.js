const express = require("express");
const path = require("path");

const app = express();


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json({ limit:"16kb"}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


app.get("/",(req,res)=>{
    console.log(__dirname);
    res.send("get route");
})


module.exports = app;