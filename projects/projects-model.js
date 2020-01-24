const db = require("../data/db-config.js");

module.exports = {
    findProjects, 
    findById, 
    add, 
    remove
}

function findProjects() {
  return db("projects");
}

function findById(id) {
  return db("projects")
    .where({ project_id: id })
    .first();
}

function add(project) {
  return db("projects").insert(project);
}

function remove(id) {
  return db("projects")
    .where({ project_id: id })
    .del();
}