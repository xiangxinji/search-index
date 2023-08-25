

<template>
    <section class="si-module module-todo">

        <div class="todo-container">
            <TodoItemVue v-for="data in showTodoList" :data="data"></TodoItemVue>
        </div>

        <div class="todo-input">
            <input ref="inputRef" v-model="state.title" type="text" @keyup.enter="handlers.addTodo">
        </div>

    </section>
</template>


<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import TodoItemVue from './todo-item.vue';

import { useStore } from '../../../store/todo'
import { createTodo } from '../../../utils/todo'
const todoStore = useStore()
const inputRef = ref<HTMLInputElement | null>(null)

const state = reactive({
    title: ''
})

const showTodoList = computed(() => {
    return todoStore.todoList
})

const handlers = {
    addTodo: () => {
        const todo = createTodo(state.title)
        todoStore.createTodoTask(todo)
        state.title = ''
    }
}

onMounted(() => {
    inputRef.value?.focus()
})

</script>

<style scoped>
.si-module {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.todo-container {
    flex: 1;
    padding:20px;
}

.todo-input {
    height: 42px;
    display: flex;
    align-items: center;
    padding: 13px 20px;
    align-items: center;
}

.todo-input input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 14px;
    color: #333;
    border-radius: 8px;
    padding-left: 10px;
}
</style>