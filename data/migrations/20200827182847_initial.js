
exports.up = async function(knex) {
    await knex.schema.createTable("recipes", (table) => {
        table.increments("id")
        table.text("name").notNull()
    })
    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.text("name").notNull()
    })
    await knex.schema.createTable("recipes_ingredients", (table) => {
        table.integer("recipes_id").notNull().references("id").inTable("recipes")
        table.integer("ingredients_id").notNull().references("id").inTable("ingredients")
        table.float("quantity").notNull()
        table.primary(["recipes_id", "ingredients_id"])
    })
    await knex.schema.createTable("steps", (table) => {
        table.increments("id")
        table.text("steps").notNull()
        table.integer("recipes_id").notNull().references("id").inTable("recipes")
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("steps")
    await knex.schema.dropTableIfExists("recipes_ingredients")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
};
