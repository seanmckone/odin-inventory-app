const { Router } = require("express");
const indexRouter = Router();

const indexController = require("../controllers/indexController");

// Routing
indexRouter.get("/dashboard", indexController.getItems);

// Redirect "/" route to "/dashboard"
indexRouter.get("/", (req, res) => {
  res.redirect("/dashboard");
});

// Redirect nonexistent routes to 404 page
indexRouter.get("*", (req, res) => {
  res.render("404");
});

// Export router
module.exports = indexRouter;
