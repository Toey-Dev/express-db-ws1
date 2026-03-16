const express = require("express");
const app = express();
const healthRoutes = require("./routes/health.routes");
const booksRoutes = require("./routes/books.routes");
const usersRouter = require("./routes/users.routes");
const authRouter = require("./routes/auth.routes");
const meRouter = require("./routes/me.routes");
// const borrowsRouter = require("./routes/borrows.routes");

app.use(express.json());
app.use("/health", healthRoutes);
app.use("/books", booksRoutes);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/me", meRouter);
// app.use("/borrows", borrowsRouter);

module.exports = app;
