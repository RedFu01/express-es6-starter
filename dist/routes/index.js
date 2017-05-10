'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

const router = (0, _express.Router)();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({
    a: 'b',
    b: 'c',
    c: '#'
  });
});

exports.default = router;