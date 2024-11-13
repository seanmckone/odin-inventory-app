const { Router } = require("express");
const searchRouter = Router();

const searchController = require("../controllers/searchController");

// Routing
searchRouter.get("/", searchController.getItem);

// Export router
module.exports = searchRouter;
