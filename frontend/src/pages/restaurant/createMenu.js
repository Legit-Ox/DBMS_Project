import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateMenu = () => {
  const [formData, setFormData] = useState({
    menu_title: "",
    menu_image: "",
    menu_description: "",
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
      .post("http://localhost:3006/api/v1/createMenu", formData)
      .then((response) => {
        console.log("Menu item created successfully!", response.data);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Failed to create menu item", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Create Menu</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            Menu Title:
            <input
              className="w-full mt-1 p-2 border rounded-md"
              type="text"
              name="menu_title"
              value={formData.menu_title}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-4">
            Menu Image URL:
            <input
              className="w-full mt-1 p-2 border rounded-md"
              type="text"
              name="menu_image"
              value={formData.menu_image}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-4">
            Menu Description:
            <input
              className="w-full mt-1 p-2 border rounded-md"
              type="text"
              name="menu_description"
              value={formData.menu_description}
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

export default CreateMenu;
