<template>
<div>

  <div class="row m-0">
    <!-- start left side -->
    <div class="col-md-3 col-lg-2 px-4 bg-black left-side " :class="{width0: !isclose}">
      <div :class="{dnone: !isclose }">
        
      <h3 class="mt-4 text-left text-light" >Music Player</h3> 
      <i class="fa fa-times close-icon d-block d-md-none"  @click="isclose = !isclose"></i>
    <ul class="menu-item-list mt-4">
      <a :class="{ active: $route.path == '/'}" @click="gopage('/')">
        <li class="text-hover">
          <i class="fal fa-search "></i>
          <span>Explore</span>
      </li>
      </a>

      <a :class="{ active: $route.path == '/fav'}" @click="gopage('/fav')">
      <li class="text-hover">
          <i class="fal fa-heart-circle "></i>
          <span>Favorite</span>
      </li>
      </a>
      <a :class="{ active: $route.path == '/about_us'}" @click="gopage('/about_us')">
      <li class="text-hover">
          <i class="fal fa-info-circle "></i>
          <span>About us</span>
      </li>
      </a>
    </ul>

      </div>
    </div>
    <!-- end left side -->
    
    <!-- start right side -->
    <div class="col-12 col-md-9 col-lg-10 px-1 right-side">
    
    <!-- start main content -->
      <nav>
      <i class="fa fa-bars d-block d-md-none" style="cursor:pointer; color:#fff" @click="isclose = !isclose"></i>
      </nav>
      <router-view ></router-view>

      <!-- end main content -->
    </div>
    <!-- end right side -->

  </div>
  <!-- PLAYER -->
  <player :tracks="tracks" ref="play"></player>
  <!-- END PLAYER -->
</div>
</template>
<script>
import './assets/bootstrap.css'
import './assets/all.min.css'
import './assets/style.css'
import './assets/bootstrap-detail.css'
import Player from './components/player/Player.vue'
import {mapState , mapActions} from 'vuex'
export default {
  components:{
    Player,
  },
  data() {
    return {
     isclose: true,
    }
  },
    methods: {
      gopage(url){
        this.$router.push(url)
        if (window.innerWidth <= 768) {
          
          this.isclose = !this.isclose
        }
      },
      ...mapActions([
        'favset'
      ])
    },
    computed: {
      ...mapState([
        'tracks'
      ])
    },
    created() {
      this.favset()
      window.onkeydown = function(e) { 
      return !(e.keyCode == 32);
    }
      if (window.innerWidth < 768) {
        this.isclose = false
      };
     
}
}
</script>
<style>

.left-side{
    height: calc(100vh - 90px);
    z-index: 1030;
    transition-duration: 0.5s;
}
@media (max-width: 768px) {
  .left-side{
    position: absolute;
  } 
  .right-side{
    height: calc(100vh - 176px);
    overflow-y: scroll;
  }
}
@media(min-width: 768px){
    .right-side{
      height: calc(100vh - 90px);
      overflow-y: scroll;
    }
}

.right-side::-webkit-scrollbar-thumb{   
  background: #5a5a5a; 
  border-radius: 3px;
}
.right-side::-webkit-scrollbar {

    width: 6px;

}

.menu-item-list li span{
  font-size:15px;
  font-weight:700;
}
ul{
  list-style: none;
  padding: 0;
}
.menu-item-list a.active li{
  color: #fff;
}
.menu-item-list li{
  cursor: pointer;
  padding-top: 16px;
}


.menu-item-list li i{
    margin-right: 1rem !important;
    font-size: 1.25rem;
}
</style>
