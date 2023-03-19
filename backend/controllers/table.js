const db = require("../db");
//Function to create a table when the user is a restaurant owner
exports.createTable = async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO tables (table_name,table_capacity,table_status,table_rest_id) VALUES ($1,$2,$3,$4) returning *",
      [
        req.body.table_name,
        req.body.table_capacity,
        req.body.table_status,
        req.body.table_rest_id,
      ]
    );
    res.status(201).json({
      status: "success",
      data: {
        table: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
//Function to get the number of tables available of a restaurant based on the table_status
exports.getAvailableTables = async (req, res) => {
  try {
    const results = await db.query(
      "SELECT COUNT(*) FROM tables WHERE table_status = 'available' AND table_rest_id = $1",
      [req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        table: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
//Function to get the number of tables occupied of a restaurant based on the table_status
exports.getOccupiedTables = async (req, res) => {
  try {
    const results = await db.query(
      "SELECT COUNT(*) FROM tables WHERE table_status = 'occupied' AND table_rest_id = $1",
      [req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        table: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
//Function to get the number of tables reserved of a restaurant based on the table_status
exports.getReservedTables = async (req, res) => {
  try {
    const results = await db.query(
      "SELECT COUNT(*) FROM tables WHERE table_status = 'reserved' AND table_rest_id = $1",
      [req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        table: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
//Function to get the number of tables of a restaurant
exports.getTables = async (req, res) => {
  try {
    const results = await db.query(
      "SELECT COUNT(*) FROM tables WHERE table_rest_id = $1",
      [req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        table: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
//Function to update the table_status of a table in a restaurant
exports.updateTableStatus = async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE tables SET table_status = $1 WHERE table_id = $2 returning *",
      [req.body.table_status, req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        table: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
