const express = require('express');
const router = express.Router();

const categoriesControllers = require('../controllers/categories.controllers')
const artisansRoutes = require('./artisans.routes')

// GET l'ensemble des categories disponible
router.get('/categories', categoriesControllers.getCategories)
// GET l'ensemble des artisans par catégorie
router.get('/categories/:category/artisans', categoriesControllers.getAllByCategory);

router.use('/artisans', artisansRoutes)

module.exports = router;
