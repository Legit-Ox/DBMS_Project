require("dotenv").config();
const express = require("express");
const db = require("./db");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

//Get all restaurants

app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("SELECT * from restaurants");
    console.log("get all Restaurants");
    console.log(results);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch {
    console.log("error");
  }
});
//Get a restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
  console.log("get a Restaurant");
  //   console.log(req);
  try {
    const results = await db.query(
      "SELECT * from restaurants where rest_id=$1",
      [req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});
//Create a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
  console.log("create a Restaurant");
  try {
    //cmon copilot
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
  } catch (error) {}

  console.log(req.body);
});
// Update Restaurants
app.put("/api/v1/restaurants/:id", async (req, res) => {
  console.log("update a Restaurant");
  console.log(req.params.id);
  console.log(req.body);
  try {
    //cmon copilot
    const results = await db.query(
      "UPDATE restaurants SET rest_name=$1,rest_veg=$2,rest_location=$3,rest_type=$4,rest_rating=$5,rest_image=$6,rest_description=$7 WHERE rest_id=$8 returning *",

      [
        req.body.rest_name,
        req.body.rest_veg,
        req.body.rest_location,
        req.body.rest_type,
        req.body.rest_rating,
        req.body.rest_image,
        req.body.rest_description,
        req.params.id,
      ]
    );
    console.log(results);
    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows,
      },
    });
  } catch (error) {}
});
// Delete Restaurants
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  console.log("delete a Restaurant");

  console.log(req.body);
  try {
    //cmon copilot
    const results = await db.query("DELETE FROM restaurants WHERE rest_id=$1", [
      req.params.id,
    ]);
    console.log(results);
    res.status(204).json({
      status: "success",
    });
  } catch (error) {}
});

app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
