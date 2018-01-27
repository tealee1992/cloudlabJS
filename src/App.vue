<template>
  <div id="wrapper">
    <nav class="navbar navbar-default nav-style">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-cloud">
            CLOUDLAB
          </i>
        </a>
        <ul class="nav navbar-nav">
          <li v-for="(item, index) in menu"><router-link :to="route[index]" class="router-link" >{{item}}</router-link></li>        
<!--           <li v-for="(item, index) in menu"><router-link :to="route[index]" class="router-link" :class="{'red-link':index===isActive}" >{{item}}</router-link></li> -->
<!--           <li><router-link to="/Home" class="router-link" :class="{'red-link':1===isActive}">Home</router-link></li>
          <li><router-link to="/admin" class="router-link" :class="{'red-link':2===isActive}">Console</router-link></li>
          <li><router-link to="/container" class="router-link" :class="{'red-link':3===isActive}">Containers</router-link></li>
          <li><router-link to="/student" class="router-link" :class="{'red-link':4===isActive}">LabTable</router-link></li> -->
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" v-on:click="logout()" class="glyphicon glyphicon-log-out router-link" v-if="checkLogin">Logout</a></li>
<!--           <li ><router-link to="/Register" class="glyphicon glyphicon-user"> 注册</router-link></li>
          <li ><router-link to="/" class="glyphicon glyphicon-log-in"> 登录</router-link></li> -->
        </ul>
      </div>
    </nav>

    <div class="container">
      <div>
        <router-view></router-view>
      </div>
<!--       <div class="col-sm-3">
        <sidebar :time="totalTime"></sidebar>
      </div> -->
<!--        <div class="col-sm-9">
                <router-view v-on:deleteTime="deleteTime" v-on:timeUpdate="timeUpdate"></router-view>
       </div> -->
    </div>
  </div>
</template>

<script>
import router from './router'
import store from './vuex/store'
export default {
  data() {
    return {
      isActive: 0,
      menu: ['Home','Images','Containers','Stats','Ports','LabTable'],
      route: ['/Home','/admin','/container','/stats','/ports','/student'],
    }
  },
  name: 'app',
  methods: {
    logout:function() {
      localStorage.removeItem("User");
      router.push({name: 'login'});
      store.commit('showlogin');
    },

  },
  events: {
    switch: function () {
      console.log(this.$route.path)
      this.$route.forEach(function(value, index, array) {
        if(this.$route.path == value){
          this.isActive = index
        }
      });
    }
  },
  computed: {
    checkLogin() {
      return this.$store.state.isLoggedIn;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav-style {
  background: #006e93;
}
.nav-style div a i {
  color: white!important;
}
.router-link{
  color: white!important;
  margin-left: 40px;
}
/*.red-link {
  color: #000!important;
}*/
.router-link-active {
  color: #000!important;  
}
</style>
