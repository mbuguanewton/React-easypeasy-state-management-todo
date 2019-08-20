import React, { Fragment, useEffect } from "react";
import TodoItem from "./TodoItem";
import { useStoreState, useStoreActions } from "easy-peasy";

function Todos() {
  const todos = useStoreState(state => state.todos);
  const fetchTodos = useStoreActions(actions => actions.fetchTodos);

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <h1>Todos</h1>
      <p>Click todo item to toggle completed</p>
      <hr />
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </Fragment>
  );
}

export default Todos;
