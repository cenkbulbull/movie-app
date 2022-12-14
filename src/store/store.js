import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import {router} from "../router"

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
		movies:[],
		search:[],
		people:[],
		token:"",
		fbApiKey:"AIzaSyD6SRUs2v6lK5hmVh0QwBozK5up55sg5Po"
	},
	getters:{
		isAuthenticated(state){
			return state.token !==""
		},
		getStateMovies(state){
			return state.movies
		},
		getStateSearchMovie(state){
			return state.search
		},
		//people
		getStatePeople(state){
			return state.people
		}
	},
	mutations:{
		setToken(state,token){
			state.token=token
		},
		clearToken(state){
			state.token=""
		},
		getMoviesActions(state,value){
			//console.log(value.results)
			for(let i in value.results){
				state.movies.push(value.results[i])
			}
		},
		getSearchMovieActions(state,value){
			state.search=[]
			for(let i in value.results){
				state.search.push(value.results[i])
			}
		},
		//people
		getPeopleAction(state,value){
			for(let i in value.results){
				state.people.push(value.results[i])
			}
		}

	},
	actions:{
		initAuth({commit,dispatch}){
			let token = localStorage.getItem("token")
			if(token){
				commit("setToken",token)
				router.push("/")
			}else{
				router.push("/auth")
				return false
			}
		},
		login({commit,dispatch,state},authData){
			let authLink="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
			if(authData.isUser){
				authLink="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
			}
			return axios.post(
				authLink + "AIzaSyD6SRUs2v6lK5hmVh0QwBozK5up55sg5Po",
				{email :authData.email, password:authData.password,returnSecureToken:true }
			).then(response=>{
				//console.log(response)
				commit("setToken",response.data.idToken)
				localStorage.setItem("token",response.data.idToken)
			})
		},
		logout({commit,dispatch,state}){
			commit("clearToken")
			localStorage.removeItem("token")

		},
		getMovies({commit}){
			axios.get("https://api.themoviedb.org/3/movie/popular?api_key=39226ab2548cd82e034257f3147020bb&language=en-US&page=1")
				.then(response=>{
					//console.log(response.data)
					commit("getMoviesActions",response.data)
				})
		},
		getSearchMovie({commit},movieName){
			axios.get("https://api.themoviedb.org/3/search/movie?api_key=39226ab2548cd82e034257f3147020bb&query="+movieName)
				.then(response=>{
					//console.log(response.data)
					commit("getSearchMovieActions",response.data)

				})
		},
		//people
		getPeople({commit},people){
			axios.get("https://api.themoviedb.org/3/person/popular?api_key=39226ab2548cd82e034257f3147020bb&language=en-US&page=1")
				.then(response=>{
					console.log(response.data)
					commit("getPeopleAction",response.data)
				})
		}
	}
})