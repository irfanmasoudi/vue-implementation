import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
  },
  mutations: {
    increment (state) {
      console.log('commited mutation')
      state.counter++
    }
  },
  actions: {
    waitAndIncrement ({ commit }) {
      console.log('dispatched action')
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  modules: {
  }
})
