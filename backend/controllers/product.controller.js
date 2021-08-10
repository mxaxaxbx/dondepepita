const productModel = require('../models/products.model');
const storeModel   = require('../models/store.model');
const mongoose = require('mongoose');

const register = async ( req, res ) => {
    if( !req.body.name || !req.body.price || !req.body.code || !req.body.description || !req.body.quantity || !req.body.store_id ) return res.status(400).send({
        code    : 101,
        message : 'Incomplete data.',
    });

    try {
        if( req.body.store_id.length !== 24 ) return res.status(400).send({
            code : 104,
            message : 'Invalid store ID',
        });

        const existingProduct = await productModel.findOne( { code : parseInt( req.body.code ) } );
        
        if( existingProduct ) return res.status(400).send({
            code : 102,
            message : 'Product already exists.',
        });
        
        const store_id = new mongoose.Types.ObjectId( req.body.store_id );
        
        const existStore = await storeModel.findById( mongoose.Types.ObjectId( store_id ) );
        
        if( !existStore ) return res.status.status(400).send({
            code : 105,
            message : 'Enter a valid store'
        });

        const product = new productModel({
            name        : req.body.name,
            price       : parseFloat( req.body.price ),
            code        : parseInt( req.body.code ),
            description : req.body.description,
            status      : true,
            quantity    : parseInt( req.body.quantity ),
            storeId     : store_id,
        });

        const result = await product.save();

        if( !result ) return res.status(400).send({
            code : '103',
            message : 'Failed to save product.',
        });

        return res.status(201).send( { product } );

    } catch(e) {
        console.log(`Product controller register error: ${ e }`);

        return res.status(400).send({
            code : 104,
            message : 'An error ocurred. Please try again later'
        });
    }

    
};

const list = async ( req, res ) => {
    const products = await productModel.find();
    return res.status(200).send( { data : products } );
};

module.exports = { register, list };
