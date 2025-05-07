<template>
  <ul class="music-row">

    <swiper :slidesPerView="slidesPerView"  :centeredSlides="false" :pagination="{
      clickable: true,
    }"  class="m-row-5">
      <swiper-slide v-for="(track, index) in intracks" :key="index" @dblclick="Play({ index, listname })">
        <div class="music-item">
        

          <img :src="track.cover" />
          <h6 > {{ track.name }}</h6>
          <router-link :to="`/artist/${track.artist[0]}`">
            {{ track.artist[0] }}
          </router-link>

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
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      slidesPerView: 1,
    };
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
    ...mapActions([
      'Play'
    ]),
  },
}
</script>