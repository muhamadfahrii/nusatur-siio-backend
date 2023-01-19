const { create } = require("domain");
const { createPool } = require("mysql2/promise");

const mysql = createPool({
  host: "localhost",
  user: "root",
  password: "pariraps",
  database: "Nusatur",
});

const query = async (query) => {
  try {
    const [execute] = await mysql.query(query);
    return execute;
  } catch (error) {
    // for check if something wrong
    // with the connection
    console.log(error);
  }
};

module.exports = { query };
