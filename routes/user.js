import express from 'express';
import User from '../models/user';
const userRoutes = express.Router();


userRoutes.post('/authenticate', function(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;
    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.'});
    } else if(user) {
      // console.log(req.body.username, req.body.password, user);
      if (!hash.verify(req.body.password, user.password)) {
        res.json({ success: false, message: 'Authentication failed. Incorrect password.'});
      } else {
        let token = jwt.sign(user, app.get('superSecret'), {
          expiresIn: 1440
        });
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token,
          userId: user._id
        });
      }
    }
  });
});

userRoutes.use(function(req,res,next) {
   let token = req.body.token || req.query.token || req.headers['x-access-token'];
  if(token) {
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {
      if(err) {
        return res.json({success: false, message: 'Failed to authenticate token.'});
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  }
});

userRoutes.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});
