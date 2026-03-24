const express = require("express");
const router = express.Router();
const userService = require("../services/userService");

// Hämta alla användare
router.get("/", async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
});

// Skapa användare
router.post("/", async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
});

// Uppdatera användare
router.put("/:id", async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body);
  if (!user) {
    return res.status(404).json({ message: "Användaren hittades inte." });
  }
  res.json(user);
});

// Ta bort användare
router.delete("/:id", async (req, res) => {
  const deleted = await userService.deleteUser(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: "Användaren hittades inte." });
  }
  res.json({ message: "Användaren togs bort." });
});

// Hämta varukorg för användare
router.get("/:id/getCart", async (req, res) => {
  const cart = await userService.getUserCart(req.params.id);
  res.json(cart);
});

module.exports = router;