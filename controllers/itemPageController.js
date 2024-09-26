const db = require("../db/queries");

async function getItem(req, res) {
  const item = await db.getItemById(req.params.id);

  res.render("itempage", { item: item });
}

module.exports = { getItem };
