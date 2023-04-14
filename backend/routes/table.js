const { Router } = require("express");
const {
  createTable,
  getAvailableTables,
  getOccupiedTables,
  getReservedTables,
  updateTableStatus,
  getTables,
} = require("../controllers/table");
const { userAuth } = require("../middlewares/auth-middleware");

const router = Router();
router.post("/createTable", userAuth, createTable);
router.post("/updateTableStatus", userAuth, updateTableStatus);
router.get("/getAvailableTables/:id", userAuth, getAvailableTables);
router.get("/getOccupiedTables/:id", userAuth, getOccupiedTables);
router.get("/getReservedTables/:id", userAuth, getReservedTables);
router.get("/getTotalTables/:id", userAuth, getTables);

module.exports = router;
