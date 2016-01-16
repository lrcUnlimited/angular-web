/**
 * Created by li on 2016/1/11.
 */
var mysql = require('mysql');
var db = (function () {
    var dbInstance;

    function createDBInstance() {
        var pool = mysql.createPool({
            connectionLimit: 5,
            host: 'localhost',
            user: 'root',
            password: '19901023',
            database: 'free'
        });
        return pool;
    }

    return {
        getInstance: function () {
            if (!dbInstance) {
                dbInstance = createDBInstance();
            }
            return dbInstance;
        }
    }
})();
module.exports.pool = db.getInstance();