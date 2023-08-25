

<template>
    <div :class="wrapperClass">
        <div class="todo-item__title">
            {{ data.title }}
        </div>
        <div class="todo-item__status" @click="handlers.changeStatus">
            {{ getStatusLabel(data.status) }} 
        </div>
    </div>
</template>
<script lang="ts" setup>
import { PropType, computed } from "vue";
import { TodoItem } from "../../../types/todo";
import { statusLabel as getStatusLabel } from '../../../utils/todo'
const props = defineProps({
    data: {
        type: Object as PropType<TodoItem>,
        required: true,
    }
})

const emit = defineEmits(['changeStatus'])


const handlers = {
    changeStatus() {
        emit('changeStatus', props.data.id, props.data.status)
    }
}


const wrapperClass = computed(() => {
    return {
        'todo-item': true,
        'todo-item--done': props.data.status === 'done'
    }
})

</script>
<style scoped>
.todo-item {
    height: 40px;
    background-image: linear-gradient(135deg, #C2FFD8 10%, #465EFB 100%);
    border-radius: 8px;
    line-height: 40px;
    padding: 0 8px;
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
}

.todo-item .todo-item__title {
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
}

.todo-item .todo-item__status {
    color: white;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
}
</style>