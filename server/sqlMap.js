var sqlMap = {
    user: {
        add: 'insert into user( username, password, roleid) values ( ?, ?, ?)',
        select_name: 'SELECT * from user where username = ?',    //查询 username
        select_password: 'SELECT password from user where username = ?',      //查询 password
        //select_uid: 'SELECT uid from user where username = ?'
        select_roleid: 'SELECT roleid from user where username = ?'  //查询roleid，0表示管理员权限。
        														   //1表示学生
    },
    role: [
    	'ADMIN',
    	'STUDENT'
    ]
}
module.exports = sqlMap;