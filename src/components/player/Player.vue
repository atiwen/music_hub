<template>
    <!-- start player -->
    <div class="row fixed-bottom p-2 m-0" style="background-color:#181818" >
  
      <!-- start music info -->
      <div class="music-info col-md-3 col-sm-12 mt-2">
        <div class="row">
          <div class="col-md-4 me-md-2 col-2 col-lg-3">
            <img class="shadow-lg t-cover" :style="{ backgroundImage: `url(${currentTrack.cover})` }"  />
          </div>

          <div class="col-8 col-md-4 col-lg-4   ms-lg-0 mt-2 px-0 center-sm">

            <h6 class="track-name compress">{{ currentTrack.name }}</h6>

            <p class="track-artist compress"> {{ currentTrack.artist[0] }} </p>

          </div>
          <div class="col-1 my-auto fav" style="color: #fff">
            <div
              class="player-controls__item -favorite"
              :class="{ active: currentTrack.favorited }"
              @click="favclick"
            >
              <i class="fa-heart fa"></i>
            </div>
          </div>
        </div>
      </div>
      <!-- end music info -->

      <!-- start control  -->
      <div class="col-12  col-md-6">
        <music-progress 
        :duration="duration"
        :currentTime="currentTime"
        :isTimerPlaying="isTimerPlaying"
        :prevTrack="prevTrack"
        :nextTrack="nextTrack"
        :Play="Play"
        :barWidth="barWidth"
        @barchang="setbar($event)"

        ></music-progress>
      </div>
      <!-- end control -->
      <!-- start volume  -->
      <div class="vol-col col-sm-3 col-md-3">
      <volume-bar @vlmchang="setvolume($event)"></volume-bar>
      </div>
      <!-- end volume -->
    </div>
  
</template>
<script>
import VolumeBar from '../player/Volume.vue' 
import MusicProgress from '../player/MusicProgress.vue'
import { mapState , mapActions} from 'vuex';

export default {
  components :{
    VolumeBar,
    MusicProgress
  },
  props:{
    tracks : Object,

  },
  computed:{
...mapState([
    'audio',
    'currentTrack',
    'currentTrackIndex',
    'isTimerPlaying',
    'currentTime',
    'duration',
    'barWidth',
    'isActive',
    'circleLeft',
    'transitionName',
    'compressLeft',
    'compressWidth',
    'isActive'    
    ])
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions([
      'create',
      'Play',
      'updateBa',
      'setvolume',
      'setbar',
      'clickProgres',
      'nextTrack',
      'prevTrack',
      'resetPlayer',
      'favclick',

    ]),
  },


  created() {
    this.create()

  },
};
</script>

<style >
 
.player-controls__item.-favorite.active i {
  color: rgb(255, 255, 255);
}
.fav i {
  transition: 0.09s;
  cursor: pointer;
  width: 15px;
  height: 15px;
  color: #0000;
  -webkit-text-stroke: 1px rgb(255, 255, 255);
}

.music-info .t-cover {
  width: 56px;
  height: 56px;
  background-size: cover;
}
.music-info .track-name {
    color: #fff;
}
.music-info .track-artist{
  font-size: 12px;
  color: #b3b3b3;
}
.col-45 {
    flex: 0 0 auto;
    width: 37%;
}
</style>
