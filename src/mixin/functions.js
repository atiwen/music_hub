export default {
    methods: {
        Play(e) {
            //  this.isPlay = !this.isPlay;
              if (typeof e == "number") {
                this.currentTrack = this.tracks[e];
                this.isTimerPlaying = true;
                this.resetPlayer();    
              } else{
      
                  if (this.audio.paused) {
                      this.audio.play();
                      this.isTimerPlaying = true;
                    } else {
                        this.audio.pause();
                        this.isTimerPlaying = false;
                      }
                  }
          
          },
          resetPlayer() {
            this.barWidth = 0;
            this.circleLeft = 0;
            this.audio.currentTime = 0;
            this.audio.src = this.currentTrack.source;
            setTimeout(() => {
              if (this.isTimerPlaying) {
                this.audio.play();
              } else {
                this.audio.pause();
              }
            }, 300);
          },
      },
}