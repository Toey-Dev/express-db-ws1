// สำหรับเชื่อมต่อกับฐานข้อมูล
const { Pool } = require("pg");
// ต้องการ username เเละ Password สำหรับการเชื่อมต่อ
const env = require("../config/env");

const pool = new Pool({
  connectionString: env.databaseUrl,
  max: 10,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 5_000,
});

module.exports = pool;
