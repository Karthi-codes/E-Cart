const express=require("express"); // to connect the express module 
const react= express(); // react is the variable that will have all the method of express
const dotenv=require("dotenv");// it will handle the environmental file in our project
const path= require("path");// this is used to show the port number in the config files port number
const cors=require("cors")

dotenv.config({path:path.join(__dirname,"config","config.env")})

const product=require("./Routes/product")
const connect=require("./config/CDBS")
const order =require("./Routes/order")


react.use(express.json());
react.use(cors());
connect();

react.use("/api/p1",product)
react.use("/api/p1",order)




react.listen(process.env.PORT,()=>{// this is used to show the port number in the terminal and connect the database with the config file
    console.log(`Server is Running :${process.env.PORT}`)
})

