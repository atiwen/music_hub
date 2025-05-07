<template>
  

        <ul>
          
          <li  class="px-2" v-for="(track, index) in intracks" :key="index"  @dblclick="Play({index,listname})" >
            
            <div class="row" >
              
              <div class="col-1 num-col">
                <p class="num-index" @click="Play({index,listname})">{{index+1}}</p>
                
              </div>

              <div class="col-1 img-col">
                <img :src="track.cover" />
              </div>
              
              <div class="col-lg-10 col-md-9 col-6">
                <h6> {{ track.name }}</h6>
                <router-link :to="`/artist/${track.artist[0]}`">
                {{ track.artist[0] }}
                </router-link>
              </div>
            
            </div>
          </li>
        </ul>
</template>
<script>
import {  mapActions } from 'vuex'
export default {
  name:'playlist',
  props:{
      intracks: Array,
      listname: String
  },
  methods:{
    ...mapActions([
      'Play'
    ]),
  },
}
</script>