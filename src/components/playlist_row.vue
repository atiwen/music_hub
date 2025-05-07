<template>
  <ul class="music-row">
    <swiper :slidesPerView="slidesPerView"  :centeredSlides="false" :pagination="{
      clickable: true,
    }"  class="m-row-5">
      <swiper-slide v-for="(track, index) in intracks" :key="index">
        <div class="music-item"  @dblclick="Playcv( track.id , listname )">

          <img :src="track.cover" />
          
          <div style="display: flex;width: 231px;justify-content: space-between;margin-top: 17px;">
          <div>
            <h6 > {{ track.name }}</h6>
            <router-link :to="`/artist/${track.artist[0]}`">
              {{ track.artist[0] }}
            </router-link>
          </div>
          <div class="play-loader" v-if="currentTrack.id == track.id && isTimerPlaying"></div>
          </div>
            
        </div>
      </swiper-slide>

    </swiper>

  </ul>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
</script>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      slidesPerView: 1,
    };
  },
  computed: {
      ...mapState([
        'currentTrack',
        'isTimerPlaying',
      ])
    },
  props: {
    intracks: Array,
    listname: String
  },
  mounted() {
    this.updateSlidesPerView();
    window.addEventListener('resize', this.updateSlidesPerView);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateSlidesPerView);
  },
  methods: {
    updateSlidesPerView() {
      const itemWidth = 300; // عرض هر اسلاید
      const margin = 20;     // اگر margin یا gap داری اینجا اضافه کن
      const totalItemWidth = itemWidth + margin;
      const newSlides = Math.floor(window.innerWidth / totalItemWidth);
      this.slidesPerView = Math.max(1, newSlides);
    },
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