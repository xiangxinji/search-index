import { defineStore } from "pinia";
import { TodoItem, TodoItemStatus } from "../types/todo";
import { createIdentScope } from "../utils/ident";

const { getIdent } = createIdentScope("todo");

export const useStore = defineStore("todo", {
  state: () => {
    return {
      todoList: [] as TodoItem[],
    };
  },
  actions: {
    // 创建todo
    createTodoTask(todo: TodoItem & { id?: string }) {
      todo.id = getIdent();
      this.todoList.unshift(todo as TodoItem);
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
  },
  persist: true,
});
