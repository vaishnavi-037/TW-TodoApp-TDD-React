import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders App div properly", () => {
  render(<App />);
  const appElement = screen.getByTestId("main");
  expect(appElement).toBeInTheDocument();
});

test("renders TodoInput properly", () => {
  render(<App />);
  const todoInputElement = screen.getByPlaceholderText(/Enter todo here../i);
  expect(todoInputElement).toBeInTheDocument();
});

test("renders TodoList properly", () => {
  render(<App />);
  const todoListElement = screen.getByTestId("todos-list");
  expect(todoListElement).toBeInTheDocument();
});
