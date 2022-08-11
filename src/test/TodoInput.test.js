import { fireEvent, render, screen } from "@testing-library/react";
import TodoInput from "../components/TodoInput";

test("renders inputTag properly", () => {
  render(<TodoInput />);
  const inputElement = screen.getByPlaceholderText(/Enter todo here../i);
  expect(inputElement).toBeInTheDocument();
});

test("renders ButtonTag properly", () => {
  render(<TodoInput />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test("on keyPress input should be visible", () => {
  const todo = jest.fn();
  render(<TodoInput todoInputValue={todo} />);
  const inputElement = screen.getByPlaceholderText(/Enter todo here../i);
  fireEvent.keyPress(inputElement, { target: { value: "dogs" } });
  expect(inputElement.value).toBe("dogs");
});

test("on clicking Submit Button inputElement should be empty", () => {
  const todo = jest.fn();
  render(<TodoInput todoInputValue={todo} />);
  const inputElement = screen.getByPlaceholderText(/Enter todo here../i);
  fireEvent.keyPress(inputElement, { target: { value: "dogs" } });
  const buttonElement = screen.getByRole("button");
  fireEvent.click(buttonElement);
  expect(inputElement.value).toBe("");
});

test("on clicking Submit Button when input text is empty then alert should be called", () => {
  const todo = jest.fn();
  const alertMock = jest.spyOn(window, "alert").mockImplementation();
  render(<TodoInput todoInputValue={todo} />);
  const inputElement = screen.getByPlaceholderText(/Enter todo here../i);
  fireEvent.keyPress(inputElement, { target: { value: "" } });
  const buttonElement = screen.getByRole("button");
  fireEvent.click(buttonElement);
  expect(alertMock).toHaveBeenCalledTimes(1);
});
