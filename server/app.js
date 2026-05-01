const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mysqlDb = require("./db/mysql");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const xss = require("xss-clean");

const indexRouter = require("./routes/index");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requêtes par IP
  message: "Trop de requêtes, réessayez plus tard."
});

const app = express();

mysqlDb.initClientDbConnection();

app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}))

app.use(
  cors({
    origin: 'https://trouve-ton-artisan-hb8r.onrender.com',
    credentials: true
  }),
);

app.use(limiter)

app.use(logger("dev"));
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: false }));

app.use(xss());

app.use("/", indexRouter);

module.exports = app;
