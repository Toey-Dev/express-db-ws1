const pool = require("../db/pool");
const env = require("../config/env");
function qualify(table) {
  return `${env.dbSchema}.${table}`;
}
async function borrowBook({ userId, bookId, dueDate }) {
  const sql = `
    WITH claimed AS (
      UPDATE ${qualify("books")}
      SET available = false
      WHERE book_id = $2 AND available = true
      RETURNING book_id
    ), inserted AS (
      INSERT INTO ${qualify("borrows")} (user_id, book_id, due_date)
      SELECT $1, book_id, $3
      FROM claimed
      RETURNING id, user_id, book_id, borrowed_at, due_date, returned_at
    )
    SELECT *
    FROM inserted
  `;
  const result = await pool.query(sql, [userId, bookId, dueDate]);
  return result.rows[0] || null;
}
module.exports = {
  borrowBook,
};
borrowBook({
  userId: 1,
  bookId: 1,
  dueDate: "2024-07-01",
});
