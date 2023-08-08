import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  database: "tiregram_data",
  connectionLimit: 5,
});

const connect = await pool.getConnection();
console.log("Connection Success .....");

export default connect;
