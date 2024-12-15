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
    WHERE sizes.name iLIKE '%' || $1 || '%';
    `,
    [size],
  );
  return rows;
}

// Return items with matching brand from database
async function getItemsByBrand(brand) {
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
    WHERE brands.name iLIKE '%' || $1 || '%';
    `,
    [brand],
  );
  return rows;
}

// Return items with matching switch from database
async function getItemsBySwitch(switchName) {
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
    WHERE switches.name iLIKE '%' || $1 || '%';
    `,
    [switchName],
  );
  return rows;
}

// Return items with matching switch from database
async function getItemsByProfile(profile) {
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
    WHERE profiles.name iLIKE '%' || $1 || '%';
    `,
    [profile],
  );
  return rows;
}

// Return items with matching switch from database
async function getItemsByCaseMaterial(caseMaterial) {
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
    WHERE case_materials.name iLIKE '%' || $1 || '%';
    `,
    [caseMaterial],
  );
  return rows;
}

module.exports = {
  getAllItems,
  getItemById,
  getItemByName,
  getSubCategories,
  getItemsBySize,
  getItemsByBrand,
  getItemsBySwitch,
  getItemsByProfile,
  getItemsByCaseMaterial,
};
