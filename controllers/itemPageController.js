const db = require("../db/queries");

async function getItem(req, res) {
  const item = await db.getItemById(req.params.id);

  if (item) {
    res.render("itempage", { item: item });
  } else {
    res.render("404");
  }
}

module.exports = { getItem };
