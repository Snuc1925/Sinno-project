require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(  process.env.DB_NAME, // Tên database
    process.env.DB_USER, // Tên user
    process.env.DB_PASSWORD, // Mật khẩu, 
    {
  host: "localhost",
  dialect: "postgres", // Sử dụng PostgreSQL
});

module.exports = sequelize;
