import { TodoItem, TodoItemStatus } from "../types/todo";

export function createTodo(title: string, content?: string) {
  return {
    title,
    content,
    status: "doing",
  } as TodoItem;
}

const statusIndex = ["todo", "doing", "done"];

export function nextStatus(status: TodoItem["status"]) {
  const i = statusIndex.indexOf(status);
  let nextStatus = statusIndex[i + 1];
  if (!nextStatus) nextStatus = statusIndex[0];
  return nextStatus
}

export function statusLabel(status: TodoItemStatus) {
  const labels = {
    todo: "待办",
    doing: "进行中",
    done: "已完成",
  };

  

  return labels[status];
}
