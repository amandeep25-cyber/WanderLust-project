const express = require("express");
const path = require("path");

const app = express();


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json({ limit:"16kb"}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


//importing routes
const listingRoutes = require("./routes/listing.routes")

// using routes
app.use('/listing',listingRoutes);


module.exports = app;