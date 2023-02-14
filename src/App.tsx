import React, { useEffect, useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import './App.css';
import { fetchPeople } from './api';
import { Person } from './types';

function App() {
  const [people, setPeople] = useState<Array<Person>>();

  useEffect(() => {
    fetchPeople().then((response) => {
      setPeople(response.results);
    });
  }, []);

  return (
    <div className="App">
      <Grid
        gridTemplateColumns={'1fr 5fr 1fr'}
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem colStart={2} colEnd={3}>
          <header></header>
          <main>
            <ul>
              {people?.map((char) => {
                return <li>{char.name}</li>;
              })}
            </ul>
          </main>

          <footer></footer>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
