import React from "react";
import { useStoreActions } from "easy-peasy";
import { Event } from "./googleTracking";
import { TrackEvent } from "./facebookTracking";

function TodoItem({ todo }) {
  const { remove, toggle } = useStoreActions(actions => ({
    remove: actions.remove,
    toggle: actions.toggle
  }));
  return (
    <div className="todo card">
      <span
        onClick={() => {
          Event("Toggle", "Completed", "CHECKED_COMPLETED");
          toggle(todo.id);
        }}
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
        onClick={() => {
          TrackEvent("Click", "REMOVE_TODO");
          Event("TODO_ITEM", "Remove todo", "REMOVED_TODO");
          remove(todo.id);
        }}
      />
    </div>
  );
}

export default TodoItem;
