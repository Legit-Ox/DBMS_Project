import axios from "axios";
axios.defaults.withCredentials = true;
export async function getAllRestaurants() {
  return await axios.get("http://localhost:3006/api/v1/getAllRestaurants");
}
export async function getSingleRestaurant(id) {
  return await axios.get(`http://localhost:3006/api/v1/restaurant/${id}`);
}
export async function getMenuDetails(id) {
  return await axios.get(`http://localhost:3006/api/v1/getMenu/${id}`);
}
export async function getMenuItems(id) {
  return await axios.get(`http://localhost:3006/api/v1/getMenuItems/${id}`);
}
export async function getTotalTablesAPI(id) {
  return await axios.get(`http://localhost:3006/api/v1/getTotalTables/${id}`);
}
export async function getAvailableTablesAPI(id) {
  return await axios.get(
    `http://localhost:3006/api/v1/getAvailableTables/${id}`
  );
}
export async function getOccupiedTablesAPI(id) {
  return await axios.get(
    `http://localhost:3006/api/v1/getOccupiedTables/${id}`
  );
}
export async function getReservedTablesAPI(id) {
  return await axios.get(
    `http://localhost:3006/api/v1/getReservedTables/${id}`
  );
}
export async function createCart() {
  return await axios.post(`http://localhost:3006/api/v1/getCart`);
}

export async function addCartItemFrontend(cartId, menuItemId) {
  return await axios.post(
    `http://localhost:3006/api/v1/addCartItem?cartId=${cartId}&menuItemId=${menuItemId}`
  );
}
