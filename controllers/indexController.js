const db = require("../db/queries");

async function getItems(req, res) {
  const items = await db.getAllItems();
  const buttonArray = [
    await db.getInStockCount(),
    await db.getLowStockCount(5),
    await db.getOutStockCount(),
  ];

  res.render("index", { items: items, buttonArray: buttonArray });
}

module.exports = { getItems };
