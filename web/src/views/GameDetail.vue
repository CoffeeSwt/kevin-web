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
            <div flex>
                <template v-for="(theme, index) in game.theme">
                    <div>
                        <div>{{ theme.name }}</div>
                        <div>{{ theme.subName }}</div>
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
let swiper
onMounted(() => {
    swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
})



const router = useRouter()
const name = router.currentRoute.value.query.name




const show = ref(name == 'Dayz')
const game = gameInfoJson.filter(game => game.gameName == name)?.[0]
const currentThemeIndex = ref(0)
const currentTheme = computed(() => game.theme[currentThemeIndex.value])
</script>

<style scoped></style>