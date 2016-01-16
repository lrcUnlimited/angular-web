var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.post('/validateNickName', function (req, res, next) {
    var nickName = req.body.nickName;
    var user = new User({"nickName": nickName});
    user.userNameExist(nickName, function (err, rows) {
        if (err) {
            console.log(err);
            res.end("²éÑ¯Êý¾Ý¿â´íÎó");
        } else {
            res.status(200).json(rows);
        }

    })

})

module.exports = router;
