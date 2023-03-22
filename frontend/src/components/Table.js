import React, { useEffect, useState } from "react";
import {
  getAvailableTablesAPI,
  getTotalTablesAPI,
  getOccupiedTablesAPI,
  getReservedTablesAPI,
} from "../api/restaurant";

const Table = (props) => {
  const [totalTables, setTotalTables] = useState();
  const getTotalTables = async () => {
    try {
      const totalTables = await getTotalTablesAPI(props.postId);
      // console.log(totalTables.data.table.count);
      setTotalTables(totalTables.data.table.count);
      // setTotalTables(data.data.menu);
    } catch (error) {
      console.log(error.message);
    }
  };

  const [availableTables, setAvailableTables] = useState();
  const getAvailableTables = async () => {
    try {
      const availableTables = await getAvailableTablesAPI(props.postId);
      // console.log(availableTables);
      setAvailableTables(availableTables.data.table.count);
    } catch (error) {
      console.log(error.message);
    }
  };
  const [occupiedTables, setOccupiedTables] = useState();
  const getOccupiedTables = async () => {
    try {
      const occupiedTables = await getOccupiedTablesAPI(props.postId);
      // console.log(occupiedTables);
      setOccupiedTables(occupiedTables.data.table.count);
    } catch (error) {
      console.log(error.message);
    }
  };
  const [reservedTables, setReservedTables] = useState();
  const getReservedTables = async () => {
    try {
      const reservedTables = await getReservedTablesAPI(props.postId);
      // console.log(reservedTables);
      setReservedTables(reservedTables.data.table.count);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getTotalTables();
    getAvailableTables();
    getOccupiedTables();
    getReservedTables();
  }, []);

  return (
    <div className="w-full bg-gray-100 py-8 px-4" id="table">
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
            {totalTables}
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
            {availableTables}
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
            {occupiedTables}
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 mx-4 my-4 flex-col">
        <div className="mx-2 my-auto font-sans text-2xl font-semibold text-[#474554] justify-self-end">
          No. of Tables Reserved :
        </div>
        <div className="mx-2 my-auto">
          <button
            type="button"
            class="pointer-events-none  rounded inline-block bg-slate-400 px-10 pt-1 pb-1 text-base w-56 font-normal uppercase leading-normal text-white"
          >
            {reservedTables}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
