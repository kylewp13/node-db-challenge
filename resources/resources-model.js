const db = require("../data/db-config.js");

module.exports = {
    findResources, 
    findById, 
    add, 
    remove
}

function findResources() {
  return db("resources");
}

function findById(id) {
  return db("resources")
    .where({ resource_id: id })
    .first();
}

function add(resource) {
  return db("resources").insert(resource);
}

function remove(id) {
  return db("resources")
    .where({ resource_id: id })
    .del();
}