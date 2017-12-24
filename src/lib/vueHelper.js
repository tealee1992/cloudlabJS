import api from '../api/index'
import router from '../router'
import store from '../vuex/store'
import Promise from 'promise-polyfill'

// 显示提示框
export const showMsg = (that, close, msg, type) => {
  that.$message({
    showClose: close,
    message: msg,
    type: type
  })
}

// doLogin
export const doLogin = (that, data) => {
  const authUser = {}
  api.login(data)
  .then(res => {
    if (res.data.code === 'success') {
      authUser.data = res.data.data;
      authUser.token = res.data.token;
      store.commit('showlogin')
      window.localStorage.setItem('User', JSON.stringify(authUser))
      showMsg(that, true, '登录成功', 'success')

      if(authUser.data.role === 'ADMIN') {
        router.push('/admin');
      }else {
        console.log("before")
        router.push('/student');
      }
    } else {
      showMsg(that, true, '登录失败，账号或密码错误', 'error')
    }
  })
  .catch(err => {
    console.log(err)
  })
}

// doRegister
export const doRegister = (that, data) => {
  api.register(data)
  .then(res => {
    console.log(res)
    if (res.data.code === 'success') {
      showMsg(that, true, '注册成功', 'success')
      // router.push({name: 'login'})
      router.push('login')
    } else if (res.data.code === 'occupied') {
      showMsg(that, true, '用户名已被注册', 'error')
    }else {
      showMsg(that, true, res.data, 'error')
    }
  })
  .catch(err => {
    console.log(err)
  })
}

export const setImage = (that, data) => {

    if(data.image == ""){
      showMsg(that, true,'请选择镜像！', 'error')
    }else{
        that.$confirm('此操作将替换当前实验镜像，是否继续？','提示',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return new Promise(function(resolve,reject){
          api.setimage(data)
          .then(res => {
            if (res.data.code === 'success') {
              showMsg(that, true,'替换成功！', 'success')
              console.log("setImage: "+data.image)
            }else {
              showMsg(that, true,'替换失败！', 'error')
            }
          })          
        })

      }).catch(() => {
        that.message({
          type: 'info',
          message: '已取消操作'
        });
      });
    }

}
export const getLabImage = (that) => {
  
  return new Promise(function(resolve,reject) {
      api.getlabimage()
      .then(res => {
            if (res.data.code === 'success') {
              console.log("helper:"+res.data.data)
              store.commit('labimage', res.data.data)

              resolve();
            }else {
              reject();
            }    
      })
  })

}

export const Init_student = (that,data) => {
  console.log("init_student:"+data.userid)
  return new Promise(function (resolve,reject) {
    api.init_student(data)
    .then(res => {
        if (res.data.code === 'success') {

            console.log("status:"+res.data.data.status)
            var status = res.data.data.status
            var url = res.data.data.url
            store.commit('setconStatus', status)
            store.commit('setlaburl', url)
            resolve();
        }else {

            reject();
        }    
    })
  })  
}

export const Create =(that, data) => {
  console.log("vuehelper:"+data.userid)

  return new Promise(function (resolve,reject) {
    api.create(data)
    .then(res => {
        if (res.data.code === 'success') {
            showMsg(that, true,'创建成功！', 'success')
            console.log("helper:"+res.data.data)
            store.commit('setlaburl', res.data.data)
            resolve();
        }else {
            showMsg(that, true,'创建失败！', 'error')
            reject();
        }    
    })
  })
}

export const Save =(that, data) => {
  console.log("vuehelper:"+data.userid)

  return new Promise(function (resolve,reject) {
    api.save(data)
    .then(res => {
        if (res.data.code === 'success') {
            showMsg(that, true,'保存成功！', 'success')
            console.log("helper:"+res.data.data)
            resolve();
        }else {
            showMsg(that, true,'保存失败！', 'error')
            reject();
        }    
    })
  })
}

export const Delete =(that, data) => {
  console.log("vuehelper:"+data.userid)

  return new Promise(function (resolve,reject) {
    api.delete(data)
    .then(res => {
        if (res.data.code === 'success') {
            showMsg(that, true,'销毁成功！', 'success')
            console.log("helper:"+res.data.data)
            resolve();
        }else {
            showMsg(that, true,'销毁失败！', 'error')
            reject();
        }    
    })
  })
}

export const Reload =(that, data) => {
  console.log("vuehelper:"+data.userid)

  return new Promise(function (resolve,reject) {
    api.reload(data)
    .then(res => {
        if (res.data.code === 'success') {
            showMsg(that, true,'恢复成功！', 'success')
            console.log("helper:"+res.data.data)
            resolve();
        }else {
            showMsg(that, true,'恢复失败！', 'error')
            reject();
        }    
    })
  })
}