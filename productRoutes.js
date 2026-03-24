const express = require("express");
const router = express.Router();
const productService = require("../services/productService");

// Hämta alla produkter
router.get("/", async (req, res) => {
  const products = await productService.getAllProducts();
  res.json(products);
});

// Hämta en produkt med betyg
router.get("/:id", async (req, res) => {
  const product = await productService.getProductById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Filmen hittades inte." });
  }
  res.json(product);
});

// Skapa ny produkt
router.post("/", async (req, res) => {
  const product = await productService.createProduct(req.body);
  res.status(201).json(product);
});

// Uppdatera produkt
router.put("/:id", async (req, res) => {
  const product = await productService.updateProduct(
    req.params.id,
    req.body
  );
  if (!product) {
    return res.status(404).json({ message: "Filmen hittades inte." });
  }
  res.json(product);
});

// Ta bort produkt
router.delete("/:id", async (req, res) => {
  const deleted = await productService.deleteProduct(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: "Filmen hittades inte." });
  }
  res.json({ message: "Filmen togs bort." });
});

// Betygsätt produkt
router.post("/:id/rating", async (req, res) => {
  const { rating } = req.body;
  const newRating = await productService.addRating(req.params.id, rating);
  if (!newRating) {
    return res.status(404).json({ message: "Filmen hittades inte." });
  }
  res.status(201).json(newRating);
});

module.exports = router;