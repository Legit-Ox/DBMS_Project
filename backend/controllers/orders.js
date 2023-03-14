const db = require("../db");
//Write a function createOrder

exports.createOrder = async (req, res) => {
  console.log("create a order");
  try {
    if (req.user.isowner == false) {
      const results = await db.query(
        "INSERT INTO orders (order_status,order_total, user_id, rest_id) SELECT $1 ,$2,$3, $4",
        [
          req.body.order_status,
          req.body.order_total,
          req.user.user_id,
          req.body.rest_id,
        ]
      );
      console.log(results);
      res.status(201).json({
        status: "success",
        data: {
          order: req.body,
        },
      });
    } else {
      res.status(401).json({
        status: "failed",
        data: {
          message: "You are not authorized to create order",
        },
      });
    }
  } catch (error) {
    console.log(error.message);
  }

  console.log(req.body);
};
//Update Order
exports.updateOrder = async (req, res) => {
  console.log("update a order");
  try {
    if (req.user.isowner) {
      const results = await db.query(
        "UPDATE orders SET order_status=$1 WHERE order_id=$2 returning *",
        [req.body.order_status, req.body.order_id]
      );
      console.log(results);
      res.status(200).json({
        status: "success",
        data: {
          order: results.rows,
        },
      });
    } else {
      res.status(401).json({
        status: "failed",
        data: {
          message: "You are not authorized to update order",
        },
      });
    }
  } catch (error) {
    console.log(error.message);
  }
  console.log(req.body);
};
//Function to create a order_item
exports.createOrderItem = async (req, res) => {
  console.log("create a order item");
  try {
    if (req.user.isowner == false) {
      const results = await db.query(
        "INSERT INTO order_item (order_id,menu_item_id, order_item_quantity) SELECT $1 ,$2,$3",
        [req.body.order_id, req.body.menu_item_id, req.body.order_item_quantity]
      );
      console.log(results);
      res.status(201).json({
        status: "success",
        data: {
          order_item: req.body,
        },
      });
    } else {
      res.status(401).json({
        status: "failed",
        data: {
          message: "You are not authorized to create order item",
        },
      });
    }
  } catch (error) {
    console.log(error.message);
  }
  console.log(req.body);
};
