<template>
    <div class="backgroud">
        <slot></slot>
    </div>
</template>


<script setup lang="ts">
</script>

<style scoped>
.backgroud {
    background : url("/src/assets/images/background.jpg");
    height:100%;
    background-size : cover;
}
</style>

