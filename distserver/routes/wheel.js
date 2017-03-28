'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _wheel = require('../models/wheel');

var _wheel2 = _interopRequireDefault(_wheel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wheelRoutes = _express2.default.Router();

wheelRoutes.post('/wheels', function (req, res) {
  var wheel = new _wheel2.default();
  wheel.date = req.body.date;
  wheel.segs = req.body.segs;
  wheel.save(function (err, wheel) {
    if (err) {
      res.send(err);
    } else {
      res.json(wheel);
    }
  });
});

wheelRoutes.get('/wheels', function (req, res, next) {
  _wheel2.default.find(function (err, wheels) {
    if (err) {
      next(err);
    } else {
      res.json(wheels);
    }
  });
});

wheelRoutes.delete('/wheels/:wheel_id', function (req, res) {
  _wheel2.default.remove({ _id: req.params.wheel_id }, function (err, wheel) {
    if (err) {
      console.log(err);
    } else {
      res.json({ title: 'Wheel was successfully deleted!' });
    }
  });
});

exports.default = wheelRoutes;