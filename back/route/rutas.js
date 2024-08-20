const vistas = require('../controller/user-case/pos/vistas');
const express = require('express');
const router = express.Router();

router.get('/', vistas.pos);

module.exports = router;