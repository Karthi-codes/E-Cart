const express=require("express"); // this is used to map the variable with the express
const { order } = require("../controller/ordercontroller");

const router =express.Router();

router.route("/order").post(order);
module.exports=router;
