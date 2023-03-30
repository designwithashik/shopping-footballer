import React from 'react';
import { useRef } from 'react';
import { useDisclosure, Button, Input, Text, Container} from '@chakra-ui/react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    
  } from '@chakra-ui/react'
const Cart = ({players}) => {
  console.log(players)
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  
 const totalPrice= players.reduce((prev, curr)=>{return prev + curr.price},0)
  
    return (
       
        <>
            <Button position='sticky' top='4' ref={btnRef} colorScheme='teal' onClick={onOpen}>
                
                  Open Cart
                </Button>
                <Drawer
                  isOpen={isOpen}
                  placement='right'
                  onClose={onClose}
                  finalFocusRef={btnRef}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Confirm your purchase</DrawerHeader>
          
            <DrawerBody>
              <h2 style={{
                fontSize: '21px',
                marginBottom: '11px',
                fontWeight: '500'
            }}>Selected Players</h2>
              
              
              {players.map(({ name, price, country }, index) => {
                // console.log(player)
                return <Container key={index} fontWeight={500} bgColor='orange.300' padding={5} mb='5' borderRadius={7}>
                  <Text>Name: {name}</Text>
                  <Text>Country: {country}</Text>
                  <Text>Price: ${price}</Text>
                </Container>
              })}
              <Text  fontWeight={500} bgColor='red.300' padding={5} mb='5' borderRadius={7}>Total Selection: {players.length}</Text>
              <Text  fontWeight={500} bgColor='yellow.300' padding={5} mb='5' borderRadius={7}>Total Price: ${totalPrice}</Text>
                    </DrawerBody>
          
                    <DrawerFooter>
                      <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                      </Button>
                      <Button colorScheme='blue'>Checkout</Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </>
            )
};

export default Cart;