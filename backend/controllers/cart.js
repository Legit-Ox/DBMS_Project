const db = require("../db");
// To know if the user has a cart or not using a procedure called create_cart

exports.createCart = async (req, res) => {
  console.log("create a cart");
  try {
    const results = await db.query(
      "CALL create_cart($1)",
      [req.user.user_id],
      (err, result) => {
        if (err) {
          console.error("Error calling create_cart procedure:", err);
        } else {
          // Extract the status code from the result

          statusCode = result.rows[0].create_cart;
          console.log("Status code:", statusCode);
          res.status(201).json({
            status: "success",
            data: {
              cart: req.body,
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

// exports.getCart = async (req, res) => {
//   const { rows: cart } = await db.query(
//     "SELECT * FROM cart WHERE user_id = $1",
//     [req.user.user_id]
//   );

//   if (cart.length === 0) {
//     const { rows: cart } = await db.query(
//       "INSERT INTO cart(user_id) values($1) returning *",
//       [req.user.user_id]
//     );
//     res.status(200).send(cart[0]);
//   } else {
//     res.status(200).send(cart[0]);
//   }
// };

//Function to add cart_item to the cart of current user
exports.addCartItem = async (req, res) => {
  const { rows: cartItem } = await db.query(
    "INSERT INTO cart_item(cart_id, menu_item_id) values($1, $2) returning *",
    [req.query.cartId, req.query.menuItemId]
  );
  res.status(200).send(cartItem[0]);
};

//Function to increment cart_item_quantity by using a stored function named increase_cart_item_quantity

exports.incrementCartItemQuantity = async (req, res) => {
  const { rows: cartItem } = await db.query(
    "SELECT * from increase_cart_item_quantity($1, $2)",
    [req.query.cartId, req.query.menuItemId],
    (err, result) => {
      if (err) {
        console.error("Error calling increase_cart_item_quantity:", err);
      } else {
        // Extract the status code from the result
        statusCode = result.rows[0].increase_cart_item_quantity;
        console.log("Status code:", statusCode);
        res.status(200).json({
          status: "success",
          data: {
            cart: req.body,
          },
        });
      }
    }
  );
  res.status(200).send(cartItem[0]);
};

// exports.incrementCartItemQuantity = async (req, res) => {
//   const { rows: cartItem } = await db.query(
//     "UPDATE cart_item SET cart_item_quantity = cart_item_quantity + 1 WHERE cart_id = $1 AND menu_item_id = $2 returning *",
//     [req.query.cartId, req.query.menuItemId]
//   );
//   res.status(200).send(cartItem[0]);
// };
//Function to decrement cart_item_quantity by using a stored function called decrease_item_quantity

exports.decrementCartItemQuantity = async (req, res) => {
  const { rows: cartItem } = await db.query(
    "SELECT * from decrease_cart_item_quantity($1, $2)",
    [req.query.cartId, req.query.menuItemId],
    (err, result) => {
      if (err) {
        console.error("Error calling decrease_cart_item_quantity:", err);
      } else {
        // Extract the status code from the result
        statusCode = result.rows[0].decrease_cart_item_quantity;
        console.log("Status code:", statusCode);
        res.status(200).json({
          status: "success",
          data: {
            cart: req.body,
          },
        });
      }
    }
  );

  res.status(200).send(cartItem[0]);
};

// exports.decrementCartItemQuantity = async (req, res) => {
//   const { rows: cartItem } = await db.query(
//     "UPDATE cart_item SET quantity = quantity - 1 WHERE cart_id = $1 AND menu_item_id = $2 returning *",
//     [cartId, menuItemId]
//   );
//   res.status(200).send(cartItem[0]);
// };
//Function to get cart_id based on current user_id

exports.getCartId = async (req, res) => {
  const { rows: cart } = await db.query(
    "SELECT cart_id FROM cart WHERE user_id = $1",
    [req.user.user_id]
  );
  res.status(200).send(cart[0]);
};

//Function to get all cart_item based on cart_id

exports.getCartItems = async (req, res) => {
  const { rows: cart } = await db.query(
    "SELECT * FROM cart_item WHERE cart_id = $1",
    [req.query.cartId]
  );
  res.status(200).send(cart);
};
