// step 1 เรียกใช้ require
const app = require("./app");
const env = require("./config/env");

// step 2 เปิดการใช้ server
app.listen(env.port, () => {
  console.log(`server running on ${env.port} http://localhost:3000/`);
});
