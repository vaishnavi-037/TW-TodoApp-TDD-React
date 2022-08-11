import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  handleDelete = (id) => {
    this.props.onDelete(id);
  };
  handleCheck = (checkVal, id) => {
    this.props.onChecked(checkVal, id);
  };
  render() {
    return (
      <div className="todos-list" data-testid="todos-list">
        {this.props.todoList.map((todo) => {
          return (
            <Todo
              data-testid="Todo"
              key={todo.id}
              todo={todo}
              onDelete={this.handleDelete}
              onChecked={this.handleCheck}
            />
          );
        })}
      </div>
    );
  }
}
