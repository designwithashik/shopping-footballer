import React from 'react';
import {Button, Card, Grid, Image, Text} from '@chakra-ui/react'
const SingleTeam = (props) => {
    const { name, photo, price } = props.team;
    
    const handlePurchase = props.handlePurchase
    return (
        <Card bgColor='darkseagreen' padding={7}>
            <Text my={5} fontSize='3xl' fontWeight='700' textAlign='center'>{name}</Text>
            <Image borderRadius={15} src={photo}></Image>
            <Text my={5} fontWeight={500}>Price: {price}</Text>
            <Button onClick={(event) => {
                event.currentTarget.disabled = true;
                
                return handlePurchase(props.team)
            }} color='white' backgroundColor='blue.500' fontWeight={700}>Buy</Button>

       </Card>
    );
};

export default SingleTeam;