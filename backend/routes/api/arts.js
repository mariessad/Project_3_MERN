// IMPORT EXPRESS IN ORDER TO CREATE ROUTERS
const express = require("express");

// IMPORT ART CONTROLLER
const artController = require("../../controllers/api/artController");
// Use express to create a router
const artRouter = express.Router();

// Use the router to redirect to different controller depending on the method
artRouter.route("/").get(artController.getAllArt);
artRouter.route("/").post(artController.createArt);
artRouter.route("/:id").get(artController.getArt);
artRouter.route("/:id").delete(artController.deleteArt);
artRouter.route("/:id").patch(artController.updateArt);

// EXPORT ROUTER TO BE USED IN OTHER PARTS OF OUR APPLICATION
module.exports = artRouter;
