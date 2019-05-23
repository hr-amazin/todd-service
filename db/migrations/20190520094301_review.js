
exports.up = function(knex, Promise) { 
  return knex.schema.createTable('review', table => { 
    table
      .integer('uuid') 
      .unsigned() 
      .notNullable() 
    table 
      .string('revTitle') 
      .notNullable(); 
    table
      .text('revName') 
      .notNullable();
    table 
      .text('revBody') 
      .notNullable();
    table 
      .date('revDate') 
      .notNullable();
    table
      .integer('stars') 
      .unsigned() 
      .notNullable(); 
  });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('review');
};
