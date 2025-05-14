const connectDB = require("./db/connection.db");
const dotenv = require("dotenv");
const app = require("./app");

const port = process.env.PORT;

dotenv.config({
    path:"../.env"
})

connectDB().then(()=>{
    console.log("DB connected successfully");
    app.listen(port,()=>{
     console.log(`App is listening on http://localhost:${port}/listing`);
    })
}).catch((err)=>{
    console.log(err);
})


