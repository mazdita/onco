const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
        image: {
            type: String,
            default: 'https://www.banderasvdk.com/fotos/banderas/200-bandera-cancer-lazo.jpg'
        },
        title: {
            type: String
        },
        description: {
            type: String
        },
        price: {
            type: Number
        },
        category: {
            type: String
        }
    },

    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: function (doc, ret) {
                ret.id = ret._id;
                delete ret.__v;
                delete ret._id;
                return ret;
            },
        },
    }
)

const Item = mongoose.model('Item', itemSchema)
module.exports = Item