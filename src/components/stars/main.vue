<template>
    <div class="stars">

        <div class="star-group-item" v-for="gr in stars" :key="gr.groupName">
            <div class="group-content">
                <div class="star-item" v-for="star in getChildren(gr)" @click="handleClick(star)">
                    <!-- <div class="star-item-link-logo"> -->
                    <!-- <img :src="star.logo" alt=""> -->
                    <!-- </div> -->
                    <div class="star-item-link-name">
                        {{ star.linkName }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import config from '../../config.json'
const stars = config.stars;


function getChildren(group: any) {
    return group.children as { linkName: string, linkUrl: string }[]
}


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
    flex-direction: column;
    z-index: 3;
}

.star-group-item{
    width:100%;
}
.group-content{
    display: flex;
    padding: 10px 0 ;
    flex-wrap: wrap;
}

.star-item {
    height: 40px;
    margin-bottom: 20px;
    min-width: 100px;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    transition: all .1s ease;
    color: white;
    text-align: left;
    text-shadow: 3px 3px 10px rgba(0, 0, 0, .9);
    padding-right: 10px;
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