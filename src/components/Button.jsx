import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${(props) =>
    props.$secondary
      ? props.theme.colors.background
      : props.theme.colors.primary};
  border: solid 3px;
  border-color: ${(props) =>
    props.$secondary
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
  color: ${(props) =>
    props.$secondary ? props.theme.colors.secondary : props.theme.colors.text};
  cursor: pointer;
  padding: ${(props) => props.theme.space.sm} ${(props) => props.theme.space.md};
  min-height: ${(props) => props.theme.space.md};
  min-width: ${(props) => props.theme.space.xxl};
  font-size: ${(props) => props.theme.fontSize.lg};
`;

export default function Button(props) {
  const [clicked, setClicked] = useState(false);
  const { isSecondary = false } = props;

  return (
    <StyledButton onClick={() => setClicked(!clicked)} $secondary={isSecondary}>
      {props.children}
      {clicked ? 'In progress...' : 'Hello'}
    </StyledButton>
  );
}
