const db = require("../db/queries");

async function getItem(req, res) {
  const items = await db.getItemByName(req.query.q);

  if (items) {
    res.render("searchpage", { items: items, term: req.query.q });
  } else {
    res.render("404");
  }
}

module.exports = { getItem };
