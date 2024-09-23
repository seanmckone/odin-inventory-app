#! /usr/bin/env node
require("dotenv").config();

const { Client } = require("pg");

const SQL = `
-- Drop existing tables
DROP TABLE IF EXISTS sizes;
DROP TABLE IF EXISTS brands;
DROP TABLE IF EXISTS switches;
DROP TABLE IF EXISTS profiles;
DROP TABLE IF EXISTS case_materials;
DROP TABLE IF EXISTS items;

-- Create sizes table and insert values
CREATE TABLE sizes (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT
);
INSERT INTO sizes (name) 
VALUES
  ('100%'),
  ('75%'),
  ('60%');

-- Create brands table and insert values
CREATE TABLE brands (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT
);
INSERT INTO brands (name) 
VALUES
  ('Keychron'),
  ('Ducky'),
  ('Varmilo');

-- Create switches table and insert values
CREATE TABLE switches (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT
);
INSERT INTO switches (name) 
VALUES
  ('Kailh Box Jade'),
  ('Cherry MX Red'),
  ('Gateron Oil King');

-- Create profiles table and insert values
CREATE TABLE profiles (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT
);
INSERT INTO profiles (name) 
VALUES
  ('Cherry'),
  ('OEM'),
  ('XDA');

-- Create case_materials table and insert values
CREATE TABLE case_materials (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT
);
INSERT INTO case_materials (name) 
VALUES
  ('Aluminum'),
  ('ABS'),
  ('Polycarbonate');

-- Create items table and insert values
CREATE TABLE items (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT,
  sku TEXT,
  upc TEXT,
  image_url TEXT,
  price FLOAT,
  stock_count INTEGER,
  size_id INTEGER,
  brand_id INTEGER,
  switch_id INTEGER,
  profile_id INTEGER,
  case_material_id INTEGER
);

INSERT INTO items (name, sku, upc, image_url, price, stock_count, size_id, brand_id, switch_id, profile_id, case_material_id) 
VALUES
  ('Keychron Q12 QMK Custom Mechanical Keyboard', 'AS-JKD-2343435', '384729384621', 'https://www.keychron.com/cdn/shop/products/Keychron-Q12-QMK-VIA-southpaw-custom-mechanical-keyboard-96-percent-full-aluminum-frame-for-Mac-Window-Linux-fully-assembled-knob-black-B-Gateron-G-pro-switch-red.jpg?v=1676014436&width=1000', 204.99, 15, 1, 2, 3, 2, 1),
  ('Ducky One 2 Mini Pro Classic RGB LED 60% Double Shot PBT Mechanical Keyboard', 'AS-JKD-2346545', '384729384623', 'https://mechanicalkeyboards.com/cdn/shop/files/13821-4J8X5-Ducky-One-2-Mini-Pro-Classic.jpg?v=1708713521&width=750', 79.99, 34, 2, 3, 1, 1, 3);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@${process.env.HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
