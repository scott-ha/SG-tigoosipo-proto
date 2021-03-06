var express = require('express');
var router = express.Router();


var kakao_data, kakao_res;

// show personal QR
// /qr
router.post('/', function(req, res, next) {
  console.log('--req--');
  console.log(req);

  kakao_data = {
    "version": "2.0",
    "template": {
      "outputs": [{
        "simpleText": {
          "text": "하늘님 QR 코드입니다."
        }
      }, {
        "simpleImage" : {
          "imageUrl" : "https://qrcodethumb-phinf.pstatic.net/20200827_142/1598457368148n45RH_PNG/0DJT5.png"
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
