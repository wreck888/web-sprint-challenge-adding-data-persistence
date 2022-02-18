exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments('project_id')
        tbl.text('project_name')
            .notNullable()
            .unique()
        tbl.text('project_description')
        tbl.boolean('project_completed')
            .defaultTo(0)
    })
    .createTable('resources', tbl => {
        tbl.increments('resource_id')
        tbl.text('resource_name')
            .unique()
            .notNullable()
        tbl.text('resource_description', 300)
    })
    .createTable('tasks', tbl => {
        tbl.increments('task_id')
        tbl.text('task_description')
            .notNullable()
        tbl.text('task_notes')
        tbl.boolean('task_completed')
            .defaultTo(0)
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('project_resources', tbl => {
        tbl.increments('resource_assignment_id')
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('resources_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('project_resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects');
};
