exports.up = function(knex) {
    return knex.schema
      .createTable("projects", t => {
        t.increments("project_id");
        t.string("project_name").notNullable();
        t.string("project_description");
        t.boolean("project_completed")
          .notNullable()
          .defaultTo(true);
      })

      .createTable("resources", t => {
        t.increments("resource_id");
        t.string("resource_name").notNullable();
        t.string("resource_description");
      })

      .createTable("tasks", t => {
        t.increments("task_id");
        t.string("task_description").notNullable();
        t.string("task_notes");
        t.boolean("task_completed")
          .notNullable()
          .defaultTo(false);
        // foreign key
        t.integer("project_id")
          .unsigned()
          .notNullable()
          .references("project_id")
          .inTable("projects")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      })

      .createTable("project_resources", t => {
        t.increments("project_resources_id");
        // foreign key
        t.integer("project_id")
          .unsigned()
          .notNullable()
          .references("project_id")
          .inTable("projects")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        // foreign key
        t.integer("resource_id")
          .unsigned()
          .notNullable()
          .references("resource_id")
          .inTable("resources")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("project_resources")
      .dropTableIfExists("tasks")
      .dropTableIfExists("resources")
      .dropTableIfExists("projects");
  };