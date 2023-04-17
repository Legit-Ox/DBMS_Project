import Navbar2 from "../../components/Navbar2";

import Table from "../../components/Table";
import Menu from "../../components/Menu";
import Cart from "../../components/Cart";
import React, { useEffect, useState } from "react";
import { getSingleRestaurant } from "../../api/restaurant";
import { useLocation } from "react-router-dom";
import Hero from "../../components/Hero";

function SingleRestaurantPage() {
  const location = useLocation();

  const postId = location.pathname.split("/")[2];

  return (
    <>
      <Navbar2 />
      {/* <Homecs /> */}
      <Hero postId={postId} />
      <Menu postId={postId} />
      <Table postId={postId} />
      <Cart postId={postId} />
    </>
  );
}

export default SingleRestaurantPage;
