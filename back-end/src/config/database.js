const Sequelize = require("sequelize");

const connection = new Sequelize("bd_desafio_logique", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
