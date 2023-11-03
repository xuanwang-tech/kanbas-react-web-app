import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2><br/>
      <HelloRedux/><br/><br/>
      <CounterRedux/><br/>
      <AddRedux/><br/>
      <TodoList/><br/>
    </div>
  );
};

export default ReduxExamples;
