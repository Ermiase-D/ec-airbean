import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     menu:[],
     ActiveItemsId: 0,
      user:{
      id: '1',
      name: 'jons'
    } 
  },
  mutations: {
     Increment_Count(state) {
      state.count += 1
     }
  },
  actions: {
  },
  modules: {
  }
})
