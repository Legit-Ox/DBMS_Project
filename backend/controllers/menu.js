const db = require("../db");

//To create menu
exports.createMenu = async (req, res) => {
  console.log("create a Menu");
  try {
    if (req.user.isowner) {
      const results = await db.query(
        "INSERT INTO menu (menu_title,menu_image,menu_description, rest_id) SELECT $1 ,$2,$3, r.rest_id FROM restaurants r WHERE r.rest_owner_id = $4 LIMIT 1; ",
        [
          req.body.menu_title,
          req.body.menu_image,
          req.body.menu_description,
          req.user.user_id,
        ]
      );
      console.log(results);
      res.status(201).json({
        status: "success",
        data: {
          menu: req.body,
        },
      });
    } else {
      res.status(401).json({
        status: "failed",
        data: {
          message: "You are not authorized to create menu",
        },
      });
    }
  } catch (error) {
    console.log(error.message);
  }

  console.log(req.body);
};
//Function to get menu of the current user
exports.getMenu = async (req, res) => {
  console.log("get a Menu");
  try {
    if (req.user.isowner) {
      const results = await db.query(
        "SELECT m.menu_id, m.menu_title, m.menu_image, m.menu_description FROM menu m WHERE m.rest_id = (SELECT r.rest_id FROM restaurants r WHERE r.rest_owner_id = $1 LIMIT 1) LIMIT 1; ",
        [req.user.user_id]
      );
      console.log(results);
      res.status(201).json({
        status: "success",
        data: {
          menu: results.rows[0],
        },
      });
    } else {
      res.status(401).json({
        status: "failed",
        data: {
          message: "You are not authorized to get menu",
        },
      });
    }
  } catch (error) {
    console.log(error.message);
  }

  console.log(req.body);
};

exports.createMenuItem = async (req, res) => {
  console.log("create a Menu Item");
  try {
    if (req.user.isowner) {
      const results = await db.query(
        "INSERT INTO menu_item (menu_item_name,menu_item_image,menu_item_description,menu_item_category,menu_item_quantity,menu_id) SELECT $1 ,$2,$3,$4,$5, m.menu_id FROM menu m WHERE m.rest_id = (SELECT r.rest_id FROM restaurants r WHERE r.rest_owner_id = $6 LIMIT 1) LIMIT 1; ",
        [
          req.body.menu_item_name,
          req.body.menu_item_image,
          req.body.menu_item_description,
          req.body.menu_item_category,
          req.body.menu_item_quantity,
          req.user.user_id,
        ]
      );
      console.log(results);
      res.status(201).json({
        status: "success",
        data: {
          menu_item: req.body,
        },
      });
    } else {
      res.status(401).json({
        status: "failed",
        data: {
          message: "You are not authorized to create menu item",
        },
      });
    }
  } catch (error) {
    console.log(error.message);
  }

  console.log(req.body);
};
//Create a function similar to getMenu to get all records from menu_item table
//Function to get menu of the current user
exports.getMenuItem = async (req, res) => {
  //cfunction similar to getMenu to get all records from menu_item table
  console.log("get a Menu Item");
  try {
    const results = await db.query(
      "SELECT mi.menu_item_id, mi.menu_item_name, mi.menu_item_image, mi.menu_item_description, mi.menu_item_category, mi.menu_item_quantity FROM menu_item mi WHERE mi.menu_id = (SELECT m.menu_id FROM menu m WHERE m.rest_id = (SELECT r.rest_id FROM restaurants r WHERE r.rest_owner_id = $1 LIMIT 1) LIMIT 1) LIMIT 1; ",
      [req.user.user_id]
    );
    res.status(201).json({
      status: "success",
      data: {
        menu: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
