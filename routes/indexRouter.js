const { Router } = require('express');
const indexRouter = Router();

const indexController = require('../controllers/indexController')

// Routing
indexRouter.get('/', indexController.getItems);

// Export router
module.exports = indexRouter; 