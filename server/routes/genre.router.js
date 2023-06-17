const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get join what we need so select the generes for that movie that match id of the poster that was clicked on 
  // the orignal comment instructed to get all generes but I am going to go about it like 
  res.sendStatus(500)
});

module.exports = router;