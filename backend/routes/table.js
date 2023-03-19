const { Router } = require("express");
const { createTable } = require("../controllers/table");

const router = Router();
router.post("/createTable", createTable);

module.exports = router;
