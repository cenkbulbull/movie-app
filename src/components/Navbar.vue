<template>
	<div id="nav" class="mt-4">
		<div class="left mt-1">
			<i class="fa-solid fa-film"></i>
			<span style="cursor: pointer;" @click="$router.push('/')">MovieApp</span>
			<ul>
				<li>
					<router-link tag="a" to="/people">
						Actors
					</router-link>
				</li>
			</ul>
		</div>
		
		<div class="right">
			<input v-model="searchInput" @keyup.enter="searchMovie()" id="searchInput" type="text" class="form-control me-1" placeholder="Search">
			<button @click="searchMovie()" class="btn searchBtn"><i class="fa-solid fa-magnifying-glass"></i></button>
			<div class="user ms-2">
				<!--<div>
					<img src="../assets/images/profile.png" alt="">
				</div>-->
				<button @click="logout" :class="logoutClass" class="btn btn-logout">Çıkış Yap</button>
			</div>
		</div>
		
	</div>
</template>
<script>
	export default{
		data(){
			return{
				searchInput:null
			}
		},
		methods:{
			searchMovie(){
				this.$store.dispatch("getSearchMovie",this.searchInput)
				this.$router.push("/search")
			},
			logout(){
				this.$store.dispatch("logout")
				this.$router.replace("/auth")
			}
		},
		computed:{
			logoutClass(){
				return{
					'd-none': !this.$store.getters.isAuthenticated
				}
			}
		}
	}
</script>
<style>
	#nav{
		display: flex;
		justify-content: space-between;
	}
	#nav div #searchInput{
		background-color:#283140 ;
		border: 0 ;
		border-radius: 20px;
		outline: 0;
		box-shadow: 0 0 0 0; 
		padding: 8px 20px;
		width: 250px;
		font-size: 12px;
		color: #ffffff;
	}
	#nav .left{
		display: flex;
	}
	#nav .left ul li a{
		color: #fff;
		text-decoration: none;
		font-size: 13px;
	}
	#nav .left i{
		color: #cc8652;
		font-size: 25px;
		margin-right: 5px;
	}
	#nav .right{
		display: flex;
		font-size: 16px;
	}
	#nav .right .searchBtn{
		width: 41px;
		height: 41px;
		margin-top: 1px;
		font-size: 12px;
		color: #ffffff;
		background-color:#283140 ;
		border-radius: 10%;
		outline: 0;
		box-shadow: 0 0 0 0; 
	}
	#nav .right .btn-logout{
		width: 100px;
		background-color:#cc8652 ;
		color: #181c25;
	}
	#nav .right .user{
		width: 50px;
		margin-top: 2px;
	}
	#nav .right .user div img{
		width: 35px;

	}
</style>