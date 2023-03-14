const { Router } = require("express");
const {
  createRestaurant,
  getDetails,
  updateRestaurant,
} = require("../controllers/restaurant");
const { userAuth } = require("../middlewares/auth-middleware");
const router = Router();
router.post("/restaurants", userAuth, createRestaurant);
router.get("/getDetails", userAuth, getDetails);
router.put("/updateRestaurant", userAuth, updateRestaurant);
module.exports = router;
