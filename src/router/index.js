import Vue from 'vue'
import api from '../api'
import store from '../vuex/store'
import Login from '@/components/login/Login.vue'
import Register from '@/components/login/Register.vue'
import Admin from '@/components/admin/admin.vue'
import Grid from '@/components/grid/grid.vue'
import Stats from '@/components/admin/stats.vue'
import Ports from '@/components/admin/ports.vue'
import Container from '@/components/admin/container.vue'
import Student from '@/components/student/student.vue'
import Home from '@/components/Home.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//注册插件
Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
		{
			path: '/Home',
			component:Home,
		},
		{
			path: '/',
			component:Login
		},
		{
			path:'/login', 
			name:'login',
			component:Login
		},
		{
			path:'/register',
			name:'register',
			component:Register
		},
		{
			path:'/admin',
			name:'admin',
			component:Admin,
			meta: {requiresAuth: true, adminAuth: true, studentAuth: false},
			children: [
				{
					path:"",name:'grid', component:Grid,
					meta: {requiresAuth: true, adminAuth: true, studentAuth: false},
				}
			]
		},
		{
			path:'/stats',
			name:'stats',
			component:Stats,
			meta: {requiresAuth: true, adminAuth: true, studentAuth: false}
		},
		{
			path:'/ports',
			name:'ports',
			component:Ports,
			meta: {requiresAuth: true, adminAuth: true, studentAuth: false}
		},				
		{
			path:'/container',
			name:'container',
			component:Container,
			meta: {requiresAuth: true, adminAuth: true, studentAuth: false}
		},
		{
			path:'/student',
			name:'student',
			component:Student,
			meta: {requiresAuth: true, adminAuth: false, studentAuth: true}
		},		
]

const router = new VueRouter({routes, mode:'history'})

import {showMsg} from '@/lib/vueHelper'
router.beforeEach((to, from, next) => {
	if(to.meta.requiresAuth) {
	    const authUser = JSON.parse(window.localStorage.getItem('User'))
	    if(!authUser || !authUser.token) {
	    	next({name:'login'})
	    }
	    console.log("before2")
	    api.islogin(authUser.token).then( res => {
	    	console.log("after")
		    if(res.data.code == 99) {
		      next({name:'login'})
		    }else {
		    	if(!store.state.isLoggedIn) {
		  			store.commit('showlogin')
		  		}
			    if(to.meta.adminAuth) {
		    		const authUser = JSON.parse(window.localStorage.getItem('User'))
		   			if(authUser.data.role === 'ADMIN') {
		      			next()
		    		}else {
		      			next('/student')
		      			showMsg(Student, true, '权限不匹配！', 'error')
		   			}
		 		} else if(to.meta.studentAuth) {
		   			 const authUser = JSON.parse(window.localStorage.getItem('User'))
		   			 if(authUser.data.role === 'STUDENT') {
		     			 next()
		    		}else {
		      			console.log('Im in admin')
		      			showMsg(Admin, true, '权限不匹配！', 'error')
		      			next('/admin')
		    		}
		  		}
	  		}
  		})
  		.catch(err => {
  			console.log(err)
  		})
  	}else {
 		next()
 	}
})

export default router;