// crimeRoutes.js

const express = require('express');
const router = express.Router();
const Theft = require('../model/theft');
const Accident = require('../model/accident');

router.get('/accidentsearch', async (req, res) => {
  try {
    const towers = await Accident.find({}); // Adjust the query as needed
    res.json(towers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/theftsearch', async (req, res) => {
  console.log('hi');
  try {
    const theft = await Theft.find({});
    res.json(theft);
    console.log(theft);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add more routes for other crime types

module.exports = router;
