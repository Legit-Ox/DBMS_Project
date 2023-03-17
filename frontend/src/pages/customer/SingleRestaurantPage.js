import Navbar2 from '../../components/Navbar2'
import Homecs from '../../components/Homecs'
import Table from '../../components/Table'
import Menu from '../../components/Menu'
import Cart from '../../components/Cart'
import React, { useEffect, useState } from "react";
import { getSingleRestaurant } from "../../api/restaurant";
import { useLocation } from "react-router-dom";
import Hero from "../../components/Hero";

function SingleRestaurantPage() {
  const [restaurant, setRestaurantArray] = useState([]);
  const location = useLocation();

  const postId = location.pathname.split("/")[2];
  const restaurantInfo = async () => {
    try {
      const { data } = await getSingleRestaurant(postId);

      setRestaurantArray(data.data.restaurant);
      console.log(data.data.restaurant);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    restaurantInfo();
  }, []);
  console.log("hello");
  return (
    <>
      <Navbar2 />
      <Homecs />
      {/* <Hero
        rest_name={restaurant.rest_name}
        rest_image={restaurant.rest_image}
        rest_description={restaurant.rest_description}
        rest_veg={restaurant.rest_veg}
        rest_type={restaurant.rest_type}
        rest_city={restaurant.rest_city}
        rest_area={restaurant.rest_area}
        rest_rating={restaurant.rest_rating}
      /> */}
      <Menu />
      <Table />
      <Cart />
    </>
  );
}

export default SingleRestaurantPage;
