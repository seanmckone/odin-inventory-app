const pool = require("./pool");

// Return all items from database
async function getAllItems() {
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
    `,
  );
  return rows;
}

// Return specified (by id) item from database
async function getItemById(id) {
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
    INNER JOIN case_materials ON items.case_material_id = case_materials.id
    WHERE items.id = ($1);
    `,
    [id],
  );
  return rows.length > 0 ? rows[0] : null;
}

// Return specified (by name) item from database
async function getItemByName(name) {
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
    INNER JOIN case_materials ON items.case_material_id = case_materials.id
    WHERE items.name iLIKE '%' || $1 || '%';
    `,
    [name],
  );
  return rows;
}

// Return list of subcategories from database
async function getSubCategories(category) {
  const validCategories = [
    "sizes",
    "brands",
    "switches",
    "profiles",
    "case_materials",
  ];
  if (!validCategories.includes(category)) {
    return null;
  }

  const { rows } = await pool.query(
    `
    SELECT name FROM ${category};
    `,
  );
  return rows;
}

// Return items with matching size from database
async function getItemsBySize(size) {
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
    INNER JOIN case_materials ON items.case_material_id = case_materials.id
    WHERE kb_size iLIKE '%' || $1 || '%';
    `,
    [size],
  );
  return rows;
}

module.exports = {
  getAllItems,
  getItemById,
  getItemByName,
  getSubCategories,
  getItemsBySize,
};
