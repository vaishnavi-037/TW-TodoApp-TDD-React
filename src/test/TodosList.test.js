import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodosList";

test("renders div tag properly", () => {
  const todoObj = [{ id: 1, title: "dog", done: false }];
  render(<TodoList todoList={todoObj} />);
  const divElement = screen.getByTestId("todos-list");
  expect(divElement).toBeInTheDocument();
});

test("renders Todo element properly", () => {
  const todoObj = [{ id: 1, title: "dog", done: false }];
  render(<TodoList todoList={todoObj} />);
  const todoElement = screen.getByText(/dog/i)
  expect(todoElement).toBeInTheDocument();
});

test("check the size of Todo element", () => {
  const todoObj = [
    { id: 1, title: "homework", done: false },
    { id: 2, title: "walking", done: false },
    { id: 3, title: "exercise", done: false },
  ];
  render(<TodoList todoList={todoObj} />);
  const todoElement = screen.getAllByTestId("title");
  expect(todoElement.length).toBe(3);
  
});