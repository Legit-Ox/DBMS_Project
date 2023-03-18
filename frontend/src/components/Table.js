import React from "react";

const Table = () => {
  return (
    <div className="w-full bg-gray-100 py-8 px-4">
      <div className="flex-col justify-start mx-2 my-auto">
        <h1 className="text-[#303030] text-6xl mx-3">Table</h1>
      </div>
      <div className="grid md:grid-cols-2 mx-4 my-4 flex-col">
        <div className="mx-2 my-auto font-sans text-2xl font-semibold text-[#474554] justify-self-end">
          Total No. of Tables:
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
          No. of Available Tables :
        </div>
        <div className="mx-2 my-auto">
          <button
            type="button"
            class="pointer-events-none  rounded inline-block bg-slate-400 px-10 pt-1 pb-1 text-base w-56 font-normal uppercase leading-normal text-white"
          >
            12
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 mx-4 my-4 flex-col">
        <div className="mx-2 my-auto font-sans text-2xl font-semibold text-[#474554] justify-self-end">
          No. of Tables Occupied :
        </div>
        <div className="mx-2 my-auto">
          <button
            type="button"
            class="pointer-events-none  rounded inline-block bg-slate-400 px-10 pt-1 pb-1 text-base w-56 font-normal uppercase leading-normal text-white"
          >
            18
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
