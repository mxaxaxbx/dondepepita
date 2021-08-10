const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name        : { type : String, required : true },
    price       : { type : Number, required : true },
    code        : { type : Number, required : true },
    description : { type : String, required : true },
    date        : { type : Date, default : Date.now() },
    status      : { type : Boolean, required: true },
    quantity    : { type : Number, required: true },
    storeId     : { type: mongoose.Schema.Types.ObjectId, ref : "store" },
});

const product = mongoose.model("product",  productSchema);

module.exports = product;
