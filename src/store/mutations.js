export default {
    Play: (state, {index , listname}) => {
      // if play from list 
      if (typeof index == "number") {
        // if play from mainlist
        if(listname == 'main'){
          state.list = state.tracks
          // if play from favrits list
        }else if (listname == 'favs') {
          state.list = state.favs
        }
        state.currentTrack = state.list[index];
        
        state.currentTrackIndex = index;
        state.isTimerPlaying = true;
        resetPlayer(state);    
      } else{
        // if play from btn 
        if (state.audio.paused) {
          state.audio.play();
          state.isTimerPlaying = true;
        } else {
          state.audio.pause();
          state.isTimerPlaying = false;
        }
      }
    },
    
    nextTrack: (state) => {
      state.isShowCover = false;
      if (state.currentTrackIndex < state.list.length - 1) {
        state.currentTrackIndex++;
      } else {
        state.currentTrackIndex = 0;
      }
      state.currentTrack = state.list[state.currentTrackIndex];
      resetPlayer(state);
    },
    prevTrack: (state) => {
      state.transitionName = "scale-in";
      state.isShowCover = false;
      if (state.currentTrackIndex > 0) {
        state.currentTrackIndex--;
      } else {
        state.currentTrackIndex = state.list.length - 1;
      }
      state.currentTrack = state.list[state.currentTrackIndex];
      resetPlayer(state);
    },
    generateTime : (state) => {
        let width = (100 / state.audio.duration) * state.audio.currentTime;
        state.barWidth = width;
        state.circleLeft = width + "%";
        let durmin = Math.floor(state.audio.duration / 60);
        let dursec = Math.floor(state.audio.duration - durmin * 60);
        let curmin = Math.floor(state.audio.currentTime / 60);
        let cursec = Math.floor(state.audio.currentTime - curmin * 60);
        if (durmin < 10) {
          durmin = "0" + durmin;
        }
        if (dursec < 10) {
          dursec = "0" + dursec;
        }
        if (curmin < 10) {
          curmin = "0" + curmin;
        }
        if (cursec < 10) {
          cursec = "0" + cursec;
        }
        state.duration = durmin + ":" + dursec;
        state.currentTime = curmin + ":" + cursec;
      
    },
    favset : (state) => {

      for (let i = 0; i < state.tracks.length; i++) {
        if (state.tracks[i].favorited){
          state.favs.push(state.tracks[i])
        }
        
      }
      
    },
    create: (state) => {
      if (state.list == null) {
        state.list = state.tracks
      }
      document.body.onkeyup = function (e) {
        if (e.code == "Space") {
        Play(state);
        }
      };
      state.currentTrack = state.tracks[0];
      state.audio = new Audio();
      state.audio.src = state.currentTrack.source;
      state.audio.ontimeupdate = function () {
        generateTime(state);
      };
      state.audio.onloadedmetadata = function () {
        generateTime(state);
      };
      state.audio.onended = function () {
        nextTrack(state);
        state.isTimerPlaying = true;
      };
    },
    updateBa: (state,x) => {
      let progress = state.$refs.progress;
      let maxduration = state.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      state.barWidth = percentage + "%";
      state.circleLeft = percentage + "%";
      state.audio.currentTime = (maxduration * percentage) / 100;
      state.audio.play();
    },
    resetPlayer: (state) => {
      state.barWidth = 0;
      state.circleLeft = 0;
      state.audio.pause();
      state.audio.currentTime = 0;
      state.audio.src = state.currentTrack.source;
      state.audio.play();
      setTimeout(() => {
        if (state.isTimerPlaying) {
          state.audio.play();
        } else {
          state.audio.pause();
        }
      }, 300);
    },
    clickProgres: (state,e) => {
      state.isTimerPlaying = true;
      state.audio.pause();
      state.updateBa(e.pageX);
    },
    setvolume: (state,e) => {
      state.audio.volume = (e / 100);
    },
    setbar: (state,e) => {   
       state.audio.currentTime = e * (state.audio.duration / 100);
    },
    favclick: (state) => {

      state.list[state.currentTrackIndex].favorited = !state.list[state.currentTrackIndex].favorited  
      
    },
    beforeach: (state,item) => {
      state.i = 0;
      state.favs = []


    },
    foreachfavs: (state,item) => {
      if(item.favorited == true){
        state.favs[state.i] = item
         state.i++;
        }
    },
    simple: (state,e) => {},
  }
  function resetPlayer(state){
    state.barWidth = 0;
    state.circleLeft = 0;
    state.audio.pause();
    state.audio.currentTime = 0;
    state.audio.src = state.currentTrack.source;
    state.audio.play();
    setTimeout(() => {
      if (state.isTimerPlaying) {
        state.audio.play();
      } else {
        state.audio.pause();
      }
    }, 300);
  }
  function Play(state){    
    if (typeof index == "number") {
      if(listname == 'main'){
        state.list = state.tracks
      }else if (listname == 'favs') {
        state.list = state.favs
      }
      state.currentTrack = state.list[index];
   
    state.currentTrackIndex = index;
    state.isTimerPlaying = true;
    resetPlayer(state);    
  } else{
    if (state.audio.paused) {
      state.audio.play();
      state.isTimerPlaying = true;
    } else {
      state.audio.pause();
      state.isTimerPlaying = false;
    }
  }
  }
  function generateTime(state){    
    let width = (100 / state.audio.duration) * state.audio.currentTime;
    state.barWidth = width;
    state.circleLeft = width + "%";
    let durmin = Math.floor(state.audio.duration / 60);
    let dursec = Math.floor(state.audio.duration - durmin * 60);
    let curmin = Math.floor(state.audio.currentTime / 60);
    let cursec = Math.floor(state.audio.currentTime - curmin * 60);
    if (durmin < 10) {
      durmin = "0" + durmin;
    }
    if (dursec < 10) {
      dursec = "0" + dursec;
    }
    if (curmin < 10) {
      curmin = "0" + curmin;
    }
    if (cursec < 10) {
      cursec = "0" + cursec;
    }
    state.duration = durmin + ":" + dursec;
    state.currentTime = curmin + ":" + cursec;
  };
  function nextTrack(state) {
      // state.isShowCover = false;
      if (state.currentTrackIndex < state.tracks.length - 1) {
        state.currentTrackIndex++;
      } else {
        state.currentTrackIndex = 0;
      }
      state.currentTrack = state.tracks[state.currentTrackIndex];
      resetPlayer(state);
    }
  