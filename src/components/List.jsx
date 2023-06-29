import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { deleteTodo, switchTodo } from '../modules/todos';

const List = () => {
  const dispatch = useDispatch();
  // style
  const StyledTodoBox = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    margin-bottom: 10px;
  `;

  const todos = useSelector(state => {
    return state.todos;
  });

  const todoList = () => {
    return todos.filter(todo => {
      return todo.isDone === false;
    });
  };

  const doneList = () => {
    return todos.filter(todo => {
      return todo.isDone === true;
    });
  };

  return (
    <div>
      <h3>todo..</h3>
      {todoList().map(todo => {
        return (
          <StyledTodoBox key={todo.id}>
            <h4>{todo.title}</h4>
            <span>{todo.contents}</span>
            <br></br>
            <div>
              <button
                onClick={() => {
                  return dispatch(deleteTodo(todo.id));
                }}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  return dispatch(switchTodo(todo.id));
                }}
              >
                {todo.isDone ? '완료취소' : '완료'}
              </button>
            </div>
          </StyledTodoBox>
        );
      })}
      <h3>done..</h3>
      {doneList().map(todo => {
        return (
          <StyledTodoBox key={todo.id}>
            <h4>{todo.title}</h4>
            <span>{todo.contents}</span>
            <br></br>
            <div>
              <button
                onClick={() => {
                  return dispatch(deleteTodo(todo.id));
                }}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  return dispatch(switchTodo(todo.id));
                }}
              >
                {todo.isDone ? '완료취소' : '완료'}
              </button>
            </div>
          </StyledTodoBox>
        );
      })}
    </div>
  );
};

export default List;
