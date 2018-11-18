import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${ ({ color }) => color };
  margin-top: 10px;
  color: #FFF;
  cursor: pointer;

  i {
    font-size: 18px;
  }

  &:hover {
    background-color: ${ ({ color }) => darken(0.05, color) }
  }

  &:active {
    background-color: ${ ({ color }) => darken(0.07, color) }
  }
`;
