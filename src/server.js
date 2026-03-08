// step 1 เรียกใช้ require
const express = require("express");
const app = express();
const PORT = 3000;

// step 2 เปิดการใช้ server
app.listen(PORT, () => {
  console.log(`server running on ${PORT} http://localhost:3000/`);
});
