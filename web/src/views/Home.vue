<template>
  <div w-full>
    <section w-full h-screen bg-main-bg>
      <div overflow-hidden relative size-full>
        <img absolute w-full bottom-0 scale-200 left--40  sm:scale-160 sm:left--30 md:scale-130 lg:scale-120 xl:scale-80 xl:left-0 src="@/assets/imgs/25601440.jpg" alt="">
        <img absolute w-full top-15 scale-180 left-30  sm:scale-160 sm:left-25 md:scale-130 md:left-20 lg:scale-110 lg:left-5 xl:scale-100 xl:left-0 xl:top--15 src="@/assets/imgs/DL改版-FILM.png" alt="">
      </div>
    </section>

    <section w-full h-screen bg-main-bg>

    </section>



  </div>
  <!-- <div>
        <iframe w-300 aspect-video :src="videoSrc" scrolling="no" border="0" frameborder="no" framespacing="0"
          allowfullscreen="true" mute="true">
        </iframe>
      </div> -->
  <!-- Home
      <button @click="navigateTo('/demo')" class="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
        Edit
      </button> -->
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
const bvid = 'BV1Hx4y1z7Ne'
const videoSrc = computed(() => `//player.bilibili.com/player.html?bvid=${bvid}`)
const navigateTo = (src: string) => {
  router.push(src)
}
</script>

<style></style>
