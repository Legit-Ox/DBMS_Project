import React from "react";

const Menu = () => {
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
      <div className="bg-white mx-2 my-3 grid grid-rows-3 grid-flow-col gap-4">
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
            <div className="mx-1 my-1">
              <p className="inline-block  line-clamp-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum deleniti laborum vitae rerum! Eos nostrum repellat ipsam earum quae eligendi!</p>
            </div>
          </div>
          <div className="mx-3 my-3 row-span-4 col-span-4 bg-yellow-200">
            hello 
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
