const { Router } = require("express");
const { userAuth } = require("../middlewares/auth-middleware");
const {
  getCart,
  addCartItem,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
  getCartId,
  getCartItems,
  getCartDetails,
  removeCartItem,
} = require("../controllers/cart");
const { createCart } = require("../controllers/cart");

const router = Router();

//Create cart api
router.post("/getCart", userAuth, createCart);
router.post("/getCartId", userAuth, getCartId);
router.get("/getCartItems", userAuth, getCartItems);
//add cart item
router.post("/addCartItem", userAuth, addCartItem);
router.post("/incrementCartItem", userAuth, incrementCartItemQuantity);
router.post("/decrementCartItem", userAuth, decrementCartItemQuantity);
router.get("/getCartDetails", userAuth, getCartDetails);
router.get("/removeCartItem", userAuth, removeCartItem);

module.exports = router;
