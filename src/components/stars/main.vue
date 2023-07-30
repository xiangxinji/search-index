<template>
    <div class="stars">
        <div class="star-item" v-for="star in stars" @click="handleClick(star)">
            <!-- <div class="star-item-link-logo"> -->
                <!-- <img :src="star.logo" alt=""> -->
            <!-- </div> -->
            <div class="star-item-link-name">
                {{ star.linkName }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import config from '../../config.json'
const stars = config.stars;


const handleClick = (st: { linkUrl: string }) => {
    window.open(st.linkUrl)
}
</script>


<style scoped>
.stars {
    width: 30%;
    min-width: 800px;
    padding-right: 10px;
    display: flex;
    flex-wrap: wrap;
    z-index: 3;
}

.star-item {
    height: 40px;
    margin-bottom: 20px;
    min-width: 100px;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all .1s ease;
    color:white;
    text-shadow: 1px 3px 10px rgba(0,0,0,.5);
}



.star-item .star-item-link-logo {
    width: 70px;
    height: 70px;
}

.star-item .star-item-link-logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.star-item .star-item-link-name {
    height: 100%;
    line-height: 40px;
    font-weight: bold;
}
</style>