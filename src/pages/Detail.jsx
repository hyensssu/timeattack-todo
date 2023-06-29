import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { Navigate } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const todos = useSelector(state => state.todos);
  const navigate = useNavigate();

  const StyledDiv = styled.div`
    width: 300px;
    padding: 20px;
    background-color: orange;
    display: flex;
    flex-direction: column;
  `;

  return (
    <>
      <h3>checking my list</h3>
      {todos.map(todo => {
        if (todo.id === id) {
          return (
            <StyledDiv key={todo.id}>
              <h4>{todo.title}</h4>
              <span>{todo.contents}</span>
              <button
                onClick={() => {
                  navigate('/');
                }}
              >
                이전화면으로
              </button>
            </StyledDiv>
          );
        }
      })}
    </>
  );
}

export default Detail;
