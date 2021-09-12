const createError = require('http-errors');
const Item = require('../models/Item.model');

module.exports.exists = (req, res, next) => {
  const id = req.params.itemId || req.params.id;
  Item.findById(id)
    .then(item => {
      if (item) {
        req.item = item;
        next();
      } else {
        next(createError(404, 'Item not found'));
      }
    })
    .catch(error => next(error));
}