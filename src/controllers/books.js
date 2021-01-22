const { Book } = require("../models");

const create = (req, res) => {
  Book.create(req.body)
    .then((book) => res.status(201).json(book))
    .catch((error) =>
      res.status(400).json({
        error: error.name,
        message: error.errors[0].message,
      })
    );
};

const list = (req, res) => {
  Book.findAll().then((books) => res.status(200).json(books));
};

const getBookById = (req, res) => {
  const { id } = req.params;
  Book.findByPk(id).then((book) => {
    if (!book) {
      res.status(404).json({ error: "The book could not be found." });
    } else {
      res.status(200).json(book);
    }
  });
};

const update = (req, res) => {
  const { id } = req.params;
  Book.update(req.body, { where: { id } }).then(([numOfRowsUpdated]) => {
    if (numOfRowsUpdated === 0) {
      res.status(404).json({ error: "The book does not exist." });
    } else {
      res.status(200).json([numOfRowsUpdated]);
    }
  });
};

const deleteBook = (req, res) => {
  const { id } = req.params;
  Book.destroy({ where: { id } }).then((numOfRowsDeleted) => {
    if (numOfRowsDeleted === 0) {
      res.status(404).json({ error: "The book does not exist." });
    } else {
      res.status(204).json(numOfRowsDeleted);
    }
  });
};

module.exports = { create, list, getBookById, update, deleteBook };
