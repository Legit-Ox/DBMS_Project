const db = require("../db");
const { hash } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { SECRET } = require("../constants");

exports.getUsers = async (req, res) => {
  try {
    const { rows } = await db.query("select user_id, user_email from users");

    return res.status(200).json({
      success: true,
      users: rows,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.register = async (req, res) => {
  const { user_email, user_password, isOwner } = req.body;
  try {
    const hashed_user_password = await hash(user_password, 10);

    await db.query(
      "insert into users(user_email,user_password,isowner) values ($1,$2,$3)",
      [user_email, hashed_user_password, isOwner]
    );

    return res.status(201).json({
      success: true,
      message: "The registraion was succefull",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  let user = req.user;
  let isOwner = req.user.isowner;
  let payload = {
    id: user.user_id,
    user_email: user.user_email,
    user_isOwner: user.isowner,
  };

  try {
    const token = sign(payload, SECRET);

    return res.status(200).cookie("token", token, { httpOnly: true }).json({
      success: true,
      message: "Logged in succefully",
      isOwner: { isOwner },
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.protected = async (req, res) => {
  try {
    //fetch current user data copilot
    const { rows } = await db.query(
      "select user_email,isowner from users where user_id = $1",
      [req.user.user_id]
    );
    //return it also along with protected info
    return res.status(200).json({
      info: "protected info",
      xyz: "nice",

      user: rows[0].user_email,
      isowner: rows[0].isowner,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.logout = async (req, res) => {
  try {
    return res.status(200).clearCookie("token", { httpOnly: true }).json({
      success: true,
      message: "Logged out succefully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};
