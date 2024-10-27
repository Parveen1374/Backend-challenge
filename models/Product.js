const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name : {type : String, required : true},
    price : {type : Number, required : true},
    quality : {type : String, required : true}
})

const Product = mongoose.model('products', ProductSchema)

module.exports = Product;