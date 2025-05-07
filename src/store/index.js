import { createStore } from 'vuex'
import  state  from './state'
import  mutation  from './mutations'
import  actions  from './actions'
const store = createStore({
  state: state,
  mutations: mutation,
  actions: actions,
})
export default store;