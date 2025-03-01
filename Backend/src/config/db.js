const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({    
     user: process.env.PG_USER,
     host: process.env.PG_HOST,
     database: process.env.PG_DATABASE,
     password: process.env.PG_PASSWORD,
     port: process.env.PG_PORT,
     allowExitOnIdle: true, 
}) 

// const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false, },  });

module.exports = pool