//Copilot write the initial code for pool
const { Pool } = require("pg");
const pool = new Pool({
  user: "my_user",
  host: "dpg-cgsg04hjvhtrd24rfsq0-a.oregon-postgres.render.com",
  database: "my_database_6vqv",
  password: "fDouQqIN3D5gILrmMyw8UrNcFmeRQJ0p",
  port: 5432,
  ssl: true,
});
module.exports = {
  query: (text, params) => pool.query(text, params),
};
