const express = require("express");
const router = express.Router();

const artisansControllers = require("../controllers/artisans.controller");

// GET l'ensemble des artisans mis en avant
router.get("/top", artisansControllers.getTopArtisans);
// GET un artisan selon son id
router.get("/:id", artisansControllers.getById);

// GET l'ensemble des artisans dont le nom commence par name
router.get("/search/:name", artisansControllers.getByName);

module.exports = router;
