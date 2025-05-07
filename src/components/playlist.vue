<template>
  

        <ul>

          <template v-for="(track, index) in intracks" :key="index" >
            <li  class="px-2" :class="{active: currentTrack.id == track.id}">
              
              <div class="row"  @click="Playcv(track.id,listname)">
                
                <div class="col-1 num-col">
                  <p class="num-index" @click="Playcv(track.id,listname)">{{index+1}}</p>
                  
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
                
            <div class="play-loader list" v-if="currentTrack.id == track.id && isTimerPlaying"></div>
              
              </div>
            </li>
          </template>
        </ul>
</template>
<script>
import {  mapActions , mapState } from 'vuex'
export default {
  name:'playlist',
  props:{
      intracks: Array,
      listname: String
  },
  computed: {
      ...mapState([
        'currentTrack',
        'isTimerPlaying',
      ])
    },
  methods:{
    Playcv(id, listname){
      let obj = [ id, listname ];
      this.Play(obj)
    },
    ...mapActions([
      'Play'
    ]),
  },
}
</script>