const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    name        : { type : String, required : true },
    address     : { type : String, required : true },
    city        : { type : String, required : true },
    date        : { type : Date, default : Date.now() },
    status      : { type : Boolean, required : true },
});

const store = mongoose.model("store",  storeSchema);

module.exports = store;
