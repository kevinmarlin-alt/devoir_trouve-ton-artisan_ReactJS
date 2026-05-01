const express = require("express");
const router = express.Router();
const { param } = require("express-validator");

const artisansControllers = require("../controllers/artisans.controller");

// GET l'ensemble des artisans mis en avant
router.get("/top", artisansControllers.getTopArtisans);

// GET un artisan selon son id
router.get("/:id", [
    param('id')
        .trim()
        .escape()
        .isString()
],artisansControllers.getById);

// GET l'ensemble des artisans dont le nom commence par name
router.get("/search/:name", [
    param('name')
        .trim()
        .escape()
        .isString()
], artisansControllers.getByName);

module.exports = router;
