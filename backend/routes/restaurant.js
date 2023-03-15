const { Router } = require("express");
const {
  createRestaurant,
  getDetails,
  updateRestaurant,
  getAllRestaurants,
} = require("../controllers/restaurant");
const { userAuth } = require("../middlewares/auth-middleware");
const router = Router();
router.post("/restaurants", userAuth, createRestaurant);
router.get("/getDetails", userAuth, getDetails);
router.put("/updateRestaurant", userAuth, updateRestaurant);
router.get("/getAllRestaurants", userAuth, getAllRestaurants);
module.exports = router;
