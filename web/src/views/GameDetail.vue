<template>
    <div v-if="!show" bg-main-bg h-screen color-white text-3xl>建设中...</div>
    <div v-else bg-main-bg h-screen color-white overflow-scroll>
        <!-- Phone Mode -->
        <div p-4>
            <!-- logo -->
            <div h-16>
                <img h-full :src="game.logo" alt="">
            </div>
            <!-- theme name -->
            <div flex gap-4 my-4>
                <template v-for="(theme, index) in game.theme">
                    <div text-deep-gray bg-black-l-1 p-2 rounded-lg tracking-widest min-w-35
                        :class="{ 'theme-high-light': currentThemeIndex == index }" @click="handleThemeChange(index)">
                        <div text-xl>
                            {{ theme.name }}
                        </div>
                        <div text-sm>
                            {{ theme.subName }}
                        </div>
                    </div>
                </template>
            </div>
            <!-- imgs -->
            <div w-full aspect-video>
                <!-- Slider main container -->
                <div class="swiper" size-full>
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper" size-full>
                        <!-- Slides -->
                        <template v-for="img in currentTheme.imgs">
                            <div class="swiper-slide">
                                <img size-full :src="img" alt="">
                            </div>
                        </template>
                    </div>
                    <!-- If we need pagination -->
                    <!-- <div class="swiper-pagination"></div> -->

                    <!-- If we need navigation buttons -->
                    <!-- <div class="swiper-button-prev"></div> -->
                    <!-- <div class="swiper-button-next"></div> -->

                    <!-- If we need scrollbar -->
                    <div class="swiper-scrollbar"></div>
                </div>
            </div>
            <div w-full overflow-hidden mt-2>
                <div w-full overflow-x-auto overflow-y-hidden flex gap-1>
                    <template v-for="(img, index) in currentTheme.imgs">
                        <div :class="{ 'high-light': currentPicIndex == index }" h-16 aspect-video
                            @click="picClickHandler(index)">
                            <img size-full :src="img" alt="">
                        </div>
                    </template>
                </div>

            </div>

            <!-- custom theme parts change -->
            <div>
                <!-- role change buttons group -->
                <div>
                    <div>role1</div>
                </div>
                <!-- intro part -->
                <div>

                </div>
                <!-- creators -->
                <div>

                </div>
                <!-- lives -->
                <div>

                </div>
            </div>


        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import gameInfoJson from '@/assets/examplejson/gameInfo.json'

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
let swpier: Swiper
const currentPicIndex = ref(0)
const picClickHandler = (index: number) => {
    swpier.slideTo(index, 300, true);//切换到第一个slide，速度为1秒
}

const handleThemeChange = (themeIndex: number) => {
    currentThemeIndex.value = themeIndex
}

const router = useRouter()
const name = router.currentRoute.value.query.name

const show = ref(name == 'Dayz')
const game = gameInfoJson.filter(game => game.gameName == name)?.[0]
const currentThemeIndex = ref(0)
const currentTheme = computed(() => game.theme[currentThemeIndex.value])
const init = () => {
    swpier = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // autoplay: true,
        // If we need pagination
        // pagination: {
        //     el: '.swiper-pagination',
        // },

        // Navigation arrows
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },

        on: {
            slideChangeTransitionStart: function () {
                //@ts-ignore
                currentPicIndex.value = this.activeIndex
            },
        },
    });
}

onMounted(() => {
    init()
})
</script>

<style scoped>
.high-light {
    border: 1px solid white
}

.theme-high-light {
    color: #fff;
    background-color: #333;
    transition: all linear .2s;
    font-family: "思源黑体 Heavy";
}
</style>