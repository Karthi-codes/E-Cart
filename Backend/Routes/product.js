const express=require("express");
const { getProducts, getsingleProduct } = require("../controller/productcontroller");
const router=express.Router();

router.route("/product").get(getProducts);
router.route("/product/:id").get(getsingleProduct);

module.exports=router;
