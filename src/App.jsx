import React, { useState } from 'react';
import {Grid, Heading} from '@chakra-ui/react'
import LoadTeams from './components/LoadTeams';
import Cart from './components/Cart';
const App = () => {
  
  return (
    <div>
     
      <Heading textAlign='center' my='4'>Football Team Selling Studio</Heading>
      <LoadTeams />
    </div>
  );
};

export default App;