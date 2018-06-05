module.exports = {
  development: {
      client: "pg",
      connection: "postgres:///gameMemory"
  },
  production: {
      client: "pg",
      connection: process.env.DATABASE_URL
  }
};
