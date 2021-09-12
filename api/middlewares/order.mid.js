
const createError = require("http-errors");
const Order = require("../models/Order.model");

module.exports.exists = (req, res, next) => {
  const id = req.params.id;
  Order.findById(id)
    .then((order) => {
      if (order) {
        req.order = order;    
        next();
      } else {
        next(createError(404, "Order not found"));
      }
    })
    .catch((error) => next(error));
};