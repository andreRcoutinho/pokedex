import React from 'react';
import styled from 'styled-components';

const FlexCenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function FlexCenter(props) {
  return <FlexCenterDiv>{props.children}</FlexCenterDiv>;
}
