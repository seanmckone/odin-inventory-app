const db = require("../db/queries");

async function getItems(req, res) {
  const items = await db.getAllItems();

  res.render("index", { items: items });
}

module.exports = { getItems };
