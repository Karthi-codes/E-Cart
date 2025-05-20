const express=require("express"); // this is used to map the variable with the express
const { order,home } = require("../controller/ordercontroller");


const router =express.Router();

router.route("/order").post(order);
router.get('/',home)
module.exports=router;
