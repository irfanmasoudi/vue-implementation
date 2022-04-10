<template>
    <p>{{ tittle }}</p>
</template>

<style scoped>
    p {
        color: red;
    }
</style>

<script>
export default {
    props: ["tittle"],
    name: 'CardComponent'
}
</script>
