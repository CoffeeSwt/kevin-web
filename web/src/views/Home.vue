<template>
  <div ref='scrollWrapperRef' bg-main-bg color-white w-full antialiased tracking-widest snap-y h-screen overflow-auto
    snap-mandatory>
    <section w-full h-screen snap-start>
      <div overflow-hidden relative size-full>
        <img absolute w-full bottom-0 scale-200 left--40 sm:scale-160 sm:left--30 md:scale-130 lg:scale-120 xl:scale-80
          xl:left-0 lg:bottom--10 src="/imgs/25601440.jpg" alt="">
        <img absolute w-full top-20 scale-180 left-30 sm:scale-160 sm:left-25 md:scale-130 md:left-20 lg:scale-110
          lg:left-5 xl:scale-100 xl:left-0 xl:top--15 src="/imgs/DL改版-FILM.png" alt="">
      </div>
    </section>
    <section w-full h-screen snap-start flex flex-col items-center px-4 box-border overflow-y-auto>
      <div h-14 flex-shrink-0></div>
      <div self-start mb-4 text-2xl flex-shrink-0>正在更新</div>
      <section overflow-hidden relative w-full aspect-video rounded-lg flex-shrink-0>
        <img size-full :src="picList.updataing?.url" alt="">
      </section>
      <div block-divid></div>
      <div self-start my-4 text-2xl flex-shrink-0>往期作品</div>
      <section flex-shrink-0 w-full flex box-border overflow-x-auto overflow-y-hidden snap-x snap-proximity>
        <template v-for="i in picList.thePast">
          <div snap-start class="w-3/4" aspect-video flex-grow-0 flex-shrink-0 pr-2 box-border overflow-hidden>
            <img size-full rounded-lg :src="i.url" alt="">
          </div>
        </template>
      </section>
      <div block-divid></div>
      <section w-full h-100 flex-shrink-0>
        123123
      </section>
      <section w-full h-100 flex-shrink-0>
        1231231
      </section>
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
  <div fixed top-0 left-0 z-999 w-full bg-main-bg :class="{ 'h-full': menuOpen }">
    <div w-full h-10 lg:flex gap-6 items-center justify-end px-4 box-border hidden>
      <template v-for="item in menuList">
        <div @click="navigateTo(item.path)" color-white text-sm cursor-pointer hover:bg-light-black w-20 h-10
          flex-center transition-all>{{ item.name
          }}</div>
      </template>
    </div>
    <div @click="changeMenu" flex flex-col px-4 pt-4 lg:hidden>
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
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const menuOpen = ref(false)
const changeMenu = () => {
  menuOpen.value = !menuOpen.value
}
const scrollWrapperRef = ref<null | HTMLDivElement>(null)

const router = useRouter()
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
const artsLink = ref([
  {
    index: 0,
    name: '',
    url: '/imgs/DayzNamalsk.jpg',
    link: ''
  },
  {
    index: 1,
    name: '',
    url: '/imgs/Imnotscum.jpg',
    link: ''
  },
  {
    index: 2,
    name: '',
    url: '/imgs/deadisland.jpg',
    link: ''
  },
  {
    index: 3,
    name: '',
    url: '/imgs/thelastone.jpg',
    link: ''
  },
  {
    index: 4,
    name: '',
    url: '/imgs/sevendaysA20.jpg',
    link: ''
  },
  {
    index: 5,
    name: '',
    url: '/imgs/Theroad.png',
    link: ''
  },
  {
    index: 6,
    name: '',
    url: '/imgs/thelast.jpg',
    link: ''
  },
  {
    index: 7,
    name: '',
    url: '/imgs/sevendays2.png',
    link: ''
  },
  {
    index: 8,
    name: '',
    url: '/imgs/a21.png',
    link: ''
  }
])
const picList = computed(() => {
  const cloneArr = artsLink.value.map(i => i)
  const updataing = cloneArr.shift()
  return {
    updataing,
    thePast: cloneArr.sort((a, b) => a.index - b.index)
  }
})



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

.snap {
  scroll-snap-type: y mandatory;
}

div::-webkit-scrollbar {
  display: none;
}
</style>
