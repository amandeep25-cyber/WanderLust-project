const Listing = require("../models/listing.models");

const getAllListing = async(req,res)=>{
    const allData = await Listing.find({});
    
    res.render("listing/index.ejs",{allData});
}

module.exports= {
    getAllListing,
}