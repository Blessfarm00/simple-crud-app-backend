const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const app = express();
const productRoute = require('./route/product.route')
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use("/api/products", productRoute);


app.get("/", (req, res) => {
  res.send("Hello World Backend OK");
});




//get all products


//get by id


//update



//post product or insert products

//delete products



mongoose
  .connect(
    "mongodb+srv://admin:4E0xQxBBCGO4jydy@backenddb.jx18ru5.mongodb.net/?retryWrites=true&w=majority&appName=BackEndDB"
  )
  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.error("connection failed");
  });
