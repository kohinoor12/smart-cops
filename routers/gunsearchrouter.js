// search.route.js
const express = require('express');
const router = express.Router();
const Gun = require('../model/gun'); // Import your Mongoose model

router.get('/gunsearch', async (req, res) => {
  const searchQuery = req.query.licenseno; // You should pass the 'name' as a query parameter
  const results = await Gun.find({ Licenseno: searchQuery });
  res.json(results);
  console.log(results);
});

module.exports = router;
