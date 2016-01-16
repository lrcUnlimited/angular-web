/**
 * Created by li on 2016/1/11.
 */
var db = require('../helpers/db_connection.js');
var User = function (data) {
    this.data = data;
}

User.prototype.userNameExist = function (nickName, callback) {
    db.pool.getConnection(function (err, connection) {
        if (err) {
            return callback(err);
        }
        connection.query("select * from account where nickName=?", [nickName], function (err, rows) {
            if (err) {
                return callback(err);
            }
            callback(null, rows);
        })

    });
}

module.exports = User;