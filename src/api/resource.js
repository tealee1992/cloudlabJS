import config from '../config'

var NODE_API = config.NODE_API_ROOT
var GO_API = config.GO_API_ROOT

export default {
  login: `${NODE_API}login`,
  register: `${NODE_API}register`,
  islogin: `${NODE_API}islogin`,
  setimage: `${GO_API}setimage`,
  getlabimage: `${GO_API}getlabimage`,
  init_student: `${GO_API}init`,
  create: `${GO_API}create`,
  save: `${GO_API}checkpoint`,
  delete: `${GO_API}destroy`,
  reload: `${GO_API}restore`,
  // getCaptcha: `${API_ROOT}getCaptcha`,
  // searchJobs: `${API_ROOT}searchJobs`,
  // addStarJob: `${API_ROOT}addStarJob`,
  // addFollowComp: `${API_ROOT}addFollowComp`,
  // cancleStar: `${API_ROOT}cancleStar`,
  // getStarJob: `${API_ROOT}getStarJob`,
  // getChart: `${API_ROOT}getChartData`
}