// node 后端服务器

const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
var cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//跨域
app.use(cors())

// 后端api路由
app.use('/api', userApi);

// 监听端口
app.listen(9900);
console.log('success listen at port:9900......');