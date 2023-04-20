import React, { useState } from "react";

function Order() {
  return (
    <div className="w-full bg-gray-100 py-8 px-4" id="cart">
      <div className="flex-col justify-start mx-2 my-auto">
        <h1 className="text-[#303030] text-6xl mx-3">Order</h1>
      </div>
      <div className="grid md:grid-cols-5 mx-4 my-4 flex-col">
        <div className="mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center">
          Order ID
        </div>
        <div className="mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center">
          Status
        </div>
        <div className="mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center">
          Total Amount
        </div>
        <div className="mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center">
          Quantity
        </div>
        <div className="mx-1 my-auto font-sans text-2xl uppercase font-semibold text-[#474554] justify-self-center">
          Remove
        </div>
      </div>
      <div className="grid md:grid-cols-5 mx-4 my-4 flex-col">
        <div className="mx-1 my-auto font-sans text-xl font-medium text-black justify-self-center">
          #101214
        </div>
        <div className="mx-1 my-auto font-sans text-xl font-medium text-black justify-self-center">
          Pending
        </div>

        <div className="mx-1 my-auto font-sans text-xl font-medium text-black justify-self-center">
          &#x20B9; 400
        </div>
        <div className="mx-1 my-auto font-sans text-xl font-medium text-black justify-self-center">
          {" "}
          5{" "}
        </div>
        <div className="mx-1 my-auto font-sans text-xl font-medium text-black justify-self-center">
          {" "}
          <button
            type="button"
            // onClick={addCartItemFunction(cartId, item.menu_item_id)}
            class="inline-block rounded bg-red-500 px-10 pt-1 pb-1 text-sm font-bold uppercase leading-normal text-white"
          >
            Cancel Order
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Order;
