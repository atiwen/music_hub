<template>
  <div class="row">
    <div class="vol-ic col-3 col-md-4 col-lg-7 text-end mt-4 pe-0">
      <i
        class="fa-light vlmicon"
        :class="[
          { faVolumeSlash: volume == 0 },
          { faVolumeOff: volume > 0 && volume <= 30 },
          { faVolumeLow: volume > 30 && volume <= 60 },
          { faVolume: volume > 60 && volume <= 100 },
        ]"
      ></i>
    </div>
    <div
      class="volbar col-9 col-md-6 col-lg-5 probar mt-4 d-none d-sm-block "
      @mousewheel="volumewheel"
    >
      <input
        type="range"
        id="vol"
        name="vol"
        min="0"
        max="100"
        step="10"
        class="vlm"
        ref="input"
        v-model="volume"
      />
      <div class="progress" :style="{ width: `${volume}%` }"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VolumeBar",
  data() {
    return {
      volume: 100,
    };
  },

  methods: {
    // for change volume with scroll
    volumewheel(event) {
      // get scroll data
      if (event.deltaY > 0) {
        if (this.volume > 0) {
          this.volume = Number(this.volume) - 10;

        }
      } else {
        if (this.volume < 100) {
          this.volume = Number(this.volume) + 10;
        }
      }
      // this.$emit('vlmchang',this.volume)
    },
  },
  watch: {
    volume: function () {
      this.$emit("vlmchang", this.volume);
    },
  },
};
</script>
<style>
.progress {
  height: 4px;
  cursor: pointer;
  background-color: #fff0;
  position: relative;
  top: -28px;
  box-shadow: 0px 1rem 0px #fff;
}
.probar:hover .progress {
  box-shadow: 0px 1rem 0px #1c771c;
}
.probar:hover .vlm::-webkit-slider-thumb {
  background-color: #fff;
  width: 15px;
  height: 15px;
}
.vlm {
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background: rgb(94 94 94);
  outline: none;
  opacity: 1;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}
.vlm::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  margin-top: -9px;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  top: 4px;
  z-index: 2;
}

.vlm::-moz-range-thumb {

  margin-top: -9px;
  width: 0px;
  height: 0px;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  top: 40px;
  z-index: 2000;
  border: none;
}

.vlmicon {
  color: #fff;
  font-style: normal;
}

</style>
