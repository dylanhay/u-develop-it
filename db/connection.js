const mysql = require("mysql2");

const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "vancity#1",
      database: "election",
    }
  );

  module.exports = db;