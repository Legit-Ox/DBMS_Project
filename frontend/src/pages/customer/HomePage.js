import React from "react";
import { getAllRestaurants } from "../../api/restaurant";
import Nav from "../../components/NavBar";
import { useState, useEffect } from "react";

function HomePage() {
  const [restArray, setRestaurantArray] = useState([]);

  const restaurantInfo = async () => {
    try {
      const { data } = await getAllRestaurants({});

      setRestaurantArray(data.data.restaurants);
      console.log(restArray);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    restaurantInfo();
  }, []);
  console.log("hello");

  return (
    <div className="">
      {/* <Nav /> */}

      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {restArray.map((item, index) => (
          <div key={index} className="rounded overflow-hidden shadow-lg">
            <img
              className="h-[370px] w-[500px] object-fill"
              src={item.rest_image}
              alt="Mountain"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.rest_name}</div>
              <p className="text-gray-700 text-base">{item.rest_description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {item.rest_area}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {item.rest_veg}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {item.rest_type}
              </span>
            </div>
          </div>
        ))}

        <div className="rounded overflow-hidden shadow-lg">
          <img
            className="h-[370px] w-[500px] object-fill"
            src="/rest3.jpg"
            alt="River"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">River</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #summer
            </span>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <img
            className="h-[370px] w-[500px] object-fill"
            src="/rest4.jpg"
            alt="Forest"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Forest</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1  font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #fall
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
