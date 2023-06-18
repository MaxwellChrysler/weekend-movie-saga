const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/:id", (req, res) => {
  // return the genres that match the movies id
  const movieId = req.params.id;
  const genreQuery = ` SELECT "genres"."name" AS "category" FROM "genres"
JOIN "movies_genres" ON "movies_genres"."genre_id" = "genres"."id"
JOIN "movies" ON "movies"."id" = "movies_genres"."movie_id"
WHERE "movies"."id" = $1`;

  pool
    .query(genreQuery, [movieId])
    .then((result) => {
      console.log("genre query was made", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all genres", err);
      res.sendStatus(500);
    });
});
module.exports = router;
