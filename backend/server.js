require("dotenv").config();
const express = require("express");
const db = require("./db");
const morgan = require("morgan");
const app = express();
const cookieParser = require("cookie-parser");
const passport = require("passport");
require("./middlewares/passport-middleware");

const cors = require("cors");
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(passport.initialize());
const authRoutes = require("./routes/auth");
const restaurantRoutes = require("./routes/restaurant");
const menuRoutes = require("./routes/menu");
const orderRoutes = require("./routes/orders");
const tableRoutes = require("./routes/table");
const cartRoutes = require("./routes/cart");
app.use("/api/v1", authRoutes);
app.use("/api/v1", restaurantRoutes);
app.use("/api/v1", menuRoutes);
app.use("/api/v1", orderRoutes);
app.use("/api/v1", tableRoutes);
app.use("/api/v1", cartRoutes);

// //Get a restaurant
// app.get("/api/v1/restaurants/:id", async (req, res) => {
//   console.log("get a Restaurant");
//   //   console.log(req);
//   try {
//     const results = await db.query(
//       "SELECT * from restaurants where rest_id=$1",
//       [req.params.id]
//     );
//     res.status(200).json({
//       status: "success",
//       data: {
//         restaurant: results.rows,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });
// // Update Restaurants
// app.put("/api/v1/restaurants/:id", async (req, res) => {
//   console.log("update a Restaurant");
//   console.log(req.params.id);
//   console.log(req.body);
//   try {
//     //cmon copilot
//     const results = await db.query(
//       "UPDATE restaurants SET rest_name=$1,rest_veg=$2,rest_location=$3,rest_type=$4,rest_rating=$5,rest_image=$6,rest_description=$7 WHERE rest_id=$8 returning *",

//       [
//         req.body.rest_name,
//         req.body.rest_veg,
//         req.body.rest_location,
//         req.body.rest_type,
//         req.body.rest_rating,
//         req.body.rest_image,
//         req.body.rest_description,
//         req.params.id,
//       ]
//     );
//     console.log(results);
//     res.status(200).json({
//       status: "success",
//       data: {
//         restaurant: results.rows,
//       },
//     });
//   } catch (error) {}
// });
// // Delete Restaurants
// app.delete("/api/v1/restaurants/:id", async (req, res) => {
//   console.log("delete a Restaurant");

//   console.log(req.body);
//   try {
//     //cmon copilot
//     const results = await db.query("DELETE FROM restaurants WHERE rest_id=$1", [
//       req.params.id,
//     ]);
//     console.log(results);
//     res.status(204).json({
//       status: "success",
//     });
//   } catch (error) {}
// });

app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
