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
          <li @click="menuClickHandle(item, true)" block rounded-lg px-4 py-2 text-4xl font-bold flex justify-start>
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
            <img size-full rounded-lg src="/avator/kevin.jpg" alt="">
          </div>
        </div>
        <div flex justify-between items-center>
          <div text-4xl font-medium>凯文</div>
          <div text-xs flex items-center flex-col>
            <div text-xs flex items-center gap-1 cursor-pointer
              @click="linkJump('https://space.bilibili.com/24738225')">
              <div i-ant-design-bilibili-filled w-5 h-5>
              </div>
              <div font-light>凯文不是大叔</div>
            </div>
            <div text-xs flex items-center gap-1 cursor-pointer @click="linkJump('https://v.douyin.com/i2yowJyy/')">
              <div i-ant-design-tik-tok-filled w-5 h-5>
              </div>
              <div font-light>凯文是男同学</div>
            </div>
          </div>
        </div>
        <div h-2 flex-shrink-0></div>
        <div text-sm overflow-y-scroll scroll-smooth font-light>
          <p>凯文，一个典型的斜杠青年。1989年出生于武汉，UP主、人像摄影师、空间摄影师、导演、品牌策划师、创意人，广告人。</p>
          <p>
            2020年7月，决定放下手上的商业项目投身UP主行列，他创作的视频作品无疑在多个方面多展现出了其独特的魅力和高质量。凯文之所以受到广大网友的喜爱和认可，不仅仅是因为他在游戏电影领域的专业制作技巧，更是因为他对于内容的深度挖掘和对于观众需求的精准把握。
          </p>
          <p>
            首先，从制作技术层面来看，凯文不是大叔的视频作品堪称精良。无论是剪辑手法的运用，还是特效的添加，都显示出他对于视频制作的专业素养和深厚功底。他的视频往往能够将游戏画面与电影元素完美结合，为观众呈现出一种既熟悉又新颖的视听体验。这种高质量的制作水准，使得他的视频在游戏电影领域独树一帜，赢得了大量粉丝的追捧和喜爱。
          </p>

          <p>
            其次，凯文不是大叔的视频内容丰富多样，涵盖了众多游戏和电影题材。他不仅能够深入挖掘游戏的内在魅力，将游戏故事以电影化的方式呈现给观众，还能够结合热门电影事件，创作出富有创意和趣味性的视频作品。这种多样化的内容选择，不仅满足了不同观众的喜好和需求，也使得他的视频更具吸引力和影响力。
          </p>

          <p>
            此外，凯文不是大叔在视频创作中还注重与观众的互动和沟通。他经常在视频下方留言区与观众进行互动，倾听他们的意见和建议，不断改进自己的创作方式。这种与观众的紧密互动，不仅增强了观众的参与感和归属感，也使得他的视频更加贴近观众的实际需求，更具观赏性和共鸣力。
          </p>
          <p>
            在游戏电影领域，凯文不是大叔的视频无疑是最好的之一。他以其独特的创作风格和高质量的制作水准，赢得了广大网友的认可和喜爱。他的视频作品不仅给观众带来了极致的视听享受，也引发了人们对于游戏和电影艺术的深度思考和探讨。可以说，凯文不是大叔的视频作品在游戏电影领域树立了一个新的标杆，为后来的创作者提供了宝贵的借鉴和启示。
          </p>
          <p>
            最后，凯文不是大叔的视频之所以能够受到如此广泛的赞誉和好评，还因为他对于创作的热情和坚持。他始终保持着对于游戏和电影艺术的热爱和追求，不断尝试新的创作方式和手法，力求为观众带来更加精彩和有趣的作品。这种对于创作的热情和坚持，使得他的视频作品始终保持着高质量和创新性，不断引领着游戏电影领域的发展潮流。
          </p>
          <p>
            哔哩哔哩UP主凯文不是大叔的视频作品在游戏电影领域堪称最佳之一。他以其独特的创作风格、高质量的制作水准和与观众的紧密互动，赢得了广大网友的喜爱和认可。他的视频作品不仅为观众带来了极致的视听享受，也引发了人们对于游戏和电影艺术的深度思考和探讨。相信在未来的日子里，凯文不是大叔会继续创作出更多优秀的视频作品，为游戏电影领域的发展贡献自己的力量。
          </p>
        </div>
      </div>
      <!-- pc up detail box -->
      <div hidden flex-grow text-white-light w-full lg:flex gap-6 overflow-hidden antialiased tracking-widest h-full>
        <div flex-shrink-0 class="w-2/5">
          <img size-full rounded-lg src="/avator/kevin1.jpg" alt="">
        </div>
        <div flex-grow-1 overflow-hidden h-full flex flex-col>
          <div flex flex-col items-start>
            <div text-5xl mb-2 flex justify-between w-full>
              <div font-bold>凯文</div>
              <div @click="upDetailShowChange" i-gg-close-o size-12 cursor-pointer color-white-light
                hover:bg-light-black transition-all flex-shrink-0></div>
            </div>
            <div text-2xl flex items-center flex-col font-normal>
              <div flex items-center gap-1 cursor-pointer hover:translate-x-2 transition-all
                @click="linkJump('https://space.bilibili.com/24738225')">
                <div i-ant-design-bilibili-filled size-8>
                </div>
                <div>凯文不是大叔</div>
              </div>
              <div flex items-center gap-1 cursor-pointer hover:translate-x-2 transition-all
                @click="linkJump('https://v.douyin.com/i2yowJyy/')">
                <div i-ant-design-tik-tok-filled size-8>
                </div>
                <div>凯文是男同学</div>
              </div>
            </div>
          </div>
          <div h-2 flex-shrink-0></div>
          <div text-base overflow-y-scroll scroll-smooth pt-2 flex-grow-1 font-light>
            <p mt-0>凯文，一个典型的斜杠青年。1989年出生于武汉，UP主、人像摄影师、空间摄影师、导演、品牌策划师、创意人，广告人。</p>
            <p>
              2020年7月，决定放下手上的商业项目投身UP主行列，他创作的视频作品无疑在多个方面多展现出了其独特的魅力和高质量。凯文之所以受到广大网友的喜爱和认可，不仅仅是因为他在游戏电影领域的专业制作技巧，更是因为他对于内容的深度挖掘和对于观众需求的精准把握。
            </p>
            <p>
              首先，从制作技术层面来看，凯文不是大叔的视频作品堪称精良。无论是剪辑手法的运用，还是特效的添加，都显示出他对于视频制作的专业素养和深厚功底。他的视频往往能够将游戏画面与电影元素完美结合，为观众呈现出一种既熟悉又新颖的视听体验。这种高质量的制作水准，使得他的视频在游戏电影领域独树一帜，赢得了大量粉丝的追捧和喜爱。
            </p>

            <p>
              其次，凯文不是大叔的视频内容丰富多样，涵盖了众多游戏和电影题材。他不仅能够深入挖掘游戏的内在魅力，将游戏故事以电影化的方式呈现给观众，还能够结合热门电影事件，创作出富有创意和趣味性的视频作品。这种多样化的内容选择，不仅满足了不同观众的喜好和需求，也使得他的视频更具吸引力和影响力。
            </p>

            <p>
              此外，凯文不是大叔在视频创作中还注重与观众的互动和沟通。他经常在视频下方留言区与观众进行互动，倾听他们的意见和建议，不断改进自己的创作方式。这种与观众的紧密互动，不仅增强了观众的参与感和归属感，也使得他的视频更加贴近观众的实际需求，更具观赏性和共鸣力。
            </p>
            <p>
              在游戏电影领域，凯文不是大叔的视频无疑是最好的之一。他以其独特的创作风格和高质量的制作水准，赢得了广大网友的认可和喜爱。他的视频作品不仅给观众带来了极致的视听享受，也引发了人们对于游戏和电影艺术的深度思考和探讨。可以说，凯文不是大叔的视频作品在游戏电影领域树立了一个新的标杆，为后来的创作者提供了宝贵的借鉴和启示。
            </p>
            <p>
              最后，凯文不是大叔的视频之所以能够受到如此广泛的赞誉和好评，还因为他对于创作的热情和坚持。他始终保持着对于游戏和电影艺术的热爱和追求，不断尝试新的创作方式和手法，力求为观众带来更加精彩和有趣的作品。这种对于创作的热情和坚持，使得他的视频作品始终保持着高质量和创新性，不断引领着游戏电影领域的发展潮流。
            </p>
            <p>
              哔哩哔哩UP主凯文不是大叔的视频作品在游戏电影领域堪称最佳之一。他以其独特的创作风格、高质量的制作水准和与观众的紧密互动，赢得了广大网友的喜爱和认可。他的视频作品不仅为观众带来了极致的视听享受，也引发了人们对于游戏和电影艺术的深度思考和探讨。相信在未来的日子里，凯文不是大叔会继续创作出更多优秀的视频作品，为游戏电影领域的发展贡献自己的力量。
            </p>
          </div>
        </div>
      </div>

      <!-- footer -->
      <div h-2 flex-shrink-0></div>
      <div @click="upDetailShowChange" lg:hidden i-gg-close-o size-10 cursor-pointer color-white-light
        hover:bg-light-black transition-all flex-shrink-0></div>
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
          <div w-23 lg:h-10 h-8 bottom-0 text-base rounded-3xl text-blue-apple @click="upDetailShowChange"
            cursor-pointer lg:text-xl lg:w-30 flex items-center bg-light-black justify-center mt-2 hover:scale-90
            transition-all>
            <div i-ic-outline-add-circle-outline w-4 h-4 lg:h-6 lg:w-6></div>
            <div text-xs font-medium lg:text-base>了解凯文</div>
          </div>
        </div>
        <div flex absolute lg:left-16 left-4 bottom-8>
          <div i-ant-design-bilibili-filled w-15 h-15 cursor-pointer lg:hover:translate-y--2 transition-all
            @click="linkJump('https://space.bilibili.com/24738225')"></div>
          <div i-ant-design-tik-tok-filled w-15 h-15 cursor-pointer lg:hover:translate-y--2 transition-all
            @click="linkJump('https://v.douyin.com/i2yowJyy/')">
          </div>
        </div>
      </div>
    </section>

    <!-- Phone Section scroll -->
    <section w-full h-screen snap-start px-4 box-border overflow-y-auto scroll-smooth lg:hidden>
      <section ref="section-arts" w-full flex flex-col items-center>
        <div h-18 flex-shrink-0></div>
        <div self-start mb-4 text-3xl flex-shrink-0 font-bold>正在更新</div>
        <div w-full @click=heroClickHandler(picList.updataing!)>
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
            <div @click=heroClickHandler(i) snap-start class="w-3/4 " flex-grow-0 flex-shrink-0 pr-2 box-border h-auto>
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
        <div mb-4 text-3xl font-bold>联系我们</div>
        <div h-8></div>
        <div w-full>
          <!-- 广告与植入 -->
          <div w-full>
            <div text-xl font-medium>广告与植入</div>
            <div class="w-full" my-2>
              围绕用户、创作者和内容，B站构建了一个源源不断产生优质内容的生态系统。中国最优秀的专业创作者都聚集在B站创作内容，涵盖生活、游戏、时尚、知识、音乐等数千个品类和圈层，引领着流行文化的风潮，成为中文互联网极其独特的存在。目前，B站94%的视频播放量都来自于专业用户创作的视频（Professional
              User Generated Video，PUGV）。
            </div>
          </div>
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
            <div i-ant-design-bilibili-filled w-15 h-15 @click="linkJump('https://space.bilibili.com/24738225')"
              cursor-pointer></div>
            <div i-ant-design-tik-tok-filled w-15 h-15 cursor-pointer
              @click="linkJump('https://v.douyin.com/i2yowJyy/')">
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
          <div w-full cursor-pointer @click=heroClickHandler(picList.updataing!) flex flex-col>
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
                <div w-full @click=heroClickHandler(i) cursor-pointer>
                  <div w-full aspect-video mb-1>
                    <img size-full rounded-lg :src="i.url" alt="">
                  </div>
                  <div text-xs text-gray w-16 h-3.5 font-light>{{ i.tag }}</div>
                  <div text-base h-3.5 w-full font-normal>{{ i.name }}</div>
                </div>
              </template>
            </section>
            <div @click="addPage" cursor-pointer hover:bg-black-l-1 w-8 h-20 ml-2 transition-all border-2
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
        <div mb-12 text-3xl font-heavy>联系我们</div>
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
            <div i-ant-design-bilibili-filled w-15 h-15 @click="linkJump('https://space.bilibili.com/24738225')"
              cursor-pointer>
            </div>
            <div i-ant-design-tik-tok-filled w-15 h-15 cursor-pointer
              @click="linkJump('https://v.douyin.com/i2yowJyy/')">
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
