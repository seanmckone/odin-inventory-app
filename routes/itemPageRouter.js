const { Router } = require("express");
const itemPageRouter = Router();

const itemPageController = require("../controllers/itemPageController");

// Routing
itemPageRouter.get("/:id", itemPageController.getItem);

// Export router
module.exports = itemPageRouter;
