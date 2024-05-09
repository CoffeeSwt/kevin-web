<template>
    <div @click="router.push(gameCardInfo.routerLink)" rounded-lg flex flex-col overflow-hidden cursor-pointer
        transition-all relative :class="{ group: pcmode, 'hover:scale-110': pcmode }">
        <div ref="imgRef" class="img" w-full overflow-hidden bg-top bg-contain
            :class="{ 'bg-cover': pcmode, 'aspect-43': pcmode, 'aspect-video': !pcmode }">
        </div>
        <div text-sm flex-center :class="{ 'text-sm': pcmode, 'py-4': pcmode, 'font-600': pcmode }" z-3 bg-blue-bar
            py-1>
            {{ gameCardInfo.name }}
        </div>
        <div w-full h-full absolute top-0 left-0 text-2xl invisible group-hover:visible transition-all flex-center>
            <div i-material-symbols-arrow-circle-right-outline w-15 h-15 z-2></div>
            <div bg-black-pure opacity-80 w-full h-full absolute top-0 left-0 z-1></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { GameCardInfo } from '../types';
const router = useRouter()
const props = defineProps({
    gameCardInfo: { // 使用 defineProps 定义 props，这里应该是对象形式
        type: Object as () => GameCardInfo, // 指定类型为 GameCardInfo
        required: true // 可根据实际情况设置是否必需
    },
    pcmode: {
        type: Boolean,
        default: false
    }
})
const imgRef: Ref<null | HTMLDivElement> = ref(null)
onMounted(() => {
    if (props.pcmode) {
        imgRef.value!.style.backgroundImage = `url('${props.gameCardInfo.picSrc}')`;
    } else {
        imgRef.value!.style.backgroundImage = `url('${props.gameCardInfo.picSrcPhone}')`;
    }
})
</script>

<style scoped></style>