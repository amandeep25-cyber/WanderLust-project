const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    title:{
        type: String
    },
    description: String,
    price: Number,
    country: String,
    location: String,
    image: String
},{
    timestamps: true
})

const Listing = mongoose.model("Listing",listingSchema);

module.exports = Listing;