<template>
    <div id="actors">
        <div class="mt-4 mb-4">
            <h3>Popular Actors</h3>
        </div>
        <div class="row text-center">
            <div v-for="(i,key) in getStoreStatePeople" :key="key" id="people" class="peopleCard col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
                <!--<img class="movieimage mb-2 " src="../assets/images/deneme.jpg" alt="">-->
                <img class="peopleimage mb-2 " :src="'https://image.tmdb.org/t/p/original/'+i.profile_path" alt="">
                <h5 class="title">{{i.name}}</h5>
                <p>{{i.gender==1 ? "Woman" : "Man"}}</p>
            </div>  
        </div>
    </div>
</template>
<script>
    export default {
     computed:{
        getStoreStatePeople(){
            return this.$store.getters.getStatePeople
        }

    }
}
</script>
<style>
    #actors #people .peopleimage{
        width: 200px;
    }
    #actors div h3:first-child{
        font-size: 16px;
        color: #cc8652;
    }
    #actors #people .title{
        margin-top: 10px;
        font-size: 14px;
        color: #cc8652;
    }
    #actors #people p{
        font-size: 11px;
    }
</style>
