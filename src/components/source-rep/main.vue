

<template>
    <Transition >
        <div class="source-rep" @click="active" v-show="state.visible">
            <img src="~../../assets/images/source.png" alt="">
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import config from '../../config.json'

const state = reactive({
    visible: false
})

function active() {
    const target = config.source_rep;
    window.open(target)
}

onMounted(() => {
    state.visible = true
})
</script>

<style scoped>
.source-rep {
    width: 45px;
    height: 45px;
    cursor: pointer;
    border-radius: 50%;
    background-color: white;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .3);
    transition: all .4s ease;
    transform: translateX(0px);
    background-image: linear-gradient( 135deg, #EE9AE5 10%, #5961F9 100%);
}


.source-rep img {
    width: 20px;
    height: 20px;
}

.v-enter-from,
.v-leave-to {
    transform: translateX(80px);
}
</style>