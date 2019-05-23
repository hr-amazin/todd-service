module.exports = { 
  development: { 
    client: 'postgresql', 
    connection: { 
      host: `127.0.0.1`, 
      user: `todd`, 
      password: `password`, 
      database: `reviews`
    }, 
    // `postgres://localhost:5432/${reviews}`, 
    migrations: { 
      directory: __dirname + '/db/migrations' 
    },
    seeds: { 
      directory: __dirname + '/db/seeds'
    } 
  }
}