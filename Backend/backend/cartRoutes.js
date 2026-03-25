const express = require("express");
const router = express.Router();
const cartService = require("../services/cartService");

// Lägga till produkt i varukorg
router.post("/addProduct", async (req, res) => {
  const { userId, productId, amount } = req.body;

  if (!userId || !productId || !amount) {
    return res
      .status(400)
      .json({ message: "userId, productId och amount krävs." });
  }

  const result = await cartService.addProductToCart(userId, productId, amount);
  res.status(201).json(result);
});

module.exports = router;
