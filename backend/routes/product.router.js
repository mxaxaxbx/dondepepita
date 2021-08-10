const express = require('express');
const router  = express.Router();

const { register, list } = require('../controllers/product.controller');

console.log('Registring store routing /api/products');

console.log('[POST] /register ');
router.post('/register', register);

console.log('[GET] /list ');
router.get('/list', list);

console.log('\n');

module.exports = router;
