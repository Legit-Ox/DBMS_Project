const db = require("../db");

//Create a function called place order which calls a stored function place_order with only 1 paramater which is user_id

exports.placeOrder = async (req, res) => {
  console.log("place an order");
  try {
    const results = await db.query(
      "SELECT * from place_order($1,$2)",
      [req.user.user_id, req.query.rest_id],
      (err, result) => {
        if (err) {
          console.error("Error calling place_order procedure:", err);
        } else {
          // Extract the status code from the result
          statusCode = result.rows[0].place_order;
          console.log("Status code:", statusCode);
          res.status(201).json({
            status: "success",
            data: {
              order: req.body,
            },
          });
        }
      }
    );
  } catch (error) {
    console.log(error.message);
  }

  console.log(req.body);
};

//Write a function createOrder
// exports.createOrder = async (req, res) => {
//   console.log("create a order");
//   try {
//     if (req.user.isowner == false) {
//       const results = await db.query(
//         "INSERT INTO orders (order_status,order_total, user_id, rest_id) SELECT $1 ,$2,$3, $4",
//         [
//           req.body.order_status,
//           req.body.order_total,
//           req.user.user_id,
//           req.body.rest_id,
//         ]
//       );
//       console.log(results);
//       res.status(201).json({
//         status: "success",
//         data: {
//           order: req.body,
//         },
//       });
//     } else {
//       res.status(401).json({
//         status: "failed",
//         data: {
//           message: "You are not authorized to create order",
//         },
//       });
//     }
//   } catch (error) {
//     console.log(error.message);
//   }

//   console.log(req.body);
// };
exports.createOrder = async (req, res) => {
  console.log("create a order");
  try {
    // if (req.user.isowner == false) {
    const results = await db.query(
      "CALL create_order($1, $2, $3, $4)",
      [
        req.body.order_status,
        req.body.order_total,
        req.user.user_id,
        req.body.rest_id,
      ],
      (err, result) => {
        if (err) {
          console.error("Error calling create_order function:", err);
        } else {
          // Extract the status code from the result
          statusCode = result.rows[0].create_order;
          console.log("Status code:", statusCode);
          res.status(201).json({
            status: "success",
            data: {
              order: req.body,
            },
          });
        }
      }
    );
  } catch (error) {
    console.log(error.message);
  }

  console.log(req.body);
};

//Function to cancel order where a procedure cancel_order is called

exports.cancelOrder = async (req, res) => {
  console.log("cancel a order");
  try {
    if (req.user.isowner == false) {
      const results = await db.query(
        "SELECT * from cancel_order($1)",
        [req.body.order_id],
        (err, result) => {
          if (err) {
            console.error("Error calling cancel_order procedure:", err);
          } else {
            // Extract the status code from the result
            statusCode = result.rows[0].cancel_order;
            console.log("Status code:", statusCode);
            res.status(200).json({
              status: "success",
              data: {
                order: req.body,
              },
            });
          }
        }
      );
    } else {
      res.status(401).json({
        status: "failed",
        data: {
          message: "You are not authorized to cancel order",
        },
      });
    }
  } catch (error) {
    console.log(error.message);
  }
  console.log(req.body);
};

//Update Order
// exports.updateOrder = async (req, res) => {
//   console.log("update a order");
//   try {
//     if (req.user.isowner) {
//       const results = await db.query(
//         "UPDATE orders SET order_status=$1 WHERE order_id=$2 returning *",
//         [req.body.order_status, req.body.order_id]
//       );
//       console.log(results);
//       res.status(200).json({
//         status: "success",
//         data: {
//           order: results.rows,
//         },
//       });
//     } else {
//       res.status(401).json({
//         status: "failed",
//         data: {
//           message: "You are not authorized to update order",
//         },
//       });
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
//   console.log(req.body);
// };
//Function to update an order where a procedure named update_order_status is called
exports.updateOrder = async (req, res) => {
  console.log("update a order");
  try {
    if (req.user.isowner) {
      await db.query(
        "SELECT * from update_order_status($1, $2)",
        [req.body.order_id, req.body.order_status],
        true,
        (err, result) => {
          if (err) {
            console.error("Error calling update_order_status procedure:", err);
          } else {
            // Extract the status code from the result
            statusCode = result.rows[0].update_order_status;
            console.log("Status code:", statusCode);
            res.status(200).json({
              status: "success",
              data: {
                order: req.body,
              },
            });
          }
        }
      );
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
//A function which calls a stored function get_order_total displaying the order_total
