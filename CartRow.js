const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const CartRow = sequelize.define("CartRow", {
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
});

module.exports = CartRow;