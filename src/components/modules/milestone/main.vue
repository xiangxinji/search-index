<template>
    <section class="si-module milestone">


        <div class="milestone-item" v-for="e in events" :key="`${e.event_name}-${e.event_date}`">
            <div class="event-name">
                <a target="_link" v-if="e.link" :href="e.link">
                    {{ e.event_name }}
                </a>
                <span v-else>
                    {{ e.event_name }}
                </span>
            </div>
            <div class="event-date">
                <span>
                    {{ e.event_date }}
                </span>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import config from '../../../config.json'

const { events } = config.modules.milestone;

</script>
<style scoped>
.si-module {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    font-size: 17px;
    overflow: auto;
    padding: 20px;
    box-sizing: border-box;
}

.si-module .milestone-item {
    display: flex;
    align-items: center;
    white: 100%;
    line-height: 40px;
    height: 40px;
    justify-content: space-between;
    margin-bottom: 10px;
}

.si-module .milestone-item .event-name a {
    color:white;
}
.si-module .milestone-item .event-date {
    font-size: 13px;
    margin-left: 20px;
}
</style>