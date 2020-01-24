
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          project_name: "project one",
          project_description: "projectv one needs to be done",
          project_completed: false
        }
      ]);
    });
};
