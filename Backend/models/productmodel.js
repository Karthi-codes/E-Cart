const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    ratings:String,
    images:[
        {
            image:String
        }
    ],
    category:String,
    seller:String,
    stock:String,
    No_Of_Reviews:String,
    createdAt:Date
})

const productmodel= mongoose.model("Product",productSchema)// this line is used to create the folder in the database 
module.exports=productmodel;// this line is used to export the model with the variable