


<template>
    <div :class="{ 'modules': true, visible: state.visible }">

        <div class="navigation">

            <div :class="{ 'module-item': true, active: state.currentModule === 'todo' }" @click="handlers.active('todo')">
                <svg t="1692797187703" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="998" width="200" height="200">
                    <path
                        d="M413.866667 853.333333c-14.933333 0-32-6.4-44.8-17.066666L61.866667 533.333333c-12.8-10.666667-19.2-25.6-19.2-42.666666s6.4-32 19.2-42.666667l110.933333-108.8c23.466667-23.466667 64-23.466667 87.466667 0L567.466667 640c12.8 10.666667 19.2 27.733333 19.2 42.666667 0 17.066667-6.4 32-19.2 42.666666l-110.933334 108.8c-10.666667 12.8-27.733333 19.2-42.666666 19.2z m-198.4-490.666666c-4.266667 0-10.666667 2.133333-14.933334 6.4l-110.933333 108.8c-2.133333 4.266667-4.266667 8.533333-4.266667 12.8s2.133333 8.533333 6.4 12.8l309.333334 300.8c8.533333 8.533333 19.2 8.533333 27.733333 0l110.933333-108.8c4.266667-4.266667 6.4-8.533333 6.4-12.8 0-4.266667-2.133333-8.533333-6.4-12.8L230.4 369.066667c-4.266667-4.266667-8.533333-6.4-14.933333-6.4z"
                        fill="#0ceba1" p-id="999"></path>
                    <path
                        d="M413.866667 853.333333c-14.933333 0-32-6.4-44.8-17.066666l-110.933334-108.8c-12.8-10.666667-19.2-27.733333-19.2-42.666667 0-17.066667 6.4-32 19.2-42.666667L763.733333 145.066667c23.466667-23.466667 64-23.466667 87.466667 0l110.933333 108.8c12.8 10.666667 19.2 27.733333 19.2 42.666666s-6.4 32-19.2 42.666667L456.533333 836.266667c-10.666667 10.666667-27.733333 17.066667-42.666666 17.066666zM808.533333 170.666667c-4.266667 0-10.666667 2.133333-14.933333 6.4L288 669.866667c-4.266667 4.266667-6.4 8.533333-6.4 12.8 0 4.266667 2.133333 8.533333 6.4 12.8l110.933333 108.8c8.533333 8.533333 19.2 8.533333 27.733334 0l505.6-494.933334c4.266667-4.266667 6.4-8.533333 6.4-12.8s-2.133333-8.533333-6.4-12.8l-110.933334-108.8c-4.266667-2.133333-8.533333-4.266667-12.8-4.266666z"
                        fill="#0ceba1" p-id="1000"></path>
                </svg>
            </div>
            <div :class="{ 'module-item': true, active: state.currentModule === 'milestone' }"
                @click="handlers.active('milestone')">
                <svg t="1692975172741" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="22299" width="200" height="200">
                    <path
                        d="M731.6 638.1c-63.7 0-119.7-28.3-131.2-34.6-10.3-4.1-73.6-28.5-124.4-28.5-46 0-106.4 21-125.8 29.1-9.7 4.1-20.9 3-29.6-2.9-8.8-5.9-14-15.7-14-26.2V165c0-12.8 7.8-24.4 19.7-29.2 3.4-1.4 84.1-33.9 153.2-33.9 69.6 0 144.3 32.9 147.5 34.2 1.2 0.5 2.3 1.1 3.4 1.8 0.4 0.2 46.3 27.1 98.8 27.1 52.2 0 96.8-26.7 97.2-26.9 9.8-5.9 21.9-6.1 31.9-0.5 9.9 5.6 16.1 16.1 16.1 27.5v410c0 10.7-5.4 20.6-14.4 26.5-2.4 1.5-57.4 36.5-128.4 36.5zM476 512c67.9 0 146.8 32.6 150.1 34 1.2 0.5 2.4 1.1 3.5 1.7 0.4 0.3 49.1 27.4 102 27.4 33.5 0 62.8-11 79.5-18.9V213.7c-22.4 7.7-51 14.5-82.1 14.5-63.8 0-117.8-28.4-129.1-34.8-9.7-4.1-69-28.3-120.6-28.3-38.5 0-84.2 13.4-109.7 22.1v343.5c29.5-9.1 69.6-18.7 106.4-18.7z m82.8 410H211.9V133.5c0-17.4 14.1-31.5 31.5-31.5s31.5 14.1 31.5 31.5v725.4h283.9c17.4 0 31.5 14.1 31.5 31.5 0.1 17.5-14 31.6-31.5 31.6z m-315.4 0h-62.1c-17.4 0-31.5-14.1-31.5-31.5s14.1-31.5 31.5-31.5h62.1c17.4 0 31.5 14.1 31.5 31.5 0.1 17.4-14.1 31.5-31.5 31.5z m0 0"
                        p-id="22300" fill="#0ceba1"></path>
                </svg>
            </div>
        </div>

        <div class="content">
            <component :is="state.currentModule" v-if="state.visible" :key="state.renderKey" />
        </div>

    </div>
</template>

<script lang="ts">
import Todo from './todo/main.vue'
import Milestone from './milestone/main.vue'
export default {
    components: {
        Todo,
        Milestone
    }
}

</script>

<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({
    currentModule: '',
    visible: false,
    renderKey: 0
})

const handlers = {
    active: (module: string) => {
        state.visible = state.currentModule === module ? !state.visible : true
        if (!state.visible) {
            state.currentModule = ''
            return
        }
        state.currentModule = module
        state.renderKey++;
    }
}




</script>


<style scoped>
.modules {
    position: absolute;
    z-index: 4;
    right: 0;
    top: 200px;
    display: flex;
    transform: translateX(600px);
    transition: all .2s ease-in-out;
    align-items: flex-start;
}

.modules .navigation {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    cursor: pointer;
    color: white;
    overflow: hidden;
    background-color: rgba(0, 0, 0, .3);
    width: 40px;
    transition: all .5s ease-in-out;
}

.modules .module-item {
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .1s ease;
    cursor: pointer;
    user-select: none;
}

.modules .module-item:hover,
.modules .module-item.active {
    background-color: rgba(255, 255, 255, .2);
}

.module-item>svg {
    width: 24px;
    height: 24px;
}

.modules.visible {
    transform: translateX(0);

}

.modules.visible .navigation {
    background-color: rgba(0, 0, 0, .3);
}

.modules .content {
    background-color: rgba(0, 0, 0, .3);
    width: 600px;
    height: 60vh;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
</style>