import React from "react";
import { useStoreActions } from "easy-peasy";

function TodoItem({ todo }) {
  const { remove, toggle } = useStoreActions(actions => ({
    remove: actions.remove,
    toggle: actions.toggle
  }));
  return (
    <div className="todo card">
      <span
        onClick={() => toggle(todo.id)}
        style={{
          cursor: "pointer",
          textDecoration: todo.completed ? "line-through" : "none"
        }}
      >
        {todo.title}
      </span>
      <i
        className="fas fa-trash-alt"
        style={{ color: "red" }}
        onClick={() => remove(todo.id)}
      />
    </div>
  );
}

export default TodoItem;
