const Cart = require("../models/Cart");
const CartRow = require("../models/CartRow");
const Product = require("../models/Product");

async function addProductToCart(userId, productId, amount) {
  const [cart] = await Cart.findOrCreate({
    where: {
      userId,
      payed: false,
    },
    defaults: {
      userId,
      payed: false,
    },
  });

  const existingRow = await CartRow.findOne({
    where: {
      cartId: cart.id,
      productId,
    },
  });

  if (existingRow) {
    existingRow.amount += amount;
    await existingRow.save();
    return existingRow;
  }

  return await CartRow.create({
    cartId: cart.id,
    productId,
    amount,
  });
}

async function getCartByUserId(userId) {
  const cart = await Cart.findOne({
    where: {
      userId,
      payed: false,
    },
    include: [
      {
        model: Product,
        attributes: ["id", "title", "price", "imageUrl"],
        through: { attributes: ["amount"] },
      },
    ],
  });

  if (!cart) return [];

  return cart.Products.map((p) => ({
    id: p.id,
    title: p.title,
    price: p.price,
    imageUrl: p.imageUrl,
    amount: p.CartRow.amount,
    totalPrice: p.price * p.CartRow.amount,
  }));
}

module.exports = {
  addProductToCart,
  getCartByUserId,
};