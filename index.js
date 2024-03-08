// server create kiya 
const express = require("express");
const app = express();

// server ke liye port find out kiya
require("dotenv").config();
const PORT = process.env.PORT || 8000;

//middleware
app.use(express.json());

const blog = require("./routes/blog")

// mount  karege
app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();

// start the server

app.listen(PORT, () => {
    console.log(`App is started at port no ${PORT}`);
})

//default routes
  
app.get("/", () => {
    console.log("This is a home page baby");
})
