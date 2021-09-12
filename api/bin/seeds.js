
const mongoose = require('mongoose');

const items = require('../data/items.json');
const Item = require('../models/Item.model');


require('../config/db.config');

mongoose.connection.once('open', () => {
  mongoose.connection.dropDatabase()
    .then(() => {
      return Item.create(items)
    })
    .then(items => Item.create(items))
    .catch(error => console.error('An error ocurred running seeds', error))
    .then(() => mongoose.disconnect())
});