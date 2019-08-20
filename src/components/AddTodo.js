import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";
import { Event } from "./tracking";

function AddTodo() {
  const [title, setTitle] = useState("");

  const add = useStoreActions(actions => actions.add);
  return (
    <div>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          add({
            title,
            completed: false
          });
          setTitle("");
        }}
      >
        <div className="form-group">
          <label htmlFor="title" className="mt-3" style={{ color: "#999" }}>
            Todo title
          </label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="add todo"
            id="title"
          />
        </div>

        <input
          type="submit"
          value="Add Todo"
          className="btn btn-block mt-2"
          onClick={() => Event("TODO", "Todo added", "TODO_PAGE")}
        />
      </form>
    </div>
  );
}

export default AddTodo;
