const { Router } = require("express");
const {
  createMenu,
  createMenuItem,
  getMenu,
  getMenuItem,
} = require("../controllers/menu");
const { userAuth } = require("../middlewares/auth-middleware");
const router = Router();
router.post("/createMenu", userAuth, createMenu);
router.post("/createMenuItem", userAuth, createMenuItem);
router.get("/getMenu/:rest_id", userAuth, getMenu);
router.get("/getMenuItems/:rest_id", userAuth, getMenuItem);
module.exports = router;
