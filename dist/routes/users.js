'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

const router = (0, _express.Router)();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

exports.default = router;