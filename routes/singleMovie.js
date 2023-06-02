const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((response) => {
      res.render("singleMovie", { movie: response });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
