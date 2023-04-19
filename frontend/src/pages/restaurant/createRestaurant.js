import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateRestaurant = () => {
  const [formData, setFormData] = useState({
    rest_name: "",
    rest_veg: "",
    rest_city: "",
    rest_area: "",
    rest_type: "",
    rest_rating: "",
    rest_image: "",
    rest_description: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send POST request with formData to backend API using Axios
    axios
      .post("http://localhost:3006/api/v1/restaurants", formData)
      .then((response) => {
        console.log("Restaurant created successfully!", response.data);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Failed to create restaurant", error);
      });
  };

  return (
    <div className="m-10 flex justify-center items-center h-screen overflow-y-scroll">
      <div className="w-96 max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 mt-5">Create restaurant</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            Restaurant Name:
            <input
              className="w-full mt-1 p-2 border rounded-md"
              type="text"
              name="rest_name"
              value={formData.rest_name}
              onChange={handleChange}
            />
          </label>
          {/* Repeat for other form fields */}
          <label className="block mb-4">
            Restaurant Veg:
            <input
              className="w-full mt-1 p-2 border rounded-md"
              type="text"
              name="rest_veg"
              value={formData.rest_veg}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-4">
            Restaurant City:
            <input
              className="w-full mt-1 p-2 border rounded-md"
              type="text"
              name="rest_city"
              value={formData.rest_city}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-4">
            Restaurant Area:
            <input
              className="w-full mt-1 p-2 border rounded-md"
              type="text"
              name="rest_area"
              value={formData.rest_area}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-4">
            Restaurant Type:
            <input
              className="w-full mt-1 p-2 border rounded-md"
              type="text"
              name="rest_type"
              value={formData.rest_type}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-4">
            Restaurant Rating:
            <input
              className="w-full mt-1 p-2 border rounded-md"
              type="text"
              name="rest_rating"
              value={formData.rest_rating}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-4">
            Restaurant Image:
            <input
              className="w-full mt-1 p-2 border rounded-md"
              type="text"
              name="rest_image"
              value={formData.rest_image}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-4">
            Restaurant Description:
            <input
              className="w-full mt-1 p-2 border rounded-md"
              type="text"
              name="rest_description"
              value={formData.rest_description}
              onChange={handleChange}
            />
          </label>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRestaurant;
