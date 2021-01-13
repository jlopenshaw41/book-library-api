const { Reader } = require("../models");

const create = (req, res) => {
  console.log(Reader);
  Reader.create(req.body).then((reader) => res.status(201).json(reader));
};

module.exports = { create };
