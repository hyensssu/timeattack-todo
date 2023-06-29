import React from 'react';
import { styled } from 'styled-components';

const StyledDiv = styled.div`
  width: 100vw;
  background-color: #9fc39f;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

function Header() {
  return (
    <StyledDiv>
      <h1>My Todo List</h1>
      <div>React-redux</div>
    </StyledDiv>
  );
}

export default Header;
