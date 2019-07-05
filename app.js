var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const { notFound, errorHandler } = require("./middleware/index");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routes

app.get("/", (req, res) => {
  res.status(201).json({
    message: "Hello and welcome to the community!"
  });
});

// error handler

app.use(notFound);
app.use(errorHandler);

module.exports = app;
