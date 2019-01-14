"use strict";

const express = require("express");
const path = require("path");
// const volleyball = require("volleyball");

const app = express();

// logging middleware
// app.use(volleyball);

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, "../public")));

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

app.get("/", (req, res) => {
  res.send(path.join(__dirname, "../public"));
  // res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
