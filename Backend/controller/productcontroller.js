const productmodel = require("../models/productmodel")


exports.getProducts= async (req,res,next)=>{
    const query = req.query.keyword?{name:{
        $regex:req.query.keyword,
        $options:'i'}}:{}
        
    const getProducts= await productmodel.find(query)
    res.json({
        success:true,
        // message:"Thanks for Your order"
        getProducts
    })
}

exports.getsingleProduct= async(req,res,next)=>{
    try{
        const getsingleProduct =await productmodel.findById(req.params.id)
        res.json({
            success:true,
            // message:"Single product is send successfully"
            getsingleProduct
    
        })
    }
    catch{
        res.status(404).json({
            success:false,
            message:"THE GIVEN ID IS INVALID"
        })
    }
    
}