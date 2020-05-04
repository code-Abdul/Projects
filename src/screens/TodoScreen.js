import React, { useReducer } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import moment from "moment";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          index: new Date(),
          todo: action.payload.name,
          todoDescription: action.payload.description,
          dueDate: moment(action.payload.date).format("L"),
          completed: false
        }
      ];
    case "COMPLETE_TODO":
      return [...state].map(todo => {
        if (todo.index === action.payload) {
          todo.completed = !todo.completed;
          todo.cDate = moment(new Date()).format("L");
        }
        return todo;
      });
    case "DELETE_TODO":
      return [...state].filter(todo => {
        return todo.index !== action.payload;
      });

    default:
      return state;
  }
};

const TodoScreen = () => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <>
      <TodoInput
        onSubmitTodo={(name, description, date) => {
          if (name || description) {
            dispatch({
              type: "ADD_TODO",
              payload: { name, description, date }
            });
          }
        }}
      />
      <TodoList
        todos={state}
        onComplete={id => {
          dispatch({
            type: "COMPLETE_TODO",
            payload: id
          });
        }}
        onDelete={id => {
          dispatch({
            type: "DELETE_TODO",
            payload: id
          });
        }}
      />
    </>
  );
};

export default TodoScreen;
