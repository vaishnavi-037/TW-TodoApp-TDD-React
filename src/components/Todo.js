import React from "react";
import { FaMinusCircle } from "react-icons/fa";

export default class Todo extends React.Component {
  doneTodo = () => {
    let checked = this.props.todo.done ? false : true;
    this.props.onChecked(checked, this.props.todo.id);
  };

  deleteTodo(e) {
    e.preventDefault();
    this.props.onDelete(this.props.todo.id);
  }

  render() {
    const { todo } = this.props;
    const className = todo.done ? "done-todo" : "not-done";

    return (
      <div className="todo-item">
        <input
          className="toggle-todo"
          type="checkbox"
          onClick={() => this.doneTodo()}
          data-testid="checkbox"
        />
        <strong className={className} data-testid="title"> {todo.title} </strong>
        <FaMinusCircle
          className="delete-todo delete-button"
          onClick={(e) => this.deleteTodo(e)}
          data-testid="delete"
        />
      </div>
    );
  }
}
