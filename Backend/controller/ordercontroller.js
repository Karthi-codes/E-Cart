const ordermodel = require("../models/ordermodel")
const productmodels=require("../models/productmodel")

exports.order = async(req,res,next)=>{
    const status ='pending'
    const Items=req.body
    const price = Number(Items.reduce((acc, item) => acc + item.product.price * item.qty, 0).toFixed(2));// reduce method to display(convert) all products as one 
    // const price = Number(Items.reduce((acc, item) => acc + item.price, 0));
    const orders=await ordermodel.create({
        cartItems:Items,
        amount:price,
        status})

        Items.forEach(async(item)=>{
           const product= await productmodels.findById(item.product._id);
            product.stock = product.stock-item.qty;
            await product.save();
        })


    res.json({
        success:true,
        // message:"You Have created the order"
        orders
    })
}

exports.home = async(req,res)=>{
    try {
        res.status(200).json({message:"Welcome to backend"})
    } catch (error) {
        res.status(404).json({error:"404 Not Found"})
        console.log("Internal Server error in Home");
        
    }
}