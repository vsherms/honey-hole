import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
const bodyParser = require('body-parser');
const uriUtil = require('mongodb-uri');
const User = require('../models/user');
const Wheel = require('../models/wheel');
const jwt = require('jsonwebtoken');
// const authConfig = require('./authConfig');
const morgan = require('morgan');
const apiRoutes = express.Router();
const hash = require('password-hash');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost/gifs';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};
mongoose.connect(mongooseUri, options);
const app = express();
// app.set('superSecret', authConfig.secret);
/* eslint-disable no-console */
const compiler = webpack(config);
const userRoutes = require('../routes/user');
const wheelRoutes = require('../routes/wheel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));
app.use(morgan('dev'));
app.post('/newuser', function(req, res) {
  let user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hash.generate(req.body.password)
  });
  user.save(function(err) {
    if (err) throw err;
    console.log('User saved successfully');
    res.json({ success: true,
               user: user});
  });
});
// apiRoutes.post('/authenticate', function(req, res) {
//   User.findOne({
//     username: req.body.username
//   }, function(err, user) {
//     if (err) throw err;
//     if (!user) {
//       res.json({ success: false, message: 'Authentication failed. User not found.'});
//     } else if(user) {
//       // console.log(req.body.username, req.body.password, user);
//       if (!hash.verify(req.body.password, user.password)) {
//         res.json({ success: false, message: 'Authentication failed. Incorrect password.'});
//       } else {
//         let token = jwt.sign(user, app.get('superSecret'), {
//           expiresIn: 1440
//         });
//         res.json({
//           success: true,
//           message: 'Enjoy your token!',
//           token: token,
//           userId: user._id
//         });
//       }
//     }
//   });
// });
// apiRoutes.use(function(req,res,next) {
//    let token = req.body.token || req.query.token || req.headers['x-access-token'];
//   if(token) {
//     jwt.verify(token, app.get('superSecret'), function(err, decoded) {
//       if(err) {
//         return res.json({success: false, message: 'Failed to authenticate token.'});
//       } else {
//         req.decoded = decoded;
//         next();
//       }
//     });
//   } else {
//     return res.status(403).send({
//       success: false,
//       message: 'No token provided.'
//     });
//   }
// });
apiRoutes.get('/', function(req,res) {
  res.json({ message: 'Welcome to the coolest API on earth!' });
});
// apiRoutes.get('/users', function(req, res) {
//   User.find({}, function(err, users) {
//     res.json(users);
//   });
// });
app.post('/wheels',function(req, res){
  let wheel = new Wheel( {
  date: req.body.date,
  value1: req.body.value1,
  score1: req.body.score1,
  value2: req.body.value2,
  score2: req.body.score2,
  value3: req.body.value3,
  score3: req.body.score3,
  value4: req.body.value4,
  score4:req.body.score4,
  value5: req.body.value5,
  score5: req.body.score5,
  value6: req.body.value6,
  score6: req.body.score6,
  value7: req.body.value7,
  score7: req.body.score7,
  value8: req.body.value8,
  score8: req.body.score8
})
  .save(function(err){
    if(err) throw err;
      res.json(wheel);
    }
  });
});

app.get('/wheels', function(req, res, next){
  Wheel.find(function(err, wheels){
    if(err){
      next(err);
    } else {
      res.json(wheels);
    }
  });
});
app.delete('/wheels/:wheel_id', function(req, res){
  Wheel.remove({_id: req.params.wheel_id}, function(err, wheel){
    if(err){
      console.log(err);
    } else {
      res.json({title: 'Wheel was successfully deleted!'});
    }
  });
});
app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, '../index.html'));
});
app.use('/user', userRoutes);
app.use('/wheel', wheelRoutes);

const port = 3000;
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
