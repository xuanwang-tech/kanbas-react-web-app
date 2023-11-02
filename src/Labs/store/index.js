import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../a4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../a4/ReduxExamples/AddRedux/addReducer";
// import todos from "../a4/ReduxExamples/todos/TodoList";
import todosReducer from "../a4/ReduxExamples/todos/todosReducer";

const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
    // todos,
    todosReducer,
  },
});
export default store;
