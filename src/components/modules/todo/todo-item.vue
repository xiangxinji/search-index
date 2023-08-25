

<template>
    <div class="todo-item">
        <div class="todo-item__title">
            {{ data.title }}
        </div>
        <div class="todo-item__status">

        </div>
    </div>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import { TodoItem } from "../../../types/todo";

const props = defineProps({
    data: {
        type: Object as PropType<TodoItem>,
        required: true,
    }
})
</script>
<style scoped>
.todo-item {
    height:40px;
    background-color: rgba(255,255,255,1);
    border-radius: 8px;
    line-height: 40px;
    padding:0 8px;
    box-shadow: 1px 1px 12px rgba(0,0,0,.3);
}
</style>