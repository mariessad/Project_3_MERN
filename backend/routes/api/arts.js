// IMPORT EXPRESS IN ORDER TO CREATE ROUTERS
const express = require("express");

// IMPORT USER CONTROLLER
const artController = require("../../controllers/api/artController");

// Use express to create a router
const router = express.Router();

// Use the router to redirect to different controller depending on the method
router.route("/").post(artController.createArt);
router.route("/:id").get(artController.getArt);
router.route("/").get(artController.getAllArt);

// EXPORT ROUTER TO BE USED IN OTHER PARTS OF OUR APPLICATION
module.exports = artRouter;
