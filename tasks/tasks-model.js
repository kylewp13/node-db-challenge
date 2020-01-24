const db = require("../data/db-config.js");

module.exports = {
    findTasks,
    add
}

function findTasks(id) {
  return db('tasks')
    .select('projects.project_name', 'projects.project_description', 'tasks.*')
    .leftJoin('projects', 'tasks.task_id', 'projects.project_id')
    .where('tasks.project_id', '=', id)

}

function add(task, id) {
  return db("tasks")
    .where({ project_id: id })
    .insert(task);
}