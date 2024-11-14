const { Router } = require("express");
const categoryPageRouter = Router();

const categoryListController = require("../controllers/categoryListController");

// Routing
categoryPageRouter.get("/:category", categoryListController.getSubCategories);

// Export router
module.exports = categoryPageRouter;
