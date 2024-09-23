async function getItems(req, res) {
  //const items = await db.getItems();

  res.render("index");
}

module.exports = { getItems };
