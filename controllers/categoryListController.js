const db = require("../db/queries");

async function getSubCategories(req, res) {
  let items = null;
  let name = null;

  switch (req.params.category) {
    case "size":
      items = await db.getSubCategories("sizes");
      name = "Size";
      break;
    case "brand":
      items = await db.getSubCategories("brands");
      name = "Brand";
      break;
    case "switch":
      items = await db.getSubCategories("switches");
      name = "Switch";
      break;
    case "profile":
      items = await db.getSubCategories("profiles");
      name = "Profile";
      break;
    case "case-material":
      items = await db.getSubCategories("case_materials");
      name = "Case Material";
      break;
  }

  res.render("categorylistpage", { items: items, name: name });
}

module.exports = { getSubCategories };
