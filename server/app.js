const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mysqlDb = require("./db/mysql");

const indexRouter = require("./routes/index");

const app = express();

mysqlDb.initClientDbConnection();

app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

module.exports = app;
