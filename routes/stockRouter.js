const { Router } = require("express");
const stockRouter = Router();

const stockController = require("../controllers/stockController");

// Routing
stockRouter.get("/in-stock", stockController.getInStockItems);
stockRouter.get("/low-stock", stockController.getLowStockItems);
stockRouter.get("/out-of-stock", stockController.getOutOfStockItems);

// Export router
module.exports = stockRouter;
