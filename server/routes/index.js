const express = require('express');
const router = express.Router();
const artisan = require('../models/artisans')

/* GET home page. */
router.get('/categories', async (req, res, next) =>  {
  const artisans = await artisan.findAll()
  console.log("----->",artisans)
  res.status(200).json(artisans);
});

module.exports = router;
