


const apiRoutes = express.Router();


Router.post('/wheels',function(req, res){
  let wheel = new Wheel();
  wheel.date = req.body.date;
  wheel.value1  = req.body.value1;
  wheel.score1 = req.body.score1;
  wheel.value2 = req.body.value2;
  wheel.score2 = req.body.score2;
  wheel.value3  = req.body.value3;
  wheel.score3 = req.body.score3;
  wheel.value4  = req.body.value4;
  wheel.score4 = req.body.score4;
  wheel.value5  = req.body.value5;
  wheel.score5 = req.body.score5;
  wheel.value6  = req.body.value6;
  wheel.score6 = req.body.score6;
  wheel.value7  = req.body.value7;
  wheel.score7 = req.body.score7;
  wheel.value8  = req.body.value8;
  wheel.score8 = req.body.score8;
  // console.log(req.body.user);
  wheel.save(function(err, wheel){
    if(err){
      res.send(err);
    } else {
      res.json(wheel);
    }
  });
});
