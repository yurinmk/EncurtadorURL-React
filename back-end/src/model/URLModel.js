const Sequelize = require("sequelize");
const connection = require("../config/database");

const URL = connection.define("tbl_generated_urls", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  id_user: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  id_url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  shortened_url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  original_url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = URL;
