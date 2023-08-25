export type TodoItemStatus = "todo" | "done" | "doing";

export type TodoItem = {
  id: string;
  // 标题
  title: string;
  // 内容
  content: string;
  // 状态
  status: TodoItemStatus;
  // 创建时间
  createTime: number;
};
