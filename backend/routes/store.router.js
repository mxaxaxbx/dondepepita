const express = require('express');
const router  = express.Router();

const { register, list } = require('../controllers/store.controller');

console.log('Registring store routing /api/stores');

console.log('[POST] /register ');
router.post('/register', register);

console.log('[GET] /list ');
router.get('/list', list);

console.log('\n');

module.exports = router;
