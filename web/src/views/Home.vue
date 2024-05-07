<template>
  <div w-full antialiased tracking-widest>
    <div fixed top-0 left-0 z-999 w-full bg-main-bg :class="{ 'h-full': menuOpen }">
      <div w-full h-10 lg:flex gap-6 items-center justify-end px-4 box-border hidden>
        <template v-for="item in menuList">
          <div @click="navigateTo(item.path)" color-white text-sm cursor-pointer hover:bg-light-black w-20 h-10
            flex-center transition-all>{{ item.name
            }}</div>
        </template>
      </div>
      <div @click="changeMenu" flex flex-col px-4 lg:hidden>
        <div v-show="!menuOpen" self-start color-white w-10 h-10 class="i-humbleicons-bars" />
        <div v-show="menuOpen" self-start color-white w-10 h-10 class="i-humbleicons-times" />
      </div>
      <Transition name="pack_up">
        <ul v-show="menuOpen" px-2 list-none flex flex-col gap-4 my-0 lg:hidden pt-4>
          <template v-for="item in menuList">
            <li @click="navigateTo(item.path)" block rounded-lg px-4 py-2 text-4xl font-medium text-white flex
              justify-start>
              <span inline-block>{{ item.name }}</span>
            </li>
          </template>
        </ul>
      </Transition>
    </div>
    <section w-full h-screen bg-main-bg>
      <div overflow-hidden relative size-full>
        <img absolute w-full bottom-0 scale-200 left--40 sm:scale-160 sm:left--30 md:scale-130 lg:scale-120 xl:scale-80
          xl:left-0 lg:bottom--10 src="@/assets/imgs/25601440.jpg" alt="">
        <img absolute w-full top-20 scale-180 left-30 sm:scale-160 sm:left-25 md:scale-130 md:left-20 lg:scale-110
          lg:left-5 xl:scale-100 xl:left-0 xl:top--15 src="@/assets/imgs/DL改版-FILM.png" alt="">
      </div>
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
const menuOpen = ref(false)
const changeMenu = () => {
  menuOpen.value = !menuOpen.value
}

const router = useRouter()
// const bvid = 'BV1Hx4y1z7Ne'
// const videoSrc = computed(() => `//player.bilibili.com/player.html?bvid=${bvid}`)
const navigateTo = (src: string) => {
  router.push(src)
}
const menuList = ref([
  {
    name: 'UP主简介',
    path: '/intro'
  },
  {
    name: '凯文作品',
    path: '/arts'
  },
  {
    name: '一起玩游戏',
    path: '/playtogether'
  },
  {
    name: '粉丝卡片',
    path: '/cards'
  },
  {
    name: '联系我们',
    path: '/contact'
  },

])
</script>

<style scoped>
.pack_up-enter-active {
  transition: all .5s;
}

.pack_up-enter-active {
  /* transition-delay: .3s; */
}

.pack_up-enter-from,
.pack_up-leave-to {
  opacity: 0;
}
</style>
