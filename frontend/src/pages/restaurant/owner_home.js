import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";
import { MdTableRestaurant } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { MdCreate } from "react-icons/md";
import { FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const OwnerHome = () => {
  const menus = [
    { name: "Dashboard", link: "/ownerHome", icon: MdOutlineDashboard },
    { name: "Menu", link: "/menu", icon: MdRestaurantMenu },
    { name: "Orders", link: "/orders", icon: FiShoppingCart },
    { name: "Table", link: "/table", icon: MdTableRestaurant, margin: true },
    { name: "Create", link: "/customer", icon: MdCreate },
    { name: "Logout", link: "/", icon: MdLogout },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 w-full">
        <div className="m-3 w-full text-black text font-semibold flex-col justify-start grid md:grid-cols-2">
          <div className="justify-start my-2 text-4xl">Plate Tracker</div>
          <div className="flex justify-end rounded my-2">
            <input
              type="text"
              className="block w-[400px] h-[35px] px-4 py-2 text-[#0c0c0c] bg-white border rounded-md"
              placeholder="Search..."
            />
            <button className="px-4 h-[35px] text-white bg-gray-800 border-l rounded mx-1">
              Search
            </button>
          </div>
        </div>
        <div className="w-full bg-white py-8 px-4">
          <div className="flex-col justify-start my-auto">
            <h1 className="text-[#303030] text-4xl mx-1">Order Status:</h1>
          </div>
          <div className="grid md:grid-cols-2 mx-4 my-4 flex-col">
            <div className="mx-2 my-auto font-sans text-2xl font-semibold text-[#474554] justify-self-end">
              Total Orders:
            </div>
            <div className="mx-2 my-auto">
              <button
                type="button"
                class="pointer-events-none  rounded inline-block bg-slate-400 px-10 pt-1 pb-1 text-base w-56 font-normal uppercase leading-normal text-white"
              >
                30
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 mx-4 my-4 flex-col">
            <div className="mx-2 my-auto font-sans text-2xl font-semibold text-[#474554] justify-self-end">
              Order Pending:
            </div>
            <div className="mx-2 my-auto">
              <button
                type="button"
                class="pointer-events-none  rounded inline-block bg-slate-400 px-10 pt-1 pb-1 text-base w-56 font-normal uppercase leading-normal text-white"
              >
                10
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 mx-4 my-4 flex-col">
            <div className="mx-2 my-auto font-sans text-2xl font-semibold text-[#474554] justify-self-end">
              Order in Process:
            </div>
            <div className="mx-2 my-auto">
              <button
                type="button"
                class="pointer-events-none  rounded inline-block bg-slate-400 px-10 pt-1 pb-1 text-base w-56 font-normal uppercase leading-normal text-white"
              >
                10
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 mx-4 my-4 flex-col">
            <div className="mx-2 my-auto font-sans text-2xl font-semibold text-[#474554] justify-self-end">
              Order Completed:
            </div>
            <div className="mx-2 my-auto">
              <button
                type="button"
                class="pointer-events-none  rounded inline-block bg-slate-400 px-10 pt-1 pb-1 text-base w-56 font-normal uppercase leading-normal text-white"
              >
                10
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-white py-4 px-4">
          <div className="flex-col justify-start my-auto">
            <h1 className="text-[#303030] text-4xl mx-1">Revenue Status:</h1>
          </div>
          <div className="grid md:grid-cols-2 mx-4 my-4 flex-col">
            <div className="mx-2 my-auto font-sans text-2xl font-semibold text-[#474554] justify-self-end">
              Total Revenue:
            </div>
            <div className="mx-2 my-auto">
              <button
                type="button"
                class="pointer-events-none  rounded inline-block bg-slate-400 px-10 pt-1 pb-1 text-base w-56 font-normal uppercase leading-normal text-white"
              >
                &#8377; 8500
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 mx-4 my-4 flex-col">
            <div className="mx-2 my-auto font-sans text-2xl font-semibold text-[#474554] justify-self-end">
              No. Of Items Sell:
            </div>
            <div className="mx-2 my-auto">
              <button
                type="button"
                class="pointer-events-none  rounded inline-block bg-slate-400 px-10 pt-1 pb-1 text-base w-56 font-normal uppercase leading-normal text-white"
              >
                30
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 mx-4 my-4 flex-col">
            <div className="mx-2 my-auto font-sans text-2xl font-semibold text-[#474554] justify-self-end">
              No. of Items Remaining:
            </div>
            <div className="mx-2 my-auto">
              <button
                type="button"
                class="pointer-events-none  rounded inline-block bg-slate-400 px-10 pt-1 pb-1 text-base w-56 font-normal uppercase leading-normal text-white"
              >
                120
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-white py-4 px-4">
          <div className="flex-col justify-start my-auto">
            <h1 className="text-[#303030] text-4xl mx-1">Customer Status:</h1>
          </div>
          <div className="grid md:grid-cols-2 mx-4 my-4 flex-col">
            <div className="mx-2 my-auto font-sans text-2xl font-semibold text-[#474554] justify-self-end">
              Total Customer Visited:
            </div>
            <div className="mx-2 my-auto">
              <button
                type="button"
                class="pointer-events-none  rounded inline-block bg-slate-400 px-10 pt-1 pb-1 text-base w-56 font-normal uppercase leading-normal text-white"
              >
                50
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 mx-4 my-4 flex-col">
            <div className="mx-2 my-auto font-sans text-2xl font-semibold text-[#474554] justify-self-end">
              Total Customer Order food:
            </div>
            <div className="mx-2 my-auto">
              <button
                type="button"
                class="pointer-events-none  rounded inline-block bg-slate-400 px-10 pt-1 pb-1 text-base w-56 font-normal uppercase leading-normal text-white"
              >
                20
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 mx-4 my-4 flex-col">
            <div className="mx-2 my-auto font-sans text-2xl font-semibold text-[#474554] justify-self-end">
              No. of Customer Waiting:
            </div>
            <div className="mx-2 my-auto">
              <button
                type="button"
                class="pointer-events-none  rounded inline-block bg-slate-400 px-10 pt-1 pb-1 text-base w-56 font-normal uppercase leading-normal text-white"
              >
                5
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerHome;
