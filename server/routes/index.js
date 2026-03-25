const express = require('express');
const router = express.Router();
const artisansControllers = require('../controllers/artisans.controller')


/* GET home page. */
router.get('/category/:category', artisansControllers.getAllByCategory);
router.get('/top_artisans', artisansControllers.getTopArtisans)
router.get('/categories', artisansControllers.getCategories)
router.get('/name/:name', artisansControllers.getByName)
router.get('/:id', artisansControllers.getById)

module.exports = router;
