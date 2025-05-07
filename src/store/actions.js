export default {
 Play: ({commit},{index , listname})=>{
    commit('Play',{index,listname});
 },
 create: ({commit})=>{
     commit('create');
 },
 generateTime: ({commit})=>{
     commit('generateTime');
 },
 updateBa: ({commit},x)=>{
     commit('updateBa',x);
 },
 nextTrack: ({commit})=>{
     commit('nextTrack');
 },
 favset: ({commit})=>{
     commit('favset');
 },
 prevTrack: ({commit})=>{
     commit('prevTrack');
 },
 resetPlayer: ({commit})=>{
     commit('resetPlayer');
 },
 clickProgres: ({commit},e)=>{
     commit('clickProgres',e);
 },
 setvolume: ({commit},e)=>{
     commit('setvolume', e);
 },
 setbar: ({commit},e)=>{
     commit('setbar', e);
 },
 favclick: ({commit})=>{
     commit('favclick');
 },
 foreachfavs: ({commit},item)=>{
     commit('foreachfavs',item);
 },
 beforeach: ({commit},item)=>{
     commit('beforeach',item);
 },



}