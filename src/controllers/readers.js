const { Reader } = require("../models");

const create = (req, res) => {
  Reader.create(req.body)
    .then((reader) => res.status(201).json(reader))
    .catch((error) =>
      res.status(400).json({
        error: error.name,
        message: error.errors[0].message
      })
    );
};

const list = (req, res) => {
  Reader.findAll().then((readers) => res.status(200).json(readers));
};

const getReaderById = (req, res) => {
  const { id } = req.params;
  Reader.findByPk(id).then((reader) => {
    if (!reader) {
      res.status(404).json({ error: "The reader could not be found." });
    } else {
      res.status(200).json(reader);
    }
  });
};

const update = (req, res) => {
  const { id } = req.params;
  Reader.update(req.body, { where: { id } }).then(([numOfRowsUpdated]) => {
    if (numOfRowsUpdated === 0) {
      res.status(404).json({ error: "The reader does not exist." });
    } else {
      res.status(200).json([numOfRowsUpdated]);
    }
  });
};

const deleteReader = (req, res) => {
  const { id } = req.params;
  Reader.destroy({ where: { id } }).then((numOfRowsDeleted) => {
    if (numOfRowsDeleted === 0) {
      res.status(404).json({ error: "The reader does not exist." });
    } else {
      res.status(204).json(numOfRowsDeleted);
    }
  });
};

module.exports = { create, list, update, deleteReader, getReaderById };
