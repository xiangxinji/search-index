


<template>
    <div :class="{ 'modules': true, visible: state.visible }">

        <div class="navigation">

            <div class="module-item" @click="handlers.active('todo')">
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
        </div>

        <div class="content">
            <component :is="state.currentModule" v-if="state.visible" :key="state.renderKey" />
        </div>

    </div>
</template>

<script lang="ts">
import Todo from './todo/main.vue'
export default {
    components: {
        Todo
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
        state.visible = !state.visible

        if (!state.visible) {
            state.currentModule = ''
            return
        }
        setTimeout(() => {
            state.currentModule = module
        }, 1000)
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

.modules .module-item:hover {
    background-color: rgba(255, 255, 255, .2);
}

.module-item>svg {
    width: 24px;
    height: 24px;
}

.modules.visible {
    transform: translateX(0);
}

.modules .content {
    background-color: rgba(0, 0, 0, .3);
    width: 600px;
    height: 600px;
    border-bottom-left-radius: 6px;
}
</style>