const express = require('express');
const {getServices, createServices} = require('../controller/services.js');

const router = express.Router();


router.get('/', getServices)
router.post('/', createServices)


module.exports = router