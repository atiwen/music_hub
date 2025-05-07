<template>
  

      <div class="list"> 
        <playlist :intracks="this.favs" listname="favs"></playlist>
      </div> 
</template>
<script>
import { mapState , mapActions } from 'vuex'
import playmix from '../mixin/functions'
import playlist from './playlist.vue'
export default {
  name:'list',
  mixins:[playmix],
  components:{
    playlist
  },
  data() {
      return {
      }
  },
  methods:{
    ...mapActions([
      'Play',
      'foreachfavs',
      'beforeach'
    ]),


  },
 computed: {
      ...mapState([
        'tracks',
        'currentTrack',
        'favs'
      ])
    },
    created() {
        // console.log(this.tracks.favorited)
    //         for (let i = 0; i < this.tracks.length; i++) {
    //     const element = array[i];
        
    // }
    this.beforeach();
    this.tracks.forEach(this.foreachfavs);
    },
}
</script>