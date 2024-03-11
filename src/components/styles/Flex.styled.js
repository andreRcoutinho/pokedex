import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  align-items: ${({ $alignItems }) => $alignItems};
  justify-content: ${({ $justifyContent }) => $justifyContent};

  & > div {
    flex: 1;
  }
`;

Flex.defaultProps = {
  $flexDirection: 'row',
  $alignItems: 'center',
  $justifyContent: 'center',
};
