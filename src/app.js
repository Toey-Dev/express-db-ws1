const express = require("express");
const app = express();
const healthRoutes = require("./routes/health.routes");
const booksRoutes = require("./routes/books.routes");

app.use(express.json());
app.use("/health", healthRoutes);
app.use("/books", booksRoutes);

module.exports = app;
