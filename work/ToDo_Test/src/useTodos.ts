import { useState } from "react";
import { Todo } from "./types";
import { FILTER } from "./constants";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState(FILTER.ALL);

  const count = todos.filter((todo) => todo.complited === false).length;

  const filtered = () => {
    switch (filter) {
      case FILTER.ALL:
        return todos;
      case FILTER.ACTIVE:
        return todos.filter((todo) => todo.complited === false);
      case FILTER.COMPLITED:
        return todos.filter((todo) => todo.complited === true);
      default:
        return todos;
    }
  };

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, complited: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complited: !todo.complited } : todo
      )
    );
  };

  const clearComplited = () => {
    setTodos(todos.filter((todo) => todo.complited === false));
  };

  return {
    todos: filtered(),
    rawTodos: todos,
    count,
    addTodo,
    toggleTodo,
    clearComplited,
    filter,
    setFilter,
  };
};
