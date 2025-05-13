const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: String,
    price: Number,
    country: String,
    location: String,
    image: {
        type: String,
        default:"https://images.unsplash.com/photo-1745681619881-975e836e432c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (imgVal)=> imgVal===""? "https://images.unsplash.com/photo-1745681619881-975e836e432c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D": imgVal
    }
},{
    timestamps: true
})

const Listing = mongoose.model("Listing",listingSchema);

module.exports = Listing;