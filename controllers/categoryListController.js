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

  if (items) {
    res.render("categorylistpage", {
      items: items,
      name: name,
      category: req.params.category,
    });
  } else {
    res.render("404");
  }
}

async function getItems(req, res) {
  let items = null;
  let name = null;

  switch (req.params.category) {
    case "size":
      items = await db.getItemsBySize(req.params.subcategory);
      name = "Size";
      break;
    case "brand":
      items = await db.getItemsByBrand(req.params.subcategory);
      name = "Brand";
      break;
    case "switch":
      items = await db.getItemsBySwitch(req.params.subcategory);
      name = "Switch";
      break;
    case "profile":
      items = await db.getItemsByProfile(req.params.subcategory);
      name = "Profile";
      break;
    case "case-material":
      items = await db.getItemsByCaseMaterial(req.params.subcategory);
      name = "Case Material";
      break;
  }

  res.render("subcategorypage", {
    items: items,
    name: name,
    subcategory: req.params.subcategory,
  });
}

module.exports = { getSubCategories, getItems };
