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
router.get("/getMenu", userAuth, getMenu);
router.get("/getMenuItems", userAuth, getMenuItem);
module.exports = router;
