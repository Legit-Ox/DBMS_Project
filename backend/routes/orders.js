const { Router } = require("express");
const {
  createOrder,
  updateOrder,
  createOrderItem,
  cancelOrder,
  placeOrder,
} = require("../controllers/orders");
const { userAuth } = require("../middlewares/auth-middleware");
const router = Router();
router.post("/createOrder", userAuth, createOrder);
router.post("/placeOrder", userAuth, placeOrder);
router.post("/cancelOrder", userAuth, cancelOrder);
router.post("/updateOrderStatus", userAuth, updateOrder);
router.post("/createOrderItem", userAuth, createOrderItem);
module.exports = router;
