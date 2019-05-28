require('dotenv').config(); 

const knex = require('knex')({ 
  client: 'pg', 
  connection: { 
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME
  }
}); 

const getOneRev = (reviewUUID) => {  
  // console.log(reviewUUID, `log from db side`);
  return knex('review').where({ 
    uuid: reviewUUID
    }).select()
    // .then(() => console.log(`reviews retrieved`))
    .catch((err => err))
} 

module.exports = { getOneRev }