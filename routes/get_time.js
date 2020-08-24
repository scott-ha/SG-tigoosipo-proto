var express = require('express');
var moment = require('moment');
require('moment-timezone');
var router = express.Router();

moment.tz.setDefault("Asia/Seoul");

const work_week = 40;
var now_time = moment().format("YYYY년 MM월 DD일 HH시 mm분 ss초");
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(moment().format("YYYY-MM-DD-HH-mm-ss"));//2018-11-18T22:19:20+09:00
  res.render('index', {
    title: 'Express'
  });
});

// time test hn
router.post('/time', function(req, res, next) {
  console.log('--req--');
  // var a = work_week - now_time;
  // var time_1 = JSON.parse(req.body.action.params.time);
  // time_1 = timq_1.value;
  var a = JSON.parse(req.body.action.params.startTime);
  console.log(a);
  console.log(a.value);
  console.log(typeof a.value);
  var input_time = moment('03-11', "HH-MM").format();
  kakao_data = {
    "version": "2.0",
    "template": {
      "outputs": [
        {
        "simpleText" : {
          "text" : "하늘님 " + "현재 시각 " + now_time
        }
      },{
        "simpleText": {
          "text": input_time
        }
      }, {
        "simpleText": {
          "text": moment().add(3, 'H').format("MM월 DD일 HH시 mm분") + "까지 근무입니다."
        }
      }]
    }
  }
  kakao_res = kakao_data;
  res.status(200).send(kakao_res);
  console.log('--res--');
  console.log(kakao_res);
  // initialize
  kakao_data,
  kakao_res = '';

});

module.exports = router;
