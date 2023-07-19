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
}

.star-item {
    height: 40px;
    background-color: rgba(255,255,255,.7);
    margin-bottom: 20px;
    min-width: 100px;
    border-radius: 20px;
    padding: 0 10px;
    margin-right: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 3px 8px rgba(0,0,0,.5);
    transition: all .1s ease;
}

.star-item:hover {
    transform: translateY(-3px);
    box-shadow: 3px 13px 12px rgba(0,0,0,.5);
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