import Vue from "vue"
import VueRouter from "vue-router"

import NamedSearch from "./components/NamedSearch"
import Movies from "./components/Movies"
import People from "./components/People"
import Auth from "./components/auth/Auth"
import {store} from "./store/store"



Vue.use(VueRouter)

export const router = new VueRouter({
	routes :[
	{
		path:"/",
		component:Movies,
		beforeEnter(to,from,next){
			if(store.getters.isAuthenticated){
				next()
			}else{
				next("/auth")
			}
		}
	},
	{
		path:"/search", 
		component:NamedSearch,
		beforeEnter(to,from,next){
			if(store.getters.isAuthenticated){
				next()
			}else{
				next("/auth")
			}
		}
	},
	{
		path:"/people",
		component:People,
		beforeEnter(to,from,next){
			if(store.getters.isAuthenticated){
				next()
			}else{
				next("/auth")
			}
		}
	},
	{
		path:"/auth", 
		component:Auth
	},
	{
		path:"*", 
		redirect:"/"
	},
	],
	mode:"history"
})