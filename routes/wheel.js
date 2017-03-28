import express from 'express';
import Wheel from '../models/wheel';

const wheelRoutes = express.Router();

wheelRoutes.post('/wheels',function(req, res){
  let wheel = new Wheel();
  wheel.date = req.body.date;
  wheel.segs = req.body.segs;
  wheel.save(function(err, wheel){
    if(err){
      res.send(err);
    } else {
      res.json(wheel);
    }
  });
});

wheelRoutes.get('/wheels', function(req, res, next){
  Wheel.find(function(err, wheels){
    if(err){
      next(err);
    } else {
      res.json(wheels);
    }
  });
});

wheelRoutes.delete('/wheels/:wheel_id', function(req, res){
  Wheel.remove({_id: req.params.wheel_id}, function(err, wheel){
    if(err){
      console.log(err);
    } else {
      res.json({title: 'Wheel was successfully deleted!'});
    }
  });
});

export default wheelRoutes;
