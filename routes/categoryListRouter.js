const { Router } = require("express");
const categoryPageRouter = Router();

const categoryListController = require("../controllers/categoryListController");

// Routing
categoryPageRouter.get("/:category", categoryListController.getSubCategories);

categoryPageRouter.get(
  "/:category/:subcategory",
  categoryListController.getItems,
);

// Export router
module.exports = categoryPageRouter;
