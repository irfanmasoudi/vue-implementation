<template>
  <div id="app">
    <index-page v-if="currentPathname === '/'"/>
    <about-page v-if="currentPathname === '/about'"/>
  </div>
</template>

<script>
import IndexPage from './components/IndexPage.vue'
import AboutPage from './components/AboutPage.vue'

export default {
  name: 'App',
  components: {
    IndexPage,
    AboutPage
  },
  data(){
    return {
      currentPathname: "/"
    }
  },
  mounted(){
    this.currentPathname = window.location.pathname
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
