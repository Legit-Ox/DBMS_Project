const db = require("../db");
// To know if the user has a cart or not
exports.getCart = async (req, res) => {
  const { rows: cart } = await db.query(
    "SELECT * FROM cart WHERE user_id = $1",
    [req.user.user_id]
  );

  if (cart.length === 0) {
    const { rows: cart } = await db.query(
      "INSERT INTO cart(user_id) values($1) returning *",
      [req.user.user_id]
    );
    res.status(200).send(cart[0]);
  } else {
    res.status(200).send(cart[0]);
  }
};

//Function to add cart_item to the cart of current user
exports.addCartItem = async (req, res) => {
  const { cartId, menuItemId } = req.query;
  const { rows: cartItem } = await db.query(
    "INSERT INTO cart_item(cart_id, menu_item_id) values($1, $2) returning *",
    [cartId, menuItemId]
  );
  res.status(200).send(cartItem[0]);
};

//Function to increment cart_item_quantity
exports.incrementCartItemQuantity = async (req, res) => {
  const { rows: cartItem } = await db.query(
    "UPDATE cart_item SET quantity = quantity + 1 WHERE cart_id = $1 AND menu_item_id = $2 returning *",
    [cartId, menuItemId]
  );
  res.status(200).send(cartItem[0]);
};
//Function to decrement cart_item_quantity
exports.decrementCartItemQuantity = async (req, res) => {
  const { rows: cartItem } = await db.query(
    "UPDATE cart_item SET quantity = quantity - 1 WHERE cart_id = $1 AND menu_item_id = $2 returning *",
    [cartId, menuItemId]
  );
  res.status(200).send(cartItem[0]);
};
