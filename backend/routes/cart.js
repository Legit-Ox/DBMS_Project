const { Router } = require("express");
const { userAuth } = require("../middlewares/auth-middleware");
const { getCart, addCartItem } = require("../controllers/cart");

const router = Router();

//Create cart api
router.post("/getCart", userAuth, getCart);
//add cart item
router.post("/addCartItem", userAuth, addCartItem);

module.exports = router;
