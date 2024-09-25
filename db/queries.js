const pool = require("./pool");

async function getItems() {
  const { rows } = await pool.query(
    `
    SELECT items.id, items.name, items.sku, items.upc, items.image_url,items.price, items.stock_count, 
      sizes.name AS kb_size, 
      brands.name AS kb_brand,
      switches.name AS kb_switch,
      profiles.name AS kb_profile,
      case_materials.name AS kb_case_material
    FROM items 
    INNER JOIN sizes ON items.size_id = sizes.id 
    INNER JOIN brands ON items.brand_id = brands.id
    INNER JOIN switches ON items.switch_id = switches.id
    INNER JOIN profiles ON items.profile_id = profiles.id
    INNER JOIN case_materials ON items.case_material_id = case_materials.id;
    `
  );
  return rows;
}

async function getCategoryItems(categoryName) {
  const { rows } = await pool.query(
    `
    SELECT name FROM ${categoryName};
    `
  );
  return rows;
}

module.exports = {
  getItems,
  getCategoryItems,
};
