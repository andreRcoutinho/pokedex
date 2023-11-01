import React from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 4.25rem;
  grid-auto-flow: row;
  grid-auto-rows: 1fr;
  place-items: center;
`;

export default function Grid(props) {
  return <StyledGrid>{props.children}</StyledGrid>;
}
