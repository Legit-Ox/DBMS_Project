const db = require("../db");

exports.createRestaurant = async (req, res) => {
  console.log("create a Restaurant");
  try {
    const results = await db.query(
      "INSERT INTO restaurants (rest_name,rest_veg,rest_location,rest_type,rest_rating,rest_image,rest_description) VALUES ($1, $2, $3, $4, $5, $6, $7) returning *",
      [
        req.body.rest_name,
        req.body.rest_veg,
        req.body.rest_location,
        req.body.rest_type,
        req.body.rest_rating,
        req.body.rest_image,
        req.body.rest_description,
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
