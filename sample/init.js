const connectDB = require("../src/db/connection.db");
const Listing = require("../src/models/listing.models");
const data = require("./data");

connectDB().then(()=>{
    console.log("DB connected successfully");
}).catch((err)=>{
    console.log(err)
})


const sampleTesting = async()=>{
    await Listing.deleteMany({});
    const dataSet = await Listing.insertMany(data);
    console.log(dataSet);
}

sampleTesting();