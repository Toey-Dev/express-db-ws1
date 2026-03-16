const pool = require("../db/pool");
const env = require("../config/env");
// ฟังก์ชันเก็บชื่อ dbSchema จากไฟล์ env
function qualify(table) {
  return `${env.dbSchema}.${table}`;
}

async function listBooks(limit = 20) {
  // เป็นการประกาศตัวเเปรสำหรับ qualy
  const sql = `SELECT book_id, title, author, created_at
               FROM app.books
               ORDER BY book_id DESC
               LIMIT $1`;
  const result = await pool.query(sql, [limit]);
  return result.rows;
}

async function getBookById(id) {
  const sql = `SELECT book_id,title, author, created_at
  FROM app.books
  WHERE book_id = $1`;
  const result = await pool.query(sql, [id]);
  return result.rows[0];
}

async function createBook(title, author) {
  const sql = `INSERT INTO ${qualify("books")}(title , author) 
  VALUES($1,$2)
  RETURNING book_id,title,author, created_at`;
  // ส่งข้อมูลของฐานข้อมูล
  const result = await pool.query(sql, [title, author]);
  return result.rows[0];
}

module.exports = { listBooks, createBook, getBookById };
