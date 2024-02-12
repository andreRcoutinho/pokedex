import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { base, light, dark } from './themes.js';

import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from './queries.js';

import Grid from './components/layout/Grid.jsx';
import Nav from './components/layout/Nav.jsx';
import Toggle from './components/Toggle.jsx';
import Card from './components/Card.jsx';
import Button from './components/Button.jsx';

const ThemePreferenceContext = React.createContext();

const themesMap = {
  light,
  dark,
};

function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

  const theme = {
    ...base,
    colors: themesMap[currentTheme],
  };

  const {
    // result of the query
    data,
    // loading state of the query
    loading,
    // query errors, if any
    error,
    // method to fetch more
    fetchMore,
  } = useQuery(GET_POKEMONS, {
    variables: {
      limit: 9,
      offset: 0,
      orderBy: [{ id: 'asc' }],
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  const loadMore = () => {
    // console.log(data.pokemon_v2_pokemon.length);
    // fetchMore function from `useQuery` to fetch more content with `updateQuery`
    fetchMore({
      variables: {
        offset: data.pokemon_v2_pokemon.length,
      },
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousQueryResult;
        return Object.assign({}, previousQueryResult, {
          pokemon_v2_pokemon: [
            ...previousQueryResult.pokemon_v2_pokemon,
            ...fetchMoreResult.pokemon_v2_pokemon,
          ],
        });
      },
    });
  };

  return (
    <ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={theme}>
        <Nav links={['test1', 'test2', 'test3']}>
          <Toggle
            onChange={() => {
              let value = currentTheme === 'light' ? 'dark' : 'light';
              setCurrentTheme(value);
            }}
          ></Toggle>
        </Nav>
        <div
          style={{
            outline: '6px solid black',
            margin: '4rem 6rem',
            padding: '4rem 6rem',
          }}
        >
          <Grid>
            {data.pokemon_v2_pokemon.map((pokemon, index) => {
              return (
                <Card
                  key={`poke-${pokemon.id}_${index}`}
                  name={pokemon.name}
                  sprites={pokemon.pokemon_v2_pokemonsprites[0].sprites}
                  types={pokemon.pokemon_v2_pokemontypes}
                ></Card>
              );
            })}
          </Grid>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '4rem',
            }}
          >
            <Button onClick={loadMore}>Load more</Button>
          </div>
        </div>
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
}

export default App;
