<template>
    <svg class="svg-icon" aria-hidden="true">
        <use :xlink:href="iconName" />
    </svg>
</template>

<script setup lang="ts">
defineProps({
    iconName: {
        type: String,
        required: true
    },

})
</script>

<style>
.svg-icon {
    width: 1em;
    height: 1em;
    fill : blue;
    opacity: 0.5;
}
</style>