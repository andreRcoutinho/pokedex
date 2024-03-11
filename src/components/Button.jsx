import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${(props) =>
    props.$secondary ? 'transparent' : props.theme.colors.secondary};
  border: solid 3px;
  border-color: ${(props) =>
    props.$secondary
      ? props.theme.colors.tertiary
      : props.theme.colors.primary};
  color: ${(props) =>
    props.$secondary
      ? props.theme.colors.tertiary
      : props.theme.colors.primary};
  cursor: pointer;
  padding: ${(props) => props.theme.space.sm} ${(props) => props.theme.space.md};
  min-height: ${(props) => props.theme.space.md};
  min-width: ${(props) => props.theme.space.xxl};
  font-size: ${(props) => props.theme.fontSize.lg};
  margin-top: ${({ $hasMarginTop }) => ($hasMarginTop ? '2em' : '0px')};
`;

export default function Button(props) {
  const { isSecondary = false, hasMarginTop = true } = props;

  return (
    <StyledButton
      $secondary={isSecondary}
      $hasMarginTop={hasMarginTop}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  );
}
