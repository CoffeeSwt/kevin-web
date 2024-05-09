<template>
    <div>1111</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
const name = router.currentRoute.value.query.name
console.log(name)
</script>

<style scoped>
</style>