import React, { useState } from 'react';
import {Grid, Heading} from '@chakra-ui/react'
import LoadTeams from './components/LoadTeams';
import Cart from './components/Cart';
const App = () => {
  
  return (
    <div>
      <Heading textAlign='center' my='4'>Football Team Selling Studio</Heading>
      <Grid templateColumns='3fr 1fr'>
        <LoadTeams />
        <Cart />
      </Grid>
    </div>
  );
};

export default App;