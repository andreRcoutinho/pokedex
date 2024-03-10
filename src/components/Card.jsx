import React from 'react';
import styled from 'styled-components';
import '../font/font.css';
import { Flex } from './styles/Flex.styled';

const gbColors = {
  primary: '#C8C8C8',
  secondary: '#646C78',
  screen: '#646E23',
  text: '#413782',
  detail: '#6E2855',
};

const StyledCard = styled.div`
  background-color: ${gbColors.secondary};
  border-radius: 0.75rem;
  border-bottom-right-radius: 2.75rem;
  box-shadow: 0px 0px 0px 2px rgba(200, 200, 200, 0.75);
  color: ${gbColors.screen};
  padding: 2.5rem 3.75rem;
  width: auto;
  position: relative;

  &:after {
    content: 'BATTERY';
    color: ${gbColors.primary};
    position: absolute;
    top: 45%;
    left: 10px;
    font-size: 8px;
  }

  &:before {
    content: '';
    background-color: ${gbColors.detail};
    border-radius: 50%;
    box-shadow: inset -1px 1px 3px 1px rgba(0, 0, 0, 0.5);
    height: 10px;
    width: 10px;
    position: absolute;
    top: 40%;
    left: 14px;
  }

  &:hover:before {
    background-color: rgba(255, 0, 0, 1);
    box-shadow: 0px 0px 4px 1px red;
  }
`;

const TopLines = styled.span`
  background: linear-gradient(
    transparent 11px,
    #7d1a4a 10px 13px,
    transparent 13px 17px,
    #35224e 17px 19px,
    transparent 18px
  );
  position: absolute;
  height: 26px;
  width: 100%;
  top: 2%;
  left: 0;

  span {
    color: ${gbColors.primary};
    text-transform: uppercase;
    font-size: 10px;
    background-color: ${gbColors.secondary};
    padding: 0 8px;
    position: absolute;
    margin: auto;
    translate: 64% 50%;
  }
`;

const Screen = styled.div`
  background: ${gbColors.screen};
  border-radius: 3px;
  border-left: 6px solid #000;
  border-top: 6px solid #000;
  height: 210px;
  width: 240px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & p {
    color: rgba(5, 30, 5, 0.8);
    font-family: 'PokemonClassic';
    text-transform: uppercase;
    font-size: 0.7em;
  }

  & img {
    max-width: 125px;
    filter: grayscale(90%);
  }
`;

export default function Card(props) {
  const { sprites, types, name } = props;
  const sprite = sprites.other.showdown.front_default;

  return (
    <StyledCard>
      <TopLines>
        <span>dot matrix with stereo sound</span>
      </TopLines>
      <Screen>
        <Flex flexDirection="column">
          <img src={sprite} alt={`${name}'s image.`}></img>
          <p>{name}</p>
        </Flex>
        <div>
          {types.map((type, index) => {
            return (
              <p key={`${name}_${type}_${index}`}>
                {type.pokemon_v2_type.name}
              </p>
            );
          })}
        </div>
      </Screen>
    </StyledCard>
  );
}
