import Axios from 'axios'
import API from './resource'

Axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8'
export default {
  login (data) {
    return Axios.post(API.login, data)
  },
  register (data) {
    return Axios.post(API.register, data)
  },
  islogin (data) {
  	return Axios.post(API.islogin, {access_token: data})
  },
  setimage (data) {
  	return Axios.post(API.setimage, data)
  },
  getlabimage () {
    return Axios.get(API.getlabimage)
  },
  init_student (data) {
    return Axios.post(API.init_student, data)
  },  
  create (data) {
  	return Axios.post(API.create, data)
  },
  save (data) {
  	return Axios.post(API.save, data)
  },
  delete (data) {
  	return Axios.post(API.delete, data)
  },
  reload (data) {
  	return Axios.post(API.reload, data)
  }
}