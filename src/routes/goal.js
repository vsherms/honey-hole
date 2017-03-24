import express from 'express';
import Goal from '../models/goal';

const goalRoutes = express.Router();

goalRoutes.post('/goals',function(req, res){
  let goal = new Goal();
  goal.value = req.body.value;
  goal.lifeGoal = req.body.lifeGoal;
  goal.save(function(err, goal){
    if(err){
      res.send(err);
    } else {
      res.json(goal);
    }
  });
});

goalRoutes.get('/goals', function(req, res, next){
  Goal.find(function(err, goals){
    if(err){
      next(err);
    } else {
      res.json(goals);
    }
  });
});

goalRoutes.delete('/goals/:goal_id', function(req, res){
  Goal.remove({_id: req.params.goal_id}, function(err, goal){
    if(err){
      console.log(err);
    } else {
      res.json({title: 'Congrats you completed that goal! its gone forever!'});
    }
  });
});

module.exports = goalRoutes;
