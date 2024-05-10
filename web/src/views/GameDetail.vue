<template>
    <div bg-main-bg text-3xl h-screen color-white>建设中...</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
const name = router.currentRoute.value.query.name
console.log(name)
</script>

<style scoped>
</style>