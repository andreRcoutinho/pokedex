import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.secondary} 50%,
    ${(props) => props.theme.colors.primary} 50%
  );
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.md};
  min-height: 50%;
  padding: ${(props) => props.theme.space.sm} 0;
  width: 100%;
`;

const FirstHalf = styled.div`
  width: 50%;
  color: ${(props) => props.theme.colors.primary};
  display: inherit;
  justify-content: space-evenly;
`;

const SecondHalf = styled.div`
  width: 50%;
  display: inherit;
  justify-content: space-around;
`;

export default function Nav(props) {
  return (
    <StyledNav>
      <FirstHalf>
        {props.links.map((link, i) => (
          <span key={`${link}_${i}`}>{link}</span>
        ))}
      </FirstHalf>
      <SecondHalf>{props.children}</SecondHalf>
    </StyledNav>
  );
}
