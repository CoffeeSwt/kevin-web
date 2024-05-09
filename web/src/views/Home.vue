<template>
  <!-- Head Fixd Part -->
  <div fixed top-0 left-0 z-999 w-full bg-main-bg color-white :class="{ 'h-full': menuOpen, blur: upDetailShow }"
    transition-all>
    <div w-full h-10 lg:flex gap-6 items-center justify-end px-4 box-border hidden>
      <template v-for="item in menuList">
        <div @click="menuClickHandle(item)" text-sm cursor-pointer hover:bg-light-black w-20 h-10 flex-center
          transition-all>{{ item.name }}</div>
      </template>
    </div>
    <div @click="changeMenu" flex flex-col px-4 py-4 lg:hidden>
      <div v-show="!menuOpen" self-start w-10 h-10 class="i-humbleicons-bars" />
      <div v-show="menuOpen" self-start w-10 h-10 class="i-humbleicons-times" />
    </div>
    <Transition name="pack_up">
      <ul v-show="menuOpen" px-2 list-none flex flex-col gap-4 my-0 lg:hidden>
        <template v-for="item in menuList">
          <li @click="menuClickHandle(item, true)" block rounded-lg px-4 py-2 text-4xl font-medium flex justify-start>
            <span inline-block>{{ item.name }}</span>
          </li>
        </template>
      </ul>
    </Transition>
  </div>

  <!-- UP Detail Part-->
  <Transition name="leftfrom">
    <div v-if="upDetailShow" fixed rounded-lg drop-shadow-lg bg-gray-dark opacity-95
      class="w-80% h-60% top-1/2 left-1/2 translate-x--1/2 translate-y--1/2" z-9999 flex flex-col items-center>
      <div flex-grow></div>
      <div @click="upDetailShowChange" i-gg-close-o w-10 h-10 cursor-pointer></div>
    </div>
  </Transition>

  <!-- wrapper part -->
  <div ref='scrollWrapperRef' bg-main-bg color-white w-full antialiased tracking-widest snap-y h-screen overflow-auto
    snap-mandatory scroll-smooth :class="{ 'overflow-hidden': upDetailShow }">
    <!-- Hero Section scroll -->
    <section ref="section-hero" w-full h-screen snap-start :class="{ blur: upDetailShow }" transition-all>
      <div overflow-hidden relative size-full>
        <img absolute class="lg:w-4/10 w-7/9" bottom-0 right--4 lg:right-16 src="/imgs/25601440.png" alt="">
        <div absolute class="lg:w-1/3 w-6/9" top-18 left-4 lg:left-16>
          <img w-full src="/imgs/DL改版-FILM.png" alt="">
          <div absolute w-20 h-10 bottom-0 text-base translate-y-full-0.2 rounded-3xl text-blue-apple
            @click="upDetailShowChange" cursor-pointer lg:text-xl lg:w-24>了解凯文</div>
        </div>
      </div>
    </section>

    <!-- Phone Section scroll -->
    <section w-full h-screen snap-start px-4 box-border overflow-y-auto scroll-smooth lg:hidden>
      <section ref="section-arts" w-full flex flex-col items-center>
        <div h-18 flex-shrink-0></div>
        <div self-start mb-4 text-3xl flex-shrink-0>正在更新</div>
        <div w-full @click=heroClickHandler(picList.updataing!)>
          <section overflow-hidden aspect-video rounded-lg mb-1.5>
            <img size-full :src="picList.updataing?.url" alt="">
          </section>
          <div text-sm text-gray w-20 h-4>{{ picList.updataing?.tag }}</div>
          <div text-base h-4 w-full>{{ picList.updataing?.name }}</div>
        </div>
      </section>
      <div block-divid lg:hidden></div>
      <section w-full flex flex-col items-center>
        <div self-start my-4 text-3xl flex-shrink-0>往期作品</div>
        <section w-full flex box-border snap-x snap-proximity overflow-x-scroll overflow-y-hidden>
          <template v-for="i in picList.thePast">
            <div @click=heroClickHandler(i) snap-start class="w-3/4 " flex-grow-0 flex-shrink-0 pr-2 box-border h-auto>
              <img w-full aspect-video rounded-lg :src="i.url" alt="">
              <div text-xs text-gray w-16 h-3 mt-0.5>{{ i.tag }}</div>
              <div text-sm h-4 w-full>{{ i.name }}</div>
            </div>
          </template>
        </section>
      </section>
      <section ref="section-playtogether" w-full>
        <div h-18></div>
        <div mb-4 text-3xl>一起玩游戏</div>
        <div>
          <template v-for="gameCardInfo in gameCards">
            <GameCard class="w-full" :gameCardInfo="gameCardInfo" mb-8></GameCard>
          </template>
        </div>
      </section>
      <section ref="section-cards" w-full>
        <div h-18></div>
        <div mb-4 text-3xl>特别鸣谢</div>
        <div h-8></div>
        <div w-full>
          <template v-for="i in sponsors">
            <div class="w-3/4" mx-auto flex flex-col items-center mb-16 bg-black-l-1 p-11 px-8 rounded-2xl box-border
              aspect-43>
              <div flex flex-col items-center>
                <div w-20 h-20 bg-white rounded-full flex-center overflow-hidden>
                  <img :src="i.avator" alt="">
                </div>
                <div mt-6 mb-4 text-2xl>{{ i.name }}</div>
              </div>
              <div w-full text-sm text-center whitespace-pre-wrap tracking-widest line-height-relaxed>
                {{ i.text }}
              </div>
            </div>
          </template>
        </div>
      </section>

      <section ref="section-contact" w-full min-h-screen>
        <div h-18></div>
        <div mb-4 text-3xl>联系我们</div>
        <div h-8></div>
        <div w-full>
          11111联系我们11111联系我们11111联系我们11111联系我们11111联系我们11111联系我们
        </div>
      </section>
    </section>

    <!-- PC section scroll -->
    <section w-full h-screen snap-start px-12 box-border overflow-y-auto scroll-smooth hidden lg:block>
      <section ref="section-arts-pc" w-full pt-10 flex gap-8 text-3xl>
        <div class="w-2/5">
          <div mb-4>正在更新</div>
          <div w-full cursor-pointer @click=heroClickHandler(picList.updataing!) flex flex-col>
            <section w-full aspect-video mb-1>
              <img w-full rounded-lg :src="picList.updataing?.url" alt="">
            </section>
            <div text-base text-gray w-20 h-4.5>{{ picList.updataing?.tag }}</div>
            <div text-xl h-4 w-full>{{ picList.updataing?.name }}</div>
          </div>
        </div>
        <div class="w-3/5" flex flex-col>
          <div mb-4>往期作品</div>
          <div flex flex-grow-1>
            <section w-full flex-grow-1 grid grid-cols-3 gap-4 content-between>
              <template v-for="i in currenSixPast">
                <div w-full @click=heroClickHandler(i) cursor-pointer>
                  <div w-full aspect-video mb-1>
                    <img size-full rounded-lg :src="i.url" alt="">
                  </div>
                  <div text-xs text-gray w-16 h-3.5>{{ i.tag }}</div>
                  <div text-base h-3.5 w-full>{{ i.name }}</div>
                </div>
              </template>
            </section>
            <div @click="addPage" cursor-pointer hover:bg-gray-8 w-8 h-20 ml-2 transition-all border-2 border-gray-7
              border-solid rounded text-sm flex-center flex-wrap p-2>
              <div class="i-mingcute-refresh-3-line" w-5 h-5></div>
              <div>下</div>
              <div>一</div>
              <div>页</div>
            </div>
          </div>
        </div>
      </section>

      <section ref="section-playtogether-pc" w-full hidden lg:block>
        <div h-10></div>
        <div mb-4 text-3xl>一起玩游戏</div>
        <div flex flex-wrapg gap-6>
          <template v-for="gameCardInfo in gameCards">
            <GameCard class="w-60" :gameCardInfo="gameCardInfo" pcmode mb-8></GameCard>
          </template>
        </div>
      </section>

      <!-- sponsor section -->
      <section ref="section-cards-pc" w-full>
        <div h-10></div>
        <div mb-8 text-3xl>特别鸣谢</div>
        <div w-full flex gap-12>
          <template v-for="i in sponsors">
            <div w-50 flex flex-col items-center aspect-43 bg-black-l-1 p-8 rounded-2xl pt-12 hover:translate-y--5
              transition-all>
              <div flex flex-col items-center>
                <div w-20 h-20 bg-white rounded-full flex-center overflow-hidden>
                  <img :src="i.avator" alt="">
                </div>
                <div mt-6 mb-5 text-2xl>{{ i.name }}</div>
              </div>
              <div text-sm text-center whitespace-pre-wrap tracking-widest line-height-relaxed flex-grow-1>
                {{ i.text }}
              </div>
            </div>
          </template>
        </div>
      </section>

      <section ref="section-contact-pc" w-full min-h-screen-50>
        <div h-10></div>
        <div mb-4 text-3xl>联系我们</div>
        <div h-8></div>
        <div w-full>
          11111联系我们11111联系我们11111联系我们11111联系我们11111联系我们11111联系我们
        </div>
      </section>

    </section>
  </div>
</template>

<script setup lang="ts">
import artsLinkjson from '@/assets/examplejson/artsLink.json'
import menuListjson from '@/assets/examplejson/menuList.json'
import gameCardsjson from '@/assets/examplejson/gameCards.json'
import sponsorsjson from '@/assets/examplejson/sponsors.json'
import { GameCardInfo } from '@/types/common'
import { chunkArray } from '@/utils/math'
import GameCard from '@/components/GameCard.vue'
const upDetailShow = ref(false)
const upDetailShowChange = () => {
  upDetailShow.value = !upDetailShow.value
}
const sponsors = ref(sponsorsjson)
const scrollWrapperRef = ref<null | HTMLDivElement>(null)
let resizeObserver;
const innerWidth = ref(0);
const lgMode = computed(() => innerWidth.value >= 1024)
onMounted(() => {
  resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
      innerWidth.value = entry.contentRect.width;
    }
  });
  resizeObserver.observe(scrollWrapperRef.value!);
});

const menuOpen = ref(false)
const changeMenu = () => {
  menuOpen.value = !menuOpen.value
}

const heroClickHandler = (item: artsItem) => {
  const link = item.link
  if (!link) return
  window.open(link)
}

const menuClickHandle = (item: menuItem, delay: boolean = false) => {
  if (delay)
    changeMenu()

  let el: HTMLElement | undefined
  if (lgMode.value) {
    // pc
    el = pageRefs.value![item.pcRefName!] as HTMLElement
  } else {
    //phone
    el = pageRefs.value![item.refName!] as HTMLElement
  }
  if (!el)
    el = pageRefs.value![item.refName!] as HTMLElement
  el.scrollIntoView()
}
const ins = getCurrentInstance()
const pageRefs = computed(() => {
  return ins?.refs
})

const gameCards = ref<GameCardInfo[]>(gameCardsjson)

type menuItem = {
  refName?: string
  pcRefName?: string
  name: string
  path: string
}
const menuList = ref<Array<menuItem>>(menuListjson)
console.log(JSON.stringify(menuList.value))
type artsItem = {
  index: number,
  name: string,
  url: string,
  link?: string,
  tag?: string
}

const artsLink = ref<Array<artsItem>>(artsLinkjson)
const picList = computed(() => {
  const cloneArr = artsLink.value.map(i => i)
  const updataing = cloneArr.shift()
  return {
    updataing,
    thePast: cloneArr.sort((a, b) => a.index - b.index)
  }
})

const sixPast = reactive({
  page: 0,
  list: chunkArray(picList.value.thePast, 6)
})
const addPage = () => {
  sixPast.page++
}
const currenSixPast = computed(() => {
  const maxPage = sixPast.list.length
  return sixPast.list[sixPast.page % maxPage]
})

</script>

<style scoped>
.pack_up-enter-active {
  transition: all .5s;
}

.pack_up-enter-from,
.pack_up-leave-to {
  opacity: 0;
}

section::-webkit-scrollbar,
div::-webkit-scrollbar {
  display: none;
}

/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.leftfrom-enter-active {
  transition: all 0.3s linear;
}

.leftfrom-leave-active {
  transition: all 0.3s linear;
}

.leftfrom-enter-from,
.leftfrom-leave-to {
  opacity: 0;
}

.leftfrom-enter-to,
.leftfrom-leave-from {
  opacity: 1;
}

.blur {
  filter: blur(10px);

}

.blur::backdrop {
  filter: blur(10px);

}
</style>
