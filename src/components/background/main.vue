<template>
    <div class="backgroud">


        <swiper :slides-per-view="1" direction="vertical"   :initial-slide="activeIndex" loop :modules="modules"
            :pagination="{ clickable: true }" style="height:100vh;z-index:2;" :space-between="0" @swiper="onSwiper"
            @slideChange="onSlideChange">
            <swiper-slide v-for="sw in items" :key="sw.background">
                <div class="slde-bg" :style="{ background: `url(${sw.background})` }"></div>
            </swiper-slide>

        </swiper>

        <slot></slot>

    </div>
</template>


<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Controller } from 'swiper/modules';

import config from '../../config.json'
import { ref } from 'vue';

const items = config.swipers

const modules = [Pagination, Controller]

const controlledSwiper = ref(null as any);

const storage = window.localStorage;

const storageKey = 'bg-active-index'

const defaultIndex = storage.getItem(storageKey) && Number(storage.getItem(storageKey)) || 0
const activeIndex = defaultIndex

const onSwiper = (swiper: any) => {
    controlledSwiper.value = swiper;
};
const onSlideChange = (swiper: any) => {
    const { activeIndex } = swiper
    storage.setItem(storageKey, activeIndex)
};




</script>

<style scoped>
.backgroud {
    height: 100%;
}

.slde-bg {
    height: 100%;
    background-size: cover !important;
}

.slde-bg:nth-child(1) {
    background: url("/src/assets/images/background.jpg");
}
</style>

