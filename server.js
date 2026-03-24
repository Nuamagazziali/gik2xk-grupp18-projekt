const express = require("express");
const cors = require("cors");

const sequelize = require("./database");
const Product = require("./models/Product");
const User = require("./models/User");

// OBS: require("./models") är BORTTAGEN härifrån

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/cart", cartRoutes);

app.get("/", (req, res) => {
  res.send("Filmshop backend fungerar");
});

async function startServer() {
  try {
    await sequelize.sync({ force: true });

    await Product.bulkCreate([
      {
        title: "Interstellar",
        description: "En science fiction-film om rymdresor och mänsklighetens framtid.",
        genre: "Sci-Fi",
        price: 149,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        releaseYear: 2014,
      },
      {
        title: "Inception",
        description: "En film om drömmar, minnen och avancerade kupper.",
        genre: "Sci-Fi",
        price: 129,
        imageUrl: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
        releaseYear: 2010,
      },
      {
        title: "The Dark Knight",
        description: "Batman möter Jokern i en mörk och intensiv film.",
        genre: "Action",
        price: 139,
        imageUrl: "https://m.media-amazon.com/images/I/81AJdOIEIhL._AC_SY679_.jpg",
        releaseYear: 2008,
      },
      {
        title: "The Matrix",
        description: "Neo upptäcker att världen han lever i är en simulering.",
        genre: "Sci-Fi",
        price: 119,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
        releaseYear: 1999,
      },
      {
        title: "Gladiator",
        description: "En romersk general blir slav och kämpar för hämnd i Colosseum.",
        genre: "Action",
        price: 135,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/8d/Gladiator_ver1.jpg",
        releaseYear: 2000,
      },
      {
        title: "Avatar",
        description: "En soldat skickas till Pandora och dras in i en konflikt mellan världar.",
        genre: "Sci-Fi",
        price: 145,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg",
        releaseYear: 2009,
      },
      {
        title: "Joker",
        description: "En mörk berättelse om Arthur Flecks förvandling till Jokern.",
        genre: "Drama",
        price: 125,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg",
        releaseYear: 2019,
      },
      {
        title: "Titanic",
        description: "En klassisk kärlekshistoria ombord på det ödesdigra fartyget Titanic.",
        genre: "Romance",
        price: 115,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/22/Titanic_poster.jpg",
        releaseYear: 1997,
      },
    ]);
    app.listen(PORT, () => {
      console.log(`Server körs på http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Fel vid start av servern:", error);
  }
}

startServer();