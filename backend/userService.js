const User = require("../models/User");
const { getCartByUserId } = require("./cartService");

async function getAllUsers() {
  return await User.findAll();
}

async function createUser(data) {
  return await User.create(data);
}

async function updateUser(id, data) {
  const user = await User.findByPk(id);
  if (!user) return null;
  await user.update(data);
  return user;
}

async function deleteUser(id) {
  const user = await User.findByPk(id);
  if (!user) return null;
  await user.destroy();
  return true;
}

async function getUserCart(id) {
  return await getCartByUserId(id);
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserCart,
};
