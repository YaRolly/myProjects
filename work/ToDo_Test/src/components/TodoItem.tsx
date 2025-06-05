import { ListItem, Checkbox, ListItemText } from "@mui/material";
import { Todo } from "../types";

export function TodoItem({
  todo,
  toggleTodo,
}: {
  todo: Todo;
  toggleTodo: (id: number) => void;
}) {
  return (
    <ListItem
      disableGutters
      sx={{
        pl: "2px",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Checkbox
        checked={todo.complited}
        onClick={() => {
          toggleTodo(todo.id);
        }}
      />
      <ListItemText
        primary={todo.text}
        sx={{
          textDecoration: todo.complited ? "line-through" : "none",
          color: todo.complited ? "grey.300" : "000",
        }}
      />
    </ListItem>
  );
}
