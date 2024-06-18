<template>
  <!-- Head Fixd Part -->
  <div @click="handleWrapperClick" fixed top-0 left-0 z-999 w-full bg-main-bg color-white
    :class="{ 'h-full': menuOpen, blur: upDetailShow }" transition-all>
    <div w-full h-10 lg:flex gap-6 items-center justify-end px-4 box-border hidden>
      <template v-for="item in menuList">
        <div @click.stop="menuClickHandle(item)" text-sm cursor-pointer hover:bg-light-black w-20 h-10 flex-center
          transition-all>{{ item.name }}</div>
      </template>
    </div>
    <div @click.stop="changeMenu" flex flex-col px-4 py-4 lg:hidden>
      <div v-show="!menuOpen" self-start w-10 h-10 class="i-humbleicons-bars" />
      <div v-show="menuOpen" self-start w-10 h-10 class="i-humbleicons-times" />
    </div>
    <Transition name="pack_up">
      <ul v-show="menuOpen" px-2 list-none flex flex-col gap-4 my-0 lg:hidden>
        <template v-for="item in menuList">
          <li @click.stop="menuClickHandle(item, true)" block rounded-lg px-4 py-2 text-4xl font-bold flex
            justify-start>
            <span inline-block>{{ item.name }}</span>
          </li>
        </template>
      </ul>
    </Transition>
  </div>

  <!-- UP Detail Part-->
  <Transition name="leftfrom">
    <div v-if="upDetailShow" fixed rounded-lg drop-shadow-lg bg-gray-dark opacity-95
      class="lg:w-60% h-30% w-80% h-85% top-1/2 left-1/2 translate-x--1/2 translate-y--1/2" z-9999 flex flex-col
      items-center lg:p-8 p-4>
      <!-- phone up detail box -->
      <div lg:hidden flex-grow text-white-light w-full flex flex-col overflow-hidden antialiased tracking-widest>
        <div flex-center flex-shrink-0 w-full>
          <div class="w-full" aspect-square>
            <img size-full rounded-lg src="https://ik.imagekit.io/coffeeswt/public/avator/kevin.jpg?updatedAt=1716801259597" alt="">
          </div>
        </div>
        <div flex justify-between items-center>
          <div text-4xl font-medium>凯文</div>
          <div text-xs flex items-center flex-col>
            <div text-xs flex items-center gap-1 cursor-pointer
              @click.stop="linkJump('https://space.bilibili.com/24738225')">
              <div i-ant-design-bilibili-filled w-5 h-5>
              </div>
              <div font-light>凯文不是大叔</div>
            </div>
            <div text-xs flex items-center gap-1 cursor-pointer
              @click.stop="linkJump('https://v.douyin.com/i2yowJyy/')">
              <div i-ant-design-tik-tok-filled w-5 h-5>
              </div>
              <div font-light>凯文是男同学</div>
            </div>
          </div>
        </div>
        <div h-2 flex-shrink-0></div>
        <div text-sm overflow-y-scroll scroll-smooth font-light>
          <KevinInfo mt-1></KevinInfo>
        </div>
      </div>
      <!-- pc up detail box -->
      <div hidden flex-grow text-white-light w-full lg:flex gap-6 overflow-hidden antialiased tracking-widest h-full>
        <div flex-shrink-0>
          <img h-full rounded-lg src="https://ik.imagekit.io/coffeeswt/public/avator/kevin1.jpg?updatedAt=1716801260429" alt="">
        </div>
        <div flex-grow-1 overflow-hidden h-full flex flex-col>
          <div flex flex-col items-start>
            <div text-5xl mb-2 flex justify-between w-full>
              <div font-bold>凯文</div>
              <div @click.stop="upDetailShowChange" i-gg-close-o size-12 cursor-pointer color-white-light
                hover:bg-light-black transition-all flex-shrink-0></div>
            </div>
            <div text-2xl flex items-center flex-col font-normal>
              <div flex items-center gap-1 cursor-pointer hover:translate-x-2 transition-all
                @click.stop="linkJump('https://space.bilibili.com/24738225')">
                <div i-ant-design-bilibili-filled size-8>
                </div>
                <div>凯文不是大叔</div>
              </div>
              <div flex items-center gap-1 cursor-pointer hover:translate-x-2 transition-all
                @click.stop="linkJump('https://v.douyin.com/i2yowJyy/')">
                <div i-ant-design-tik-tok-filled size-8>
                </div>
                <div>凯文是男同学</div>
              </div>
            </div>
          </div>
          <div h-2 flex-shrink-0></div>
          <div text-base overflow-y-scroll scroll-smooth pt-2 flex-grow-1 font-light>
            <KevinInfo></KevinInfo>
          </div>
        </div>
      </div>

      <!-- footer -->
      <div h-2 flex-shrink-0></div>
      <div @click.stop="upDetailShowChange" lg:hidden i-gg-close-o size-10 cursor-pointer color-white-light
        hover:bg-light-black transition-all flex-shrink-0></div>
    </div>
  </Transition>

  <!-- wrapper part -->
  <div @click="handleWrapperClick" ref='scrollWrapperRef' bg-main-bg color-white w-full antialiased tracking-widest
    snap-y h-screen overflow-auto snap-mandatory scroll-smooth :class="{ 'overflow-hidden': upDetailShow }">
    <!-- Hero Section scroll -->
    <section ref="section-hero" w-full h-screen snap-start :class="{ blur: upDetailShow }" transition-all>
      <div overflow-hidden relative size-full>
        <img absolute class="lg:w-4/10 w-7/9" bottom-0 right--4 lg:right-16 src="https://ik.imagekit.io/coffeeswt/public/imgs/25601440.png?updatedAt=1716801234688" alt="">
        <div absolute class="lg:w-1/3 w-6/9" top-18 left-4 lg:left-16>
          <img w-full src="https://ik.imagekit.io/coffeeswt/public/imgs/DL%E6%94%B9%E7%89%88-FILM.png?updatedAt=1716801247331" alt="">
          <div w-23 lg:h-10 h-8 bottom-0 text-base rounded-3xl text-blue-apple @click.stop="upDetailShowChange"
            cursor-pointer lg:text-xl lg:w-30 flex items-center bg-light-black justify-center mt-2 hover:scale-90
            transition-all>
            <div i-ic-outline-add-circle-outline w-4 h-4 lg:h-6 lg:w-6></div>
            <div text-xs font-medium lg:text-base>了解凯文</div>
          </div>
        </div>
        <div flex absolute lg:left-16 left-4 bottom-8>
          <div i-ant-design-bilibili-filled w-15 h-15 cursor-pointer lg:hover:translate-y--2 transition-all
            @click.stop="linkJump('https://space.bilibili.com/24738225')"></div>
          <div i-ant-design-tik-tok-filled w-15 h-15 cursor-pointer lg:hover:translate-y--2 transition-all
            @click.stop="linkJump('https://v.douyin.com/i2yowJyy/')">
          </div>
        </div>
      </div>
    </section>

    <!-- Phone Section scroll -->
    <section w-full h-screen snap-start px-4 box-border overflow-y-auto scroll-smooth lg:hidden>
      <section ref="section-arts" w-full flex flex-col items-center>
        <div h-18 flex-shrink-0></div>
        <div self-start mb-4 text-3xl flex-shrink-0 font-bold>正在更新</div>
        <div w-full @click.stop=heroClickHandler(picList.updataing!)>
          <section overflow-hidden aspect-video rounded-lg mb-1.5>
            <img size-full :src="picList.updataing?.url" alt="">
          </section>
          <div text-sm text-gray w-20 h-4 font-light>{{ picList.updataing?.tag }}</div>
          <div text-base h-4 w-full font-medium>{{ picList.updataing?.name }}</div>
        </div>
      </section>
      <div block-divid lg:hidden></div>
      <section w-full flex flex-col items-center>
        <div self-start my-4 text-3xl font-bold>往期作品</div>
        <section w-full flex box-border snap-x snap-proximity overflow-x-scroll overflow-y-hidden flex-grow-1>
          <template v-for="i in picList.thePast">
            <div @click.stop=heroClickHandler(i) snap-start class="w-3/4 " flex-grow-0 flex-shrink-0 pr-2 box-border
              h-auto>
              <img box-border w-full aspect-video rounded-lg :src="i.url" alt="">
              <div box-border text-xs text-gray w-16 h-3 mt-0.5 font-extraLight>{{ i.tag }}</div>
              <div box-border text-sm w-full mt-0.5 font-regular>{{ i.name }}</div>
            </div>
          </template>
        </section>
      </section>
      <section ref="section-playtogether" w-full>
        <div h-18></div>
        <div mb-4 text-3xl font-bold>一起玩游戏</div>
        <div>
          <template v-for="gameCardInfo in gameCards">
            <GameCard class="w-full" :gameCardInfo="gameCardInfo" mb-8></GameCard>
          </template>
        </div>
      </section>
      <section ref="section-cards" w-full>
        <div h-18></div>
        <div mb-4 text-3xl font-bold>特别鸣谢</div>
        <div h-8></div>
        <div w-full>
          <template v-for="i in sponsors">
            <div class="w-4/5" mx-auto flex flex-col items-center mb-16 bg-black-l-1 p-11 px-8 rounded-2xl box-border
              aspect-43>
              <div flex flex-col items-center>
                <div w-20 h-20 bg-white rounded-full flex-center overflow-hidden>
                  <img :src="i.avator" alt="">
                </div>
                <div mt-6 mb-4 text-2xl font-bold>{{ i.name }}</div>
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
        <div mb-4 text-3xl font-bold>联系凯文</div>
        <div h-8></div>
        <div w-full>
          <!-- 广告与植入 -->
          <!-- <div w-full>
            <div text-xl font-medium>广告与植入</div>
            <div class="w-full" my-2>
              围绕用户、创作者和内容，B站构建了一个源源不断产生优质内容的生态系统。中国最优秀的专业创作者都聚集在B站创作内容，涵盖生活、游戏、时尚、知识、音乐等数千个品类和圈层，引领着流行文化的风潮，成为中文互联网极其独特的存在。目前，B站94%的视频播放量都来自于专业用户创作的视频（Professional
              User Generated Video，PUGV）。
            </div>
          </div> -->
          <div h-8></div>
          <!-- 粉丝群 -->
          <div w-full>
            <div text-xl font-medium>粉丝群</div>
            <div class="w-full" my-2>
              围绕用户、创作者和内容，B站构建了一个源源不断产生优质内容的生态系统。中国最优秀的专业创作者都聚集在B站创作内容，涵盖生活、游戏、时尚、知识、音乐等数千个品类和圈层，引领着流行文化的风潮，成为中文互联网极其独特的存在。目前，B站94%的视频播放量都来自于专业用户创作的视频（Professional
              User Generated Video，PUGV）。
            </div>
          </div>
          <div h-8></div>
          <!-- 媒体平台 -->
          <div w-full flex mb-10>
            <div i-ant-design-bilibili-filled w-15 h-15 @click.stop="linkJump('https://space.bilibili.com/24738225')"
              cursor-pointer></div>
            <div i-ant-design-tik-tok-filled w-15 h-15 cursor-pointer
              @click.stop="linkJump('https://v.douyin.com/i2yowJyy/')">
            </div>
          </div>
        </div>
      </section>
    </section>

    <!-- PC section scroll -->
    <section w-full h-screen snap-start px-12 box-border overflow-y-auto scroll-smooth hidden lg:block>
      <section ref="section-arts-pc" w-full pt-10 flex gap-8 text-3xl>
        <div class="w-2/5">
          <div mb-4 font-heavy>正在更新</div>
          <div w-full cursor-pointer @click.stop=heroClickHandler(picList.updataing!) flex flex-col>
            <section w-full aspect-video mb-1>
              <img w-full rounded-lg :src="picList.updataing?.url" alt="">
            </section>
            <div text-base text-gray w-20 h-4.5 font-normal>{{ picList.updataing?.tag }}</div>
            <div text-xl h-4 w-ful font-regular>{{ picList.updataing?.name }}</div>
          </div>
        </div>
        <div class="w-3/5" flex flex-col>
          <div mb-4 font-heavy>往期作品</div>
          <div flex flex-grow-1>
            <section w-full flex-grow-1 grid grid-cols-3 gap-4 content-between>
              <template v-for="i in currenSixPast">
                <div w-full @click.stop=heroClickHandler(i) cursor-pointer>
                  <div w-full aspect-video mb-1>
                    <img size-full rounded-lg :src="i.url" alt="">
                  </div>
                  <div text-xs text-gray w-16 h-3.5 font-light>{{ i.tag }}</div>
                  <div text-base h-3.5 w-full font-normal>{{ i.name }}</div>
                </div>
              </template>
            </section>
            <div @click.stop="addPage" cursor-pointer hover:bg-black-l-1 w-8 h-20 ml-2 transition-all border-2
              border-light-black border-solid rounded text-sm flex-center flex-wrap p-2>
              <div class="i-mingcute-refresh-3-line" w-5 h-5></div>
              <div>下</div>
              <div>一</div>
              <div>页</div>
            </div>
          </div>
        </div>
      </section>

      <section ref="section-playtogether-pc" w-full hidden lg:block lg:mt-8>
        <div h-10></div>
        <div mb-4 text-3xl font-heavy>一起玩游戏</div>
        <div flex flex-wrapg gap-6>
          <template v-for="gameCardInfo in gameCards">
            <GameCard class="w-60" :gameCardInfo="gameCardInfo" pcmode mb-8></GameCard>
          </template>
        </div>
      </section>

      <!-- sponsor section -->
      <section ref="section-cards-pc" w-full lg:mt-8>
        <div h-10></div>
        <div mb-8 font-heavy text-3xl>特别鸣谢</div>
        <div w-full flex gap-12 flex-wrap>
          <template v-for="i in sponsors">
            <div w-55 flex flex-col items-center aspect-43 bg-black-l-1 p-8 rounded-2xl pt-12 hover:translate-y--5
              transition-all>
              <div flex flex-col items-center>
                <div w-20 h-20 bg-white rounded-full flex-center overflow-hidden>
                  <img :src="i.avator" alt="">
                </div>
                <div mt-6 mb-5 text-2xl font-bold text-center>{{ i.name }}</div>
              </div>
              <div text-sm text-center whitespace-pre-wrap tracking-widest line-height-relaxed flex-grow-1>
                {{ i.text }}
              </div>
            </div>
          </template>
        </div>
      </section>

      <section ref="section-contact-pc" w-full min-h-screen-50 mt-8>
        <div h-10></div>
        <div mb-12 text-3xl font-heavy>联系凯文</div>
        <div w-full>
          <!-- 广告与植入 -->
          <div w-full>
            <div text-xl font-bold>广告与植入</div>
            <div class="w-2/5" my-2>
              围绕用户、创作者和内容，B站构建了一个源源不断产生优质内容的生态系统。中国最优秀的专业创作者都聚集在B站创作内容，涵盖生活、游戏、时尚、知识、音乐等数千个品类和圈层，引领着流行文化的风潮，成为中文互联网极其独特的存在。目前，B站94%的视频播放量都来自于专业用户创作的视频（Professional
              User Generated Video，PUGV）。
            </div>
          </div>
          <div h-8></div>
          <!-- 粉丝群 -->
          <div w-full>
            <div text-xl font-bold>粉丝群</div>
            <div class="w-2/5" my-2>
              围绕用户、创作者和内容，B站构建了一个源源不断产生优质内容的生态系统。中国最优秀的专业创作者都聚集在B站创作内容，涵盖生活、游戏、时尚、知识、音乐等数千个品类和圈层，引领着流行文化的风潮，成为中文互联网极其独特的存在。目前，B站94%的视频播放量都来自于专业用户创作的视频（Professional
              User Generated Video，PUGV）。
            </div>
          </div>
          <div h-8></div>
          <!-- 媒体平台 -->
          <div w-full flex mb-10>
            <div i-ant-design-bilibili-filled w-15 h-15 @click.stop="linkJump('https://space.bilibili.com/24738225')"
              cursor-pointer>
            </div>
            <div i-ant-design-tik-tok-filled w-15 h-15 cursor-pointer
              @click.stop="linkJump('https://v.douyin.com/i2yowJyy/')">
            </div>
          </div>
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
import KevinInfo from '@/views/components/KevinInfo.vue'
const handleWrapperClick = () => {
  if (upDetailShow.value)
    upDetailShow.value = false
}
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
  linkJump(link)
}
const linkJump = (link: string) => {
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
