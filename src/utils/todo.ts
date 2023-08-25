import { TodoItem } from "../types/todo";

export function createTodo(title: string, content?: string) {
  return {
    title,
    content,
    status: "todo",
  } as TodoItem;
}
