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
  var s_time = req.body.action.params.startTime;
  var e_time = req.body.action.params.endTime;
	var s_time_date = s_time.substring(10, 20);
	var s_time_time = s_time.substring(21, 26);
	var s_time = s_time_date + ' ' + s_time_time;
	var e_time_date = e_time.substring(10, 20);
	var e_time_time = e_time.substring(21, 26);
	var e_time = e_time_date + ' ' + e_time_time;
	console.log('s_time', s_time, typeof s_time);

	//moment
	var s_time1 = moment(s_time, 'YYYY-MM-DD HH:mm');
	var e_time1 = moment(e_time, 'YYYY-MM-DD HH:mm');

	var diffTime = {
		day: moment.duration(e_time1.diff(s_time1)).days(),
		hour: moment.duration(e_time1.diff(s_time1)).hours(),
		minute: moment.duration(e_time1.diff(s_time1)).minutes()
	}


  kakao_data = {
    "version": "2.0",
    "template": {
      "outputs": [{
        "simpleText": {
          "text": "하늘님 " + "현재 시각 " + now_time
        }
      }, {
        "simpleText": {
          "text": "시작시간 : " + s_time + " 종료시간 : " + e_time
        }
      }, {
        "simpleText": {
          "text": "총 예약 기간 : " + diffTime.day + "일 " + diffTime.hour + "시간 " + diffTime.minute + "분입니다."
        }
      }],
      "quickReplies": [{
                "action": "block",
                "label": "좌석 선택",
                "blockId": "5f436aeca812530001ad9f29"
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
