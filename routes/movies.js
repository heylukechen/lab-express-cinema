const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then((allMovies) => {
      console.log(allMovies);
      res.render("movies", { allMovies: allMovies });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
