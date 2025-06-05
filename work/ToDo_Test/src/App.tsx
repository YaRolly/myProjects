import { Box, Container, Paper, Typography } from "@mui/material";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { TodoFooter } from "./components/TodoFooter";
import { useTodos } from "./useTodos";

function App() {
  const {
    todos,
    count,
    addTodo,
    toggleTodo,
    clearComplited,
    filter,
    setFilter,
  } = useTodos();

  return (
    <Container
      maxWidth="sm"
      sx={{ backgroundColor: "grey.50", padding: "15px" }}
    >
      <Typography
        variant="h1"
        gutterBottom
        sx={{ fontWeight: 100, color: "grey.300", textAlign: "center" }}
      >
        todos
      </Typography>
      <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
        <Box sx={{ marginX: -2 }}>
          <TodoInput onAdd={addTodo} />
          <TodoList todos={todos} toggleTodo={toggleTodo} />
        </Box>
        <TodoFooter
          count={count}
          clearComplited={clearComplited}
          changeFilter={setFilter}
          filter={filter}
        />
      </Paper>
    </Container>
  );
}

export default App;
