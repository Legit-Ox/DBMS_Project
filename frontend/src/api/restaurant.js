import axios from "axios";
axios.defaults.withCredentials = true;
export async function getAllRestaurants() {
  return await axios.get("http://localhost:3006/api/v1/getAllRestaurants");
}
