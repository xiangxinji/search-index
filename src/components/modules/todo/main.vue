

<template>
    <section class="si-module module-todo">

        <div class="todo-container">
            <TodoItemVue v-for="data in showTodoList" :data="data" @change-status="handlers.nextStatus" :key="data.id">
            </TodoItemVue>
        </div>

        <div :class="{ 'todo-input': true, focusing: state.focusing }">
            <input placeholder="请输入你的代办标题" ref="inputRef" v-model="state.title" type="text" @keyup.enter="handlers.addTodo"
                @focus="handlers.focus" @blur="handlers.blur">
        </div>

    </section>
</template>


<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import TodoItemVue from './todo-item.vue';

import { useStore } from '../../../store/todo'
import { createTodo, nextStatus } from '../../../utils/todo'
import { TodoItemStatus } from '../../../types/todo';
const todoStore = useStore()
const inputRef = ref<HTMLInputElement | null>(null)

const state = reactive({
    title: '',
    focusing: false
})

const showTodoList = computed(() => {
    return todoStore.todoList
})


const handlers = {
    addTodo: () => {
        if (!state.title || !state.title.trim()) return
        const todo = createTodo(state.title)
        todoStore.createTodoTask(todo)
        state.title = ''
    },
    nextStatus(id: string, status: TodoItemStatus) {
        const ns = nextStatus(status)
        todoStore.setTodoItemStatus(id, ns as unknown as TodoItemStatus)
    },
    focus() {
        state.focusing = true
    },
    blur() {
        state.focusing = false
    }
}


onMounted(() => {
    setTimeout(() => {
        inputRef.value?.focus()
    }, 400)
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
    padding: 20px;
    overflow: auto;
}

.todo-input {
    height: 36px;
    display: flex;
    align-items: center;
    padding: 20px;
    align-items: center;
}

.todo-input.focusing input {
    border-color: #0ceba1;
}

.todo-input input {
    width: 100%;
    height: 100%;
    border: solid 1px transparent;
    outline: none;
    font-size: 14px;
    color: #333;
    border-radius: 8px;
    padding-left: 10px;
    transition: border-color .5s ease-in-out;
}
</style>