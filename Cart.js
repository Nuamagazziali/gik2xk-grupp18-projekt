const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Cart = sequelize.define("Cart", {
  payed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});

module.exports = Cart;