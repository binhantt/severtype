import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql2",
    connection: {
      filename: "./src/database/db.mysql",
    },
    migrations: { directory: "./src/database/migrations" }, 
    seeds: { directory: "./src/database/model" },
    
  },

  
};

module.exports = config;
