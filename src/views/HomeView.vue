<template>
  <div class="home">
    <index-page/>

  </div>
</template>

<script>
// @ is an alias to /src
import IndexPage from '@/components/IndexPage.vue'

export default {
  name: 'HomeView',
  components: {
    IndexPage
  }
}
</script>
