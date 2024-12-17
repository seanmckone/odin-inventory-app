const db = require("../db/queries");

async function getInStockItems(req, res) {
  const items = await db.getInStockItems();

  res.render("stockpage", { items: items, name: "In Stock" });
}

async function getLowStockItems(req, res) {
  const items = await db.getLowStockItems(5);

  res.render("stockpage", { items: items, name: "Low Stock" });
}

async function getOutOfStockItems(req, res) {
  const items = await db.getOutStockItems();

  res.render("stockpage", { items: items, name: "Out of Stock" });
}

module.exports = { getInStockItems, getLowStockItems, getOutOfStockItems };
