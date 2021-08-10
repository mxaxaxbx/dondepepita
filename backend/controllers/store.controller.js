const storeModel = require('../models/store.model');

const register = async ( req, res ) => {
    if( !req.body.name || !req.body.address || !req.body.city ) return res.status(400).send({
        code    : '101',
        message : 'Incomplete data.',
    });

    const existingStore = await storeModel.findOne( { name : req.body.name } );

    if( existingStore ) return res.status(400).send({
        code : '102',
        message : 'Store already exists.',
    });

    const store = new storeModel({
        name        : req.body.name,
        address     : req.body.address,
        city        : req.body.city,
        status    : true,
    });

    const result = await store.save();

    if( !result ) return res.status(400).send({
        code : '103',
        message : 'Failed to save store.',
    });

    return res.status(201).send( { store } );
};

const list = async ( req, res ) => {
    const stores = await storeModel.find();
    return res.status(200).send( { data : stores } );
};

module.exports = { register, list };
