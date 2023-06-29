import React from 'react';
import uuid from 'react-uuid';

const ADD_TODO = 'todos/add-todo';
const DELETE_TODO = 'todos/delete-todo';
const SWITCH_TODO = 'todos/switch-todo';

// action creator
export const addTodo = payload => {
  return {
    type: ADD_TODO,
    payload
  };
};

export const deleteTodo = payload => {
  return {
    type: DELETE_TODO,
    payload
  };
};

export const switchTodo = payload => {
  return {
    type: SWITCH_TODO,
    payload
  };
};
const initialState = [
  {
    id: uuid(),
    title: 'testTitle1',
    contents: 'testContents1',
    isDone: false
  },
  {
    id: uuid(),
    title: 'testTitle12',
    contents: 'testContents2',
    isDone: false
  },
  {
    id: uuid(),
    title: 'testTitle3',
    contents: 'testContents3',
    isDone: false
  },
  {
    id: uuid(),
    title: 'testTitle4',
    contents: 'testContents4',
    isDone: true
  }
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodos = [...state, action.payload];
      return newTodos;
    case SWITCH_TODO:
      state.filter(todo => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
      return [...state];
    default:
      return state;
  }
};

export default todos;
