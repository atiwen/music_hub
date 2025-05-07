<template>
  <div class="row">
    <!-- start buttons -->


    <!-- start previs btn -->
    <div class="col-4 p-0 col-lg-5">
      <i
        class="fas fa-step-backward icon text-right mt-2"
        style="float: right"
        @click="prevTrack"
      ></i>
    </div>
    <!-- END previs  -->


    <!-- play btn  -->
    <div class="col-4 p-0 col-lg-2">
      <i
        class="fas play-bt icon d-block text-center"
        :class="[
          { faPause: isTimerPlaying },
          { faPlay: !isTimerPlaying },
          { isdown: isDown },
        ]"
        @click="Play"
        @mousedown="isDown = true"
        @mouseup="isDown = false"
      >
      </i>
    </div>
    <!-- end play btn  -->


    <!-- next btn  -->
    <div class="col-4 p-0 col-lg-5">
      <i
        class="fas fa-step-forward icon text-right mt-2"
        style="float: left"
        @click="nextTrack"
      ></i>
    </div>
    <!-- end next btn  -->



    <!-- progress track   -->

    <div class="col-2 p-0 text-end">
      <p>{{ currentTime }}</p>
    </div>
    <div class="col-8 probar">
      <input
        type="range"
        id="vol"
        name="vol"
        min="0"
        max="100"
        step="0.1"
        class="vlm"
        ref="input"
        v-model="barWidthModeled"
        @change="changebar"
        @mousedown="iskhalse = true"
        @mouseup="khalseoff"
      />
      <div class="progress" :style="{ width: `${barWidthModeled}%` }"></div>
    </div>
    <div class="col-2 p-0">
      <p>{{ duration }}</p>
    </div>
    <!-- end progress  -->
  </div>
</template>

<script>
export default {
  name: "MusicProgress",
  props: {
    duration: String,
    currentTime: String,
    isTimerPlaying: Boolean,
    prevTrack: Function,
    nextTrack: Function,
    Play: Function,
    barWidth: Number,
  },
  data() {
    return {
      isDown: true,
      iskhalse: false,
      barWidthModeled: 0,
    };
  },
  methods: {
    khalseoff() {
      this.$emit("barchang", this.barWidthModeled);
      this.iskhalse = false;
    },
  },
  watch: {
    barWidth: function () {
      if (!this.iskhalse) {
        this.barWidthModeled = this.barWidth;
      }
    },
  },
};
</script>
<style>
.play-bt::before {
  /* width: 0px; */
  height: 25px;
  background-color: #ffffff;
  color: #000 !important;
  border-radius: 138%;
  border: solid 10px #ffffff;
  border-left-width: 11px;
  border-right-width: 12px;
}
.play-bt {
  margin-top: 0.5rem;
}

.isdown::before {
  border: solid 9px #ffffff;
  border-left-width: 11px;
  border-right-width: 11px;
}
.icon:hover {
  color: #ffffff;
}
.icon {
  padding: 10px 13px;
  font-size: 18px;
  border-radius: 100px;
  color: #bababa;
  cursor: pointer;
}
p {
  color: #ffffff;
}
</style>
