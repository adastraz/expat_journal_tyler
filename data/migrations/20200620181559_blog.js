
exports.up = function(knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments()
            tbl.string('username', 32).unique().notNullable()
            tbl.string('password', 64).notNullable()
            tbl.string('description', 128)
            tbl.string('name', 64).notNullable()
            tbl.string('company', 128)
        })

        .createTable('stories', tbl => {
            tbl.increments()
            tbl.string('def_image').notNullable()
            tbl.string('2def_img').notNullable()
            tbl.string('3def_img').notNullable()
            tbl.string('story_desc').notNullable()
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            tbl.integer('story_likes').defaultTo(0)
        })

        .createTable('images', tbl => {
            tbl.increments()
            tbl.integer('story_id')
                .unsigned()
                .references('id')
                .inTable('stories')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            tbl.string('img_url').notNullable()
            tbl.integer('img_likes').defaultTo(0)
        })

        .createTable('comments', tbl => {
            tbl.increments()
            tbl.integer('img_id')
                .unsigned()
                .references('id')
                .inTable('images')
                .onDelete('CASCADE')
            tbl.string('comment', 255).notNullable()
            tbl.integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
}


exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('comments')
        .dropTableIfExists('images')
        .dropTableIfExists('stories')
        .dropTableIfExists('users')
}
