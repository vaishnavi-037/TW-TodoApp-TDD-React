import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "../components/Todo";

test("renders CheckBox properly", () => {
  const todo = { id: 1, done: false, title: "dogs" };
  render(<Todo todo={todo} />);
  const checkElement = screen.getByTestId("checkbox");
  expect(checkElement).toBeInTheDocument();
});

test("renders title properly", () => {
  const todo = { id: 1, done: false, title: "dogs" };
  render(<Todo todo={todo} />);
  const titleElement = screen.getByTestId("title");
  expect(titleElement).toBeInTheDocument();
});
test("renders delete button properly", () => {
  const todo = { id: 1, done: false, title: "dogs" };
  render(<Todo todo={todo} />);
  const deleteElement = screen.getByTestId("delete");
  expect(deleteElement).toBeInTheDocument();
});

test("check the todo when checkbox is clicked", () => {
  const todo = { id: 1, done: false, title: "dogs" };
  const doneTodo = jest.fn();
  render(<Todo todo={todo} onChecked={doneTodo} />);
  const checkElement = screen.getByTestId("checkbox");
  fireEvent.click(checkElement);
  expect(doneTodo).toBeCalledWith(true, 1);
});

test("delete todo when delete button clicked", () => {
  const todo = { id: 1, done: false, title: "dogs" };
  const deleteTodo = jest.fn();
  render(<Todo todo={todo} onDelete={deleteTodo} />);
  const deleteElement = screen.getByTestId("delete");
  fireEvent.click(deleteElement);
  expect(deleteTodo).toBeCalledWith(1);
});
