var express = require('express');
var moment = require('moment');
require('moment-timezone');
var router = express.Router();

moment.tz.setDefault("Asia/Seoul");

const work_week = 40;
var now_time = moment().format("YYYY년 MM월 DD일 HH시 mm분 ss초");

// time test hn
// /time
router.post('/', function(req, res, next) {
  console.log('--req--');
  // var a = JSON.parse(req.body);
  // console.log(a);
  // console.log(a.value);
  // console.log(typeof a.value);
  // var input_time = moment('03-11', "HH-MM").format();
  var s_time = req.body.action.params.startTime;
  var e_time = req.body.action.params.endTime;
  console.log(s_time + "  " + e_time);

  kakao_data = {
    "version": "2.0",
    "template": {
      "outputs": [{
        "simpleText": {
          "text": "하늘님 " + "현재 시각 " + now_time
        }
      }, {
        "simpleText": {
          "text": "시작시간 : " + s_time + "종료시 : " + e_time
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
