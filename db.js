const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "root",
  port: 5432,
  database: "leaflet"
});

module.exports = pool;
