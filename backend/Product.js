const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Product = sequelize.define("Product", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  releaseYear: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});


module.exports = Product;
