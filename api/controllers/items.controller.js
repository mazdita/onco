const createError = require('http-errors');
const Item = require('../models/Item.model');

module.exports.list = (req, res, next) => {
  const { title, category } = req.query;
  let criterial = {};

  if (title) {
      criterial.title = new RegExp(title, 'i');
  }
  if (category) {
      criterial.category = category;
  }


  Item.find(criterial)
      .then(items => res.json(items))
      .catch(error => next(error))
}
/*module.exports.list = (req, res, next) => {
    Item.find()
    .then(items => 
      {
        console.log("items", items);
        res.json(items)
      })
    .catch(error => {
      console.log("error", error);
      next(error)
    });
}*/

module.exports.detail = (req, res, next) => res.json(req.item)

module.exports.delete = (req, res, next) => {
    Item.deleteOne({ _id: req.item.id })
      .then(() => res.status(204).send())
      .catch((error) => next(error));
  };
  
  module.exports.create = (req, res, next) => {
    Item.findOne({ title: req.body.title })
      .then(item => {
        if (item) {
          next(createError(400, { errors: { title: 'This item already exists' } }));
        } else {
          return item.create({
            ...req.body,
            picture: req?.file?.path
          })
          .then((item) => {res.status(201).json(item)})
        }
      })
      .catch((error) => next(error));
  };
  
  module.exports.edit = (req, res, next) => {
    const data = {image,title,description,price,category} = req.body;
    const item = req.item;
    Object.assign(item, data);
    item.save()
      .then((item) => res.json(item))
      .catch((error) => next(error));
  };