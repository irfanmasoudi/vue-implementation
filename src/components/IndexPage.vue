<template>
<div class="page">
    <h1>Index</h1>
    <button @click="goToAbout()">Button to go to about page</button>
</div>
    
</template>

<script>
export default {
    name: 'IndexPage',
    methods: {
        goToAbout(){
            this.$router.push('/about')
        }
    }
}
</script>