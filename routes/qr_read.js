var express = require('express');
var router = express.Router();


var kakao_data, kakao_res;

// show personal QR
// /qr
router.post('/', function(req, res, next) {
  console.log('--req--');
  console.log(req);
  //챗봇 바코드 플러그인의 코드 정보
  var qr_read = req.body.action.params.qr_read;
  console.log('qr_read', qr_read);



  kakao_data = {
    "version": "2.0",
    "template": {
      "outputs": [{
        "simpleText": {
          "text": "해당 QR코드는 하늘 회원 입니다. 좌석 선택을 이용하거나 출입문 관리를 할 수 있습니다."
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
