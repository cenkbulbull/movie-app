<template>
	<div id="named" class="mt-4">
		<div class="row text-center">
			<div v-for="(i,key) in getStoreStateSearch" :key="key" id="movie" class="movieCard col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
				<!--<img class="movieimage mb-2 " src="../assets/images/deneme.jpg" alt="">-->
				<img class="movieimage mb-2 " :src="'https://image.tmdb.org/t/p/original/'+i.poster_path" alt="">
				<h5 class="title">{{i.title}}</h5>
				<p><i class="fa-solid fa-star"></i> {{i.vote_average}}</p>
				<div class="overview">
					<p style="font-size: 13px;" class="badge bg-success">Language : {{i.original_language.toUpperCase()}}</p>
					<p style="font-size: 13px;" class="badge bg-success">Date : {{i.release_date}}</p>
					<div>
						<b>{{i.overview}}</b>
					</div>
				</div>
			</div>	
		</div>
	</div>
</template>
<script>
	export default{
		computed:{
			getStoreStateSearch(){
				return this.$store.getters.getStateSearchMovie
			}
			
		}
	}
</script>
<style>
	#movie{
		position: relative;
		overflow: scroll;
	}
	#movie .movieimage{
		width: 200px;
	}
	#movie .title{
		margin-top: 10px;
		font-size: 14px;
		color: #cc8652;
	}
	#movie .fa-star{
		color: #cc8652;
	}
	#movie .overview{
		opacity: 0;
		width: 200px;
		position: absolute;
		top: 10px;
		left: 45px;
		font-size: 11px;
		color: #ffffff !important;
		/*transform*/
		text-align: center;
		transform: translate(40px, 40px);
	}
	#movie:hover .movieimage{
		filter: blur(5px);
		transition: 1s;
	}
	#movie:hover .overview{
		opacity: 1;
		transform:translate(0px, 0px);
		transition: transform 1s;
		transition: all 1s;
	}
</style>