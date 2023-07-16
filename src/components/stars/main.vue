<template>
    <div class="stars">
        <div class="star-item" v-for="star in stars">
            <div class="star-item-link-name">
                <a :href="star.linkUrl" target="_blank">{{ star.linkName }}</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import config from '../../config.json'
const stars = config.stars;

</script>


<style scoped>
.stars {
    width: 30%;
    min-width: 800px;
    padding-right:10px;
}

.star-item {
    height: 50px;
    line-height: 50px;
    background-color: rgba(255, 255, 255, .6);
    margin-bottom: 10px;
    padding: 0 10px;
}
</style>