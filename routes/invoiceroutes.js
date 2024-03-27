const express = require('express');
const router = express.Router();
const invoice = require('./../models/invoice');

router.use(express.urlencoded({ extended: true }));



module.exports = router;