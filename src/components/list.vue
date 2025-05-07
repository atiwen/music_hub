<template>
  

      <div class="list">
        <div class="row-title">Trends</div>
        <playlist :intracks="tracks" listname="main"></playlist>
        <br>
        <div class="row-title">Favorite</div> 
        <playlist :intracks="favs" listname="main"></playlist>

      </div> 
</template>
<script>
import { mapState , mapActions } from 'vuex'
import playmix from '../mixin/functions'
import playlist from './playlist_row.vue'

export default {
  name:'list',
  mixins:[playmix],
  components:{
    playlist
  },
  methods:{
    ...mapActions([
      'Play'
    ])
  },
 computed: {
      ...mapState([
        'favs',
        'tracks',
        'currentTrack'
      ])
    },
}
</script>