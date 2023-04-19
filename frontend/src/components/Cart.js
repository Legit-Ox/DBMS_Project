import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
const Cart = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < 20) {
      setQuantity((prevCount) => prevCount + 1);
    }
  };
  const [cartItems, setCartItemsArray] = useState([{}]);
  const [cartId, setCartId] = useState("");
  const getCartId = async () => {
    try {
      const cartData = await axios.post(
        "http://localhost:3006/api/v1/getCartId"
      );
      setCartId(cartData.data.cart_id);
      console.log(cartId);
    } catch (error) {
      console.log(error.message);
    }
  };
  // //To get cart_item based on cart_id
  const getCartItems = async () => {
    try {
      const cartItemsData = await axios.get(
        `http://localhost:3006/api/v1/getCartItems?cartId=${cartId}`
      );
      setCartItemsArray(cartItemsData.data);
      console.log(cartItems);
    } catch (error) {
      console.log(error.message);
    }
  };
  const [cartDetails, setCartDetails] = useState({});
  const getCartDetails = async () => {
    try {
      const cartDetailsData = await axios.get(
        `http://localhost:3006/api/v1/getCartDetails`
      );
      setCartDetails(cartDetailsData.data);
      console.log(cartDetails);
    } catch (error) {
      console.log(error.message);
    }
  };

  //To increment based on two parameters cartId and menu_item_id

  const incrementCartItem = async (cartId, cart_item_id) => {
    try {
      const cartItemData = await axios.post(
        `http://localhost:3006/api/v1/incrementCartItem?cartId=${cartId}&cartItemId=${cart_item_id}`
      );
      console.log("Incremented Cart Item");
    } catch (error) {
      console.log(error.message);
    }
  };
  //To decrement based on two parameters cartId and menu_item_id
  const decrementCartItem = async (cartId, cart_item_id) => {
    try {
      const cartItemData = await axios.post(
        `http://localhost:3006/api/v1/decrementCartItem?cartId=${cartId}&cartItemId=${cart_item_id}`
      );
      console.log("Decremented Cart Item");
    } catch (error) {
      console.log(error.message);
    }
  };
  //Function to remove cart_item

  const removeCartItem = async (cart_item_id) => {
    try {
      const cartItemData = await axios.get(
        `http://localhost:3006/api/v1/removeCartItem?cartItemId=${cart_item_id}`
      );
      console.log("Removed Cart Item");
    } catch (error) {
      console.log(error.message);
    }
  };

  //Function to place order
  const placeOrder = async () => {
    try {
      const placeOrderData = await axios.post(
        `http://localhost:3006/api/v1/placeOrder?rest_id=${props.postId}`
      );
      console.log("Order Placed");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCartId();
    getCartDetails();
  }, []);

  return (
    <div className="w-full bg-gray-100 py-8 px-4" id="cart">
      <div className="flex-col justify-start mx-2 my-auto">
        <h1 className="text-[#303030] text-6xl mx-3">Cart</h1>
        <h1
          className="text-[#303030] text-lg mx-3"
          onClick={() => getCartItems()}
        >
          Refresh
        </h1>
      </div>
      <div className="grid md:grid-cols-5 mx-4 my-4 flex-col">
        <div className="mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center">
          Item
        </div>
        <div className="mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center">
          Price
        </div>
        <div className="mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center">
          Quantity
        </div>
        <div className="mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center">
          sub-total
        </div>
        <div className="mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center">
          Remove
        </div>
      </div>
      {cartItems.map((item, index) => (
        <div className="grid md:grid-cols-5 mx-4 my-4 flex-col">
          <div className="mx-1 my-auto font-sans text-xl font-medium text-black justify-self-center">
            {item.menu_item_id}
          </div>
          <div className="mx-1 my-auto font-sans text-xl font-medium text-black justify-self-center">
            &#x20B9;
            {item.cart_item_total / item.cart_item_quantity}
          </div>
          <div className="mx-1 my-auto justify-self-center input-group w-32">
            <button
              type="button"
              onClick={() => decrementCartItem(cartId, item.cart_item_id)}
              className="input-group-text bg-gray-500"
            >
              -
            </button>
            <div className="form-control text-center">
              {item.cart_item_quantity}
            </div>
            <button
              type="button"
              onClick={() => incrementCartItem(cartId, item.cart_item_id)}
              className="input-group-text bg-gray-500"
            >
              +
            </button>
          </div>
          <div className="mx-1 my-auto font-sans text-xl font-medium text-black justify-self-center">
            &#x20B9; {item.cart_item_total}
          </div>
          <div
            className="mx-1 my-auto justify-self-center"
            onClick={() => removeCartItem(item.cart_item_id)}
          >
            <AiFillDelete size={23} color="red" />
          </div>
        </div>
      ))}

      <div className="grid md:grid-cols-5 mx-4 my-4 flex-col">
        <div className="mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center">
          Total
        </div>
        <div className="mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center"></div>
        <div className="mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center"></div>
        <div className="mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center">
          &#x20B9; {cartDetails.cart_total}
        </div>
        <div className="mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center"></div>
      </div>
      <div className="mx-1 my-auto font-sans text-xl font-medium text-black justify-self-center ">
        {" "}
        <button
          type="button"
          onClick={() => placeOrder()}
          class="inline-block rounded bg-red-500 px-10 pt-1 pb-1 text-sm font-bold uppercase leading-normal text-white"
        >
          Place Order
        </button>{" "}
      </div>
    </div>
  );
};

export default Cart;
