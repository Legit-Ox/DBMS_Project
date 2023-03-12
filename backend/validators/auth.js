const { check } = require("express-validator");
const db = require("../db");
const { compare } = require("bcryptjs");

//user_password
const user_password = check("user_password")
  .isLength({ min: 6, max: 15 })
  .withMessage("Password has to be between 6 and 15 characters.");

//user_email
const user_email = check("user_email")
  .isEmail()
  .withMessage("Please provide a valid user_email.");

//check if user_email exists
const user_emailExists = check("user_email").custom(async (value) => {
  const { rows } = await db.query("SELECT * from users WHERE user_email = $1", [
    value,
  ]);

  if (rows.length) {
    throw new Error("user_email already exists.");
  }
});

//login validation
const loginFieldsCheck = check("user_email").custom(async (value, { req }) => {
  const user = await db.query("SELECT * from users WHERE user_email = $1", [
    value,
  ]);

  if (!user.rows.length) {
    throw new Error("user_email does not exists.");
  }

  const validuser_password = await compare(
    req.body.user_password,
    user.rows[0].user_password
  );

  if (!validuser_password) {
    throw new Error("Wrong Password");
  }

  req.user = user.rows[0];
});

module.exports = {
  registerValidation: [user_email, user_password, user_emailExists],
  loginValidation: [loginFieldsCheck],
};
