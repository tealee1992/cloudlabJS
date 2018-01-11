# cloudlab

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 其他
npm install axios

npm install element-ui -S

npm install vuex --save
npm i --save lodash

##服务端express
npm install express body-parser
npm install jwt-simple
npm i cors
npm i moment
##数据库mysql
npm install mysql


create database cloudlab character set utf8;
use cloudlab;

create table user(  
uid int not null primary key auto_increment,  
username varchar(100) not null,  
password varchar(100) not null,
roleid int not null   
)
ENGINE=InnoDB DEFAULT CHARSET=utf8; 

create table labimage(   
title varchar(50) not null,  
imagename varchar(100) not null
)
ENGINE=InnoDB DEFAULT CHARSET=utf8;

#部署
使用pm2