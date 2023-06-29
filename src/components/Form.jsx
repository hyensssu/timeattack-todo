import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { useState } from 'react';
import { addTodo } from '../modules/todos';
import uuid from 'react-uuid';

const StyledForm = styled.form`
  width: 100vw;
  background-color: #bdcbb4;
  padding: 10px;
`;

const StyledInput = styled.input`
  margin-right: 10px;
`;

const StyledButton = styled.button`
  border-radius: 8px;
`;

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  return (
    <StyledForm
      onSubmit={e => {
        e.preventDefault();
        dispatch(
          addTodo({
            id: uuid(),
            title,
            contents,
            isDone: false
          })
        );
        setTitle('');
        setContents('');
      }}
    >
      <StyledInput
        type="text"
        value={title}
        onChange={e => {
          return setTitle(e.target.value);
        }}
      />
      <StyledInput
        type="text"
        value={contents}
        onChange={e => {
          return setContents(e.target.value);
        }}
      />
      <StyledButton>추가하기</StyledButton>
    </StyledForm>
  );
};

export default Form;
