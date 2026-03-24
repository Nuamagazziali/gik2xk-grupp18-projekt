const { Product, Rating } = require("../models/index");

async function getAllProducts() {
  return await Product.findAll({
    include: [{ model: Rating }],
  });
}

async function getProductById(id) {
  return await Product.findByPk(id, {
    include: [{ model: Rating }],
  });
}

async function createProduct(data) {
  return await Product.create(data);
}

async function updateProduct(id, data) {
  const product = await Product.findByPk(id);
  if (!product) return null;
  await product.update(data);
  return product;
}

async function deleteProduct(id) {
  const product = await Product.findByPk(id);
  if (!product) return null;
  await product.destroy();
  return true;
}

async function addRating(productId, ratingValue) {
  const product = await Product.findByPk(productId);
  if (!product) return null;
  return await Rating.create({
    rating: ratingValue,
    productId,
  });
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  addRating,
};