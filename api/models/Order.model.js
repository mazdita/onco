const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/User.model');
const Item = require('../models/Item.model');

const orderSchema= new Schema(
    {
      buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      items: [{
          id: String,
          name: String,
          quantity: Number,
          price: Number
        }]     
    },
    { timestamps: true,
      toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret.__v;
        delete ret._id;
        return ret;
      }
    }
  }
)

const Order = mongoose.model('Order',orderSchema)
module.exports = Order