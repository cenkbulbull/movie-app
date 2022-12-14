<template>
	<div id="movies" >
		<div class="mt-4 mb-4">
			<h3>POPULAR MOVIES</h3>
		</div>
		<Movie :movie="getStoreStateMovies"/>	
	</div>
</template>
<script>
	import Movie from "./Movie"
	export default{
		components:{
			Movie
		},
		computed:{
			getStoreStateMovies(){
				return this.$store.getters.getStateMovies
			}
			
		}
	}
</script>
<style>
	#movies div h3{
		font-size: 16px;
		color: #cc8652;
	}
</style>