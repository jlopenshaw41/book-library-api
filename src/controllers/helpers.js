const { Book, Reader } = require("../models");

const getModel = (model) => {
  const models = {
    book: Book,
    reader: Reader,
  };

  return models[model];
};

const getError = (model) => ({ error: `The ${model} could not be found.` });

const createItem = (res, model, item) => {
  const Model = getModel(model);

  return Model.create(item)
    .then((newItem) => res.status(201).json(newItem))
    .catch((error) =>
      res.status(400).json({
        error: error.name,
        message: error.errors[0].message,
      })
    );
};

const getAllItems = (res, model) => {
  const Model = getModel(model);

  Model.findAll().then((items) => res.status(200).json(items));
};

const getItemById = (res, model, id) => {
  const Model = getModel(model);
  const error = getError(model);

  Model.findByPk(id).then((item) => {
    if (!item) {
      res.status(404).json(error);
    } else {
      res.status(200).json(item);
    }
  });
};

const updateItem = (res, model, item, id) => {
  const Model = getModel(model);
  const error = getError(model);

  Model.update(item, { where: { id } }).then(([numOfRowsUpdated]) => {
    if (numOfRowsUpdated === 0) {
      res.status(404).json(error);
    } else {
      res.status(200).json([numOfRowsUpdated]);
    }
  });
};

const deleteItem = (res, model, id) => {
    const Model = getModel(model);
    const error = getError(model);

    Model.destroy({ where: { id } }).then((numOfRowsDeleted) => {
        if (numOfRowsDeleted === 0) {
          res.status(404).json(error);
        } else {
          res.status(204).json(numOfRowsDeleted);
        }
      });

}

module.exports = { createItem, getAllItems, getItemById, updateItem, deleteItem };
