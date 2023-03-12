const { Router } = require("express");
const { createRestaurant, getDetails } = require("../controllers/restaurant");
const { userAuth } = require("../middlewares/auth-middleware");
const router = Router();
router.post("/restaurants", userAuth, createRestaurant);
router.get("/getDetails", userAuth, getDetails);
module.exports = router;
