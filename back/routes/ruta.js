
const vistas =require("../controller/user-case/pos/vistas")

const express = require('express');
// eslint-disable-next-line new-cap
const router =express.Router();

router.get('/pos', vistas.pos)

module.exports=router;