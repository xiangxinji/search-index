import { defineStore } from "pinia";
import { TodoItem, TodoItemStatus } from "../types/todo";
import config from '../config.json'


const { todo: todoConfig } = config.modules

export const useStore = defineStore("todo", {
  state: () => {
    return {
      lastId: 0,
      todoList: [] as TodoItem[],
    };
  },
  actions: {
    // 创建todo
    createTodoTask(todo: TodoItem & { id?: string }) {
      todo.id = `todo-${this.lastId + 1}`
      this.lastId++;
      this.todoList.unshift(todo as TodoItem);
      if (this.todoList.length > todoConfig.maxStorageLength) {
        this.todoList.pop()
      }
    },
    // 删除todo
    removeTodoTask(id: string) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    },
    // 清空todo
    clearTodoTask() {
      this.todoList = [];
    },
    // 通过id获取todo 并且修改状态
    setTodoItemStatus(id: string, status: TodoItemStatus) {
      const todo = this.todoList.find((todo) => todo.id === id);
      if (todo) {
        todo.status = status;
      }
    },
    // 过滤掉所有已完成的todo
    filterDoneTodo() {
      this.todoList = this.todoList.filter((todo) => todo.status !== "done");
    }
  },
  persist: {
    // 再恢复数据之后， 过滤掉所有已完成的todo
    afterRestore(ctx) {
      ctx.store.filterDoneTodo();
    }
  },
});
