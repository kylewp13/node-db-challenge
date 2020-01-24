
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          project_id: 1,
          task_description: "task one",
          task_notes: "task one",
          task_completed: false
        }
      ]);
    });
};
