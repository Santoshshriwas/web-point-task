const express = require("express");
const cors = require("cors")
const app = express();
const mongoose = require ("mongoose");
const userRoute = require("./Routes/userRoute.js")
const port= 4004
mongoose.connect("mongodb://127.0.0.1:27017/web-point");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})
app.use("/user",userRoute)


