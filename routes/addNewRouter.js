const { Router } = require("express");
const addNewRouter = Router();

const addNewController = require("../controllers/addNewController");

// Routing
addNewRouter.get("/", addNewController.getItems);

// Export router
module.exports = addNewRouter;
