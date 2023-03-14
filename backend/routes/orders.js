const { Router } = require("express");
const {
  createOrder,
  updateOrder,
  createOrderItem,
} = require("../controllers/orders");
const { userAuth } = require("../middlewares/auth-middleware");
const router = Router();
router.post("/createOrder", userAuth, createOrder);
router.post("/updateOrderStatus", userAuth, updateOrder);
router.post("/createOrderItem", userAuth, createOrderItem);
module.exports = router;
