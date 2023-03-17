const db = require("../db");

exports.createRestaurant = async (req, res) => {
  console.log("create a Restaurant");
  try {
    const results = await db.query(
      "INSERT INTO restaurants (rest_name,rest_veg,rest_area,rest_city,rest_type,rest_rating,rest_image,rest_description,rest_owner_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8,$9) returning *",
      [
        req.body.rest_name,
        req.body.rest_veg,
        req.body.rest_area,
        req.body.rest_city,
        req.body.rest_type,
        req.body.rest_rating,
        req.body.rest_image,
        req.body.rest_description,
        req.user.user_id,
      ]
    );
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        restaurant: results.rows,
      },
    });
  } catch (error) {
    console.log(error.message);
  }

  console.log(req.body);
};

//write a function getDetails to get all the details of the restaurant
exports.getDetails = async (req, res) => {
  try {
    const results = await db.query(
      "SELECT * FROM restaurants WHERE rest_owner_id = $1",
      [req.user.user_id]
    );
    res.status(200).json({
      status: "success",
      data: {
        restaurants: results.rows,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
//create a function to update restaurants

// Update Restaurants
exports.updateRestaurant = async (req, res) => {
  console.log("update a Restaurant");
  try {
    //cmon copilot
    const results = await db.query(
      "UPDATE restaurants SET rest_name=$1,rest_veg=$2,rest_area=$3,rest_city=$9,rest_type=$4,rest_rating=$5,rest_image=$6,rest_description=$7 WHERE rest_owner_id=$8 returning *",

      [
        req.body.rest_name,
        req.body.rest_veg,
        req.body.rest_area,
        req.body.rest_type,
        req.body.rest_rating,
        req.body.rest_image,
        req.body.rest_description,
        req.user.user_id,
        req.body.rest_city,
      ]
    );
    console.log(results);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
//Create a function getAllRestaurants to get an array of restaurants stored in the table
exports.getAllRestaurants = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM restaurants");
    res.status(200).json({
      status: "success",
      data: {
        restaurants: results.rows,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
//Write a function which gets the restaurant details based on params.id
exports.getRestaurant = async (req, res) => {
  try {
    const results = await db.query(
      "SELECT * FROM restaurants WHERE rest_id = $1",
      [req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
