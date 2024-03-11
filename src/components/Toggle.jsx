import React from 'react';
import styled from 'styled-components';

const StyledSwitch = styled.input`
  position: relative;
  min-width: 100px;
  width: 140px;
  max-width: 140px;
  height: 40px;
  border-radius: 0px;
  background-color: ${(props) => props.theme.colors.secondary};
  transition: background 0.3s;
  outline: none;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    height: 60%;
    width: 40%;
    background-color: ${(props) => props.theme.colors.primary};
    transition: left 0.3s;
  }

  &:checked {
    background: ${(props) => props.theme.colors.tertiary};
  }

  &:checked:after {
    left: 75%;
  }
`;

export default function Toggle({ onChange, isDark }) {
  return (
    <StyledSwitch
      type="checkbox"
      onChange={onChange}
      value={isDark}
      checked={isDark}
    ></StyledSwitch>
  );
}
