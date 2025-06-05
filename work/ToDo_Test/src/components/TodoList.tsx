import { List } from "@mui/material";
import { TodoItem } from "./TodoItem";
import { Todo } from "../types";

export function TodoList({
  todos,
  toggleTodo,
}: {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}) {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </List>
  );
}
