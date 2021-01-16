const express = require("express");
const app = express();
const readerControllers = require("./controllers/readers");

app.use(express.json());

app.get("/readers", readerControllers.list);

app.post("/readers", readerControllers.create);

app.patch("/readers/:id", readerControllers.update);

app.delete("/readers/:id", readerControllers.deleteReader);

module.exports = app;
