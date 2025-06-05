import { FILTER } from "../constants";
import { useTodos } from "../useTodos";
import { renderHook, act } from "@testing-library/react";

describe("useTodos", () => {
  it("добавляет задачу", () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo("Сделать дз");
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe("Сделать дз");
  });

  it("переключает задачу на выполенено", () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo("Погладить кота");
    });

    const id = result.current.rawTodos[0].id;

    act(() => {
      result.current.toggleTodo(id);
    });

    expect(result.current.todos[0].complited).toBe(true);
  });

  it("удаляет выполненные задачи", () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo("Вынести мусор");
    });

    const id = result.current.rawTodos[0].id;

    act(() => {
      result.current.toggleTodo(id);
    });

    act(() => {
      result.current.clearComplited();
    });

    expect(result.current.todos).toHaveLength(0);
  });

  it("показывает только активные задачи", () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo("Активная");
    });

    act(() => {
      result.current.addTodo("Завершенная");
    });

    const id = result.current.rawTodos[1].id;

    act(() => {
      result.current.toggleTodo(id);
    });

    act(() => {
      result.current.setFilter(FILTER.ACTIVE);
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe("Активная");
  });
});
