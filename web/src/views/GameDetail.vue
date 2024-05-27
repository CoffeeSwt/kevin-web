<template>
    <div ref="scrollWrapperRef" bg-main-bg h-screen color-white overflow-hidden tracking-widest>
        <div size-full overflow-scroll scroll-smooth>
            <!-- Phone Mode -->
            <div v-if="!lgMode" p-4 flex flex-col box-border>
                <!-- logo -->
                <div h-16 flex-shrink-0>
                    <img h-full :src="game.logo" alt="">
                </div>
                <!-- theme name -->
                <div flex gap-4 my-4 flex-shrink-0>
                    <template v-for="(theme, index) in game.theme">
                        <div text-deep-gray bg-black-l-1 p-2 rounded-lg class="min-w-1/3"
                            :class="{ 'theme-high-light': currentThemeIndex == index }"
                            @click="handleThemeChange(index)">
                            <div text-lg font-700>
                                {{ theme.name }}
                            </div>
                            <div text-sm>
                                {{ theme.subName }}
                            </div>
                        </div>
                    </template>
                </div>
                <!-- imgs -->
                <div w-full aspect-video flex-shrink-0>
                    <!-- Slider main container -->
                    <div class="swiper" size-full>
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper" size-full>
                            <!-- Slides -->
                            <template v-for="img in currentTheme.imgs">
                                <div class="swiper-slide" rounded-lg overflow-hidden>
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
                <div w-full overflow-hidden mt-2 flex-shrink-0>
                    <div w-full overflow-x-auto overflow-y-hidden flex gap-1>
                        <template v-for="(img, index) in currentTheme.imgs">
                            <div :class="{ 'high-light': currentPicIndex == index }" h-14 aspect-video rounded-lg
                                box-border @click="picClickHandler(index)">
                                <img size-full rounded-lg :src="img" alt="">
                            </div>
                        </template>
                    </div>
                </div>

                <!-- custom theme parts change -->
                <div text-white flex-grow-1 w-full flex flex-col box-border mt-4>
                    <!-- menu part -->
                    <div flex gap-2 flex-shrink-0 w-full>
                        <template v-for="(tag, index) in currentTheme.tags">
                            <div :class="{ 'active-tag-menu': currentThemeTagIndex == index }" duration-100 p-3
                                @click="changCurrentThemeTagIndex(index)" rounded-t-lg text-nowrap>
                                {{ tag.cnName }}
                            </div>
                        </template>
                    </div>
                    <!-- content part -->
                    <div flex-grow-1 w-full overflow-y-hidden box-border class="active-tag" flex flex-col p-3>
                        <div h-0 flex-shrink-0></div>
                        <!-- text type -->
                        <div v-if="!tagContent.ifArrayContent" w-full box-border flex-grow-1 overflow-y-auto
                            whitespace-pre-wrap>
                            {{ tagContent.content }}
                        </div>
                        <!-- array type -->
                        <div v-else w-full box-border flex-grow-1 overflow-y-auto whitespace-pre-wrap>
                            <div v-if="tagContent.name == 'creators'" grid w-full grid-cols-4 gap-2>
                                <template v-for="creator in (tagContent.content as Array<{
                                    name: string;
                                    avator: string;
                                    info: string;
                                }>) ">
                                    <div class="w-full" flex flex-col items-center bg-black-l-1 py-3 rounded-lg>
                                        <div size-10 mb-1>
                                            <img size-full rounded-full :src="creator.avator" alt="">
                                        </div>
                                        <div text-base mb-0.5>{{ creator.name }}</div>
                                        <div text-xs>{{ creator.info }}</div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
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

const game = gameInfoJson.filter(game => game.gameName == name)?.[0]
const currentThemeIndex = ref(0)
const currentTheme = computed(() => game.theme[currentThemeIndex.value])

const currentThemeTagIndex = ref(0)
const changCurrentThemeTagIndex = (index: number) => {
    currentThemeTagIndex.value = index
}
const tagContent = computed(() => {
    const currentThemeTag = currentTheme.value.tags![currentThemeTagIndex.value]
    return {
        ifArrayContent: currentThemeTag.content instanceof Array,
        ...currentThemeTag
    }
})
const scrollWrapperRef = ref<null | HTMLDivElement>(null)
let resizeObserver;
const innerWidth = ref(0);
const lgMode = computed(() => innerWidth.value >= 1024)

const init = () => {
    resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
            innerWidth.value = entry.contentRect.width;
        }
    });
    resizeObserver.observe(scrollWrapperRef.value!);
    swpier = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
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
section::-webkit-scrollbar,
div::-webkit-scrollbar {
    display: none;
}

.high-light {
    border: 1px solid #333
}

.theme-high-light {
    color: #fff;
    background-color: #333;
    transition: all linear .2s;
    font-family: "思源黑体 Heavy";
}

.active-tag {
    background-color: #1a1a1ace;
}

.active-tag-menu {
    background-color: #1a1a1ace;
    font-weight: 700;
}
</style>