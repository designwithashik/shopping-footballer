import React, { useEffect, useState } from 'react';
import SingleTeam from './SingleTeam';
import { Grid } from '@chakra-ui/react';
import Cart from './Cart';

const LoadTeams = ({handlePurchaase}) => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('footballers.json')
            .then(res => res.json())
        .then(data => setTeams(data))
    }, [])

    const [addedTeams, setAddedTeams] = useState([])

  const handlePurchase = (team) => {
    console.log('Clicked')
    const earlierTeams = addedTeams;
    const currentTeams = [...earlierTeams, team]
      setAddedTeams(currentTeams);
  }
    return (
        <Grid templateColumns='6fr 1fr'>
             <Grid mx={5} templateColumns='repeat(3, 1fr)' gap='3'> 
                {teams.map((team, index) => {
                // console.log(team)
                return <SingleTeam key={index} team = {team} handlePurchase ={handlePurchase}></SingleTeam>
                })}
            </Grid>
            <Cart players ={addedTeams}></Cart>
        </Grid>
    );
};

export default LoadTeams;