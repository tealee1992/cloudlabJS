var models = require('../db');
var express = require('express');
var moment = require('moment')
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
var jwt = require('jwt-simple')
var corslist = require('./cors')

const jwtTokenSecret = 'cloudlab'
// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();
var entries = {
  "code": "",
  "data":"",
  "msg":""
};
// var jsonWrite = function(res, ret) {
//     if(typeof ret === 'undefined') {
//         res.send('err')
//     } else {
//         res.json(ret);
//     }
// };
// 增加用户接口

Register = function(req, cb) {
    var sql_name = $sql.user.select_name
    var sql_add = $sql.user.add;
    var params = req.body;
    console.log(params);

    conn.query(sql_name,params.username,function(err,result) {
        if(err) {
            console.log(err)
        }
        if(result===undefined) {
            conn.query(sql_add,[params.username,params.password,1], function(err, result) {
                if(err) {
                    console.log(err)
                }
                if(result) {
                    entries.code = 'success'
                    cb(true,entries)
                }
            })
        }else {
            console.log("222222")
            entries.code = 'occupied'
            console.log(entries)
            cb(false,entries)    
        }
    })    
}

router.post('/register', (req, res, next) => {
    let reqOrigin = req.headers.origin
    if(corslist.isOriginAllowed(reqOrigin)) {
        //设置response header
        res.header("Access-Control-Allow-Origin", reqOrigin);
        res.header("Access-Control-Allow-Credentials", 'true');

        // Register(req, function (success, doc) {
        //     res.send(doc)
        // })
        var sql_name = $sql.user.select_name
        var sql_add = $sql.user.add;
        var params = req.body;
        console.log(params);

        conn.query(sql_name,params.username,function(err,result) {
            if(err) {
                console.log(err)
            }
            if(result.length==0) {
                conn.query(sql_add,[params.username,params.password,1], function(err, result) {
                    if(err) {
                        console.log(err)
                    }
                    if(result) {
                        entries.code = 'success'
                        res.send(entries)
                    }
                })
            }else {
                console.log("222222")
                entries.code = 'occupied'
                console.log(entries)
                res.send(entries)    
            }
        })

    }else {
        entries.code = 'illegle request'
        res.send(entries)
    }
   
});


Login = function(req, cb) {
    var sql_name = $sql.user.select_name;
    var sql_password = $sql.user.select_password;
    var sql_roleid = $sql.user.select_roleid;
    var params = req.body;

    conn.query(sql_name,params.username,function(err, result) {
        if(err) {
            console.log(err)
        }
        
        if(result.length==0) {
            entries.code = 'nameerror'
            cb(false,entries)    //查询不出username
        }else {
            conn.query(sql_password,params.username, function(err, result) {
                if(err) {
                    console.log(err)
                }
                if(result[0].password!==params.password) {
                    entries.code = 'passerror'
                    cb(false,entries)    //username正确后，password错误
                }else {
                    conn.query(sql_roleid,params.username, function(err, result) {
                        if(err) {
                            console.log(err)                            
                        }else {
                            let roleid = result[0].roleid
                            entries.code = 'success'
                            var data = {
                                "username" : "",
                                "role" : "",
                            }
                            data.username = params.username
                            data.role = $sql.role[roleid]
                            entries.data = data
                            var time = moment().add(1,'days').valueOf()
                            entries.token = jwt.encode({
                                iss: params.username,
                                exp: time
                            },jwtTokenSecret)
                            cb(true,entries)
                            }

                    })
                }
            })
        }
    })
    
}
//查找用户接口
router.post('/login', (req, res, next) => {

    let reqOrigin = req.headers.origin
    if(corslist.isOriginAllowed(reqOrigin)) {
        //设置response header
        res.header("Access-Control-Allow-Origin", reqOrigin);
        res.header("Access-Control-Allow-Credentials", 'true');

        Login(req, function (success, doc) {
            res.send(doc)
        })
    }else {
        entries.code = 'illegle request'
        res.send(entries)
    }


});

// isLogin
router.post('/islogin', function(req, res, next) {

    let reqOrigin = req.headers.origin
    if(corslist.isOriginAllowed(reqOrigin)) {
        //设置response header
        res.header("Access-Control-Allow-Origin", reqOrigin);
        res.header("Access-Control-Allow-Credentials", 'true');

        authority(req, function (success, doc) {
            res.send(doc)
        })
    }else {
        entries.code = 'illegle request'
        res.send(entries)
    }
});

authority = function (req, cb) {
    var sql_name = $sql.user.select_name;
    var params = req.body;    
  var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['access-token']
  if (token) {
    try {
          var decoded = jwt.decode(token, jwtTokenSecret)
          if (decoded.exp <= Date.now()) {
            entries.code = 99
            cb(false, entries)
          } else {
                entries.code = 0
                cb(true,entries)    
          }
      }catch (err) {
      console.log(err)
    }
  } else {
    entries.code = 99
    cb(false, entries)
  }
}
module.exports = router;