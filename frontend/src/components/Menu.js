import React, { useState } from "react";

const Menu = () => {

  const [quantity,setQuantity] = useState(1);

  const handleDecrement = () =>{
    if(quantity > 1){
      setQuantity(prevCount => prevCount - 1);
    }
  }

  const handleIncrement = () =>{
    if(quantity<20){
      setQuantity(prevCount => prevCount + 1);
    }
  }


  return (
    <div className="w-full bg-gray-100 py-8 px-4">
      <div className="flex-col justify-start mx-2 my-auto grid md:grid-cols-2">
        <h1 className="text-[#303030] text-6xl mx-3">MENU</h1>
        <div className="flex justify-end rounded my-2">
          <input
            type="text"
            className="block w-[400px] px-4 py-2 text-[#474554] bg-white border rounded-md"
            placeholder="Search..."
          />
          <button className="px-4 text-white bg-gray-800 border-l rounded mx-1">
            Search
          </button>
        </div>
      </div>
      <div className="mx-2 my-3 grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-4 col-span-9 grid grid-rows-3 grid-flow-col gap-4">
          <div className="mx-2 my-2 row-span-4 col-span-6">
            <div className="font-sans text-2xl font-semibold text-[#474554] mx-1 my-1">
              <button
                type="button"
                class="pointer-events-none inline-block rounded-full bg-success mx-2 px-1 pt-1 pb-1 text-sm font-normal uppercase leading-normal text-white"
              >
                Veg
              </button>
              Margherita
            </div>
            <div className="flex mx-1 my-2 justify-end">
              <button
                type="button"
                class="pointer-events-none inline-block rounded-full bg-slate-400 px-10 pt-1 pb-1 text-sm font-normal uppercase leading-normal text-white"
              >
                Main Course
              </button>
            </div>
            <div className="mx-1 my-1 flex">
              <p className=" w-[400px] truncate">It is a very cheesy Pizza.</p>
            </div>
          </div>
          <div className="mx-3 my-3 row-span-4 col-span-4 justify-self-center">
            <div className="mx-1 my-1 font-sans text-lg font-bold ">
              &#x20B9; 200
            </div>
            <div className="mx-1 my-1 input-group">
              <button type="button" onClick={handleDecrement} className="input-group-text bg-gray-500">-</button>
              <div className="form-control text-center">
                {quantity}
              </div>
              <button type="button" onClick={handleIncrement} className="input-group-text bg-gray-500">+</button>
            </div>
            <div className="mx-1 my-2">
            <button
                type="button"
                class="pointer-events-none inline-block rounded bg-red-500 px-10 pt-1 pb-1 text-sm font-bold uppercase leading-normal text-white"
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-4 object-cover justify-self-center">
          <img
            className="w-[130px] h-[130px] inline-block rounded-xl object-center"
            src="/pizza.jpg"
            alt="/restaurant"
          />
        </div>
      </div>
    </div>
    
  );
};

export default Menu;
