const express = require("express");
const app = express();
const readerRouter = require('./routes/reader');

app.use(express.json());

app.use('/readers', readerRouter);

module.exports = app;
