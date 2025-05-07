export default {
  
  audio: null,
  currentTrack: null,
  currentTrackIndex: 0,
  isTimerPlaying: false,
  currentTime: '00:00',
  duration: '00:00',
  barWidth: null,
  circleLeft: null,
  transitionName: null,
  compressLeft: 0,
  compressWidth: null,
  isactive: false,
  favs: [],
  i: 0,
  list:null,
  tracks: [
    {
     id:1,
      name: "Sefarshi",
      artist: ["Yas"],
      cover:
      "https://mokhtalefmusic.com/wp-content/uploads/2019/02/79-e1550580254378.jpg",
    source:
      "https://dl.mokhtalefmusic.com/music/1397/11/29/Yas%20-%20Sefareshi%20%28128%29.mp3",
    url: "",
    favorited: false,
  },
 
    {
     id:2,
      name: "Prelude ",
      artist: ["Chad Lawson"],
  
      cover:
      "/cover/ChadLawson.jpg",
      source:
      "/t1.mp3",
      url: "",
      favorited: true,
    },
    {
     id:3,
      name: "Boyz in The Hood",
      artist: ["Pishro"],
      cover:
      "https://sv.musicset.ir/music/95/12/Pishro/Pishro%20-%20Boyz%20N%20The%20Hood.jpg",
    source:
      "http://sv.musicset.ir/music/95/12/Pishro/Pishro%20-%20Boyz%20N%20The%20Hood-128.mp3",
    url: "",
    favorited: false,
  },
    {
     id:4,
      name: "Winter",
      artist: ["vivaldi"],
  
      cover:
        "/cover/win.webp",
        source:
        "/win.mp3",
        url: "",
        favorited: true,
      },
      {
     id:5,
        name: "",
      artist: ["Sohrab MJ"],
  
      cover:
        "https://dl.popimusic.ir/music/Sohrab%20MJ%20-%20Gangesh%20Balas.jpg",
        source:
        "https://dl.mifa-music.ir/Music/06/01.%20Sohrab%20Mj%20-%20Gangesh%20Balas.mp3",
        url: "",
        favorited: false,
      },
    {
     id:6,
      name: "06 No. 1 in E Major",
      artist: ["Pagnini"],
  
      cover:
        "/cover/Paganini.webp",
        source:
        "/Pagnini.mp3",
        url: "",
        favorited: true,
      },
    
      
        {
         id:7,
          name: "Gole Man",
          artist: ["Khalse"],
          cover:
          "https://mokhtalefmusic.com/wp-content/uploads/2018/10/89-11-e1539181512773.jpg",
        source:
          "https://dl.mokhtalefmusic.com/music/1397/07/12/06.Sepehr%20Khalse%20-%20Gole%20Man%20%28Ft%20Behzad%20Leito%20%26%20Siavash%20Rad%29%20%5b128%5d.mp3",
        url: "",
        favorited: false,
      },
        {
         id:8,
          name: "Pizzicato Polka",
          artist: ["johann strauss"],
          cover:
          "/cover/Strauss.webp",
        source:
          "/piz.mp3",
        url: "",
        favorited: true,
      },
      {
       id:9,
        name: "Boyz in The Hood",
        artist: ["N.W.A"],
        cover:
        "https://ts2.tarafdari.com/contents/user644480/content-sound/la-1512692857-0dk3ag0u7p-snap-image.jpg",
      source:
        "https://ts2.tarafdari.com/contents/user644480/content-sound/15._eazy-e_-_boyz-n-the-nood_feat._ice_cube.mp3",
      url: "",
      favorited: false,
    }
    ],
}