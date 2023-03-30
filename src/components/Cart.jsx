import React from 'react';
import { useRef } from 'react';
import { useDisclosure, Button, Input} from '@chakra-ui/react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
const Cart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
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
                    <DrawerHeader>Create your purchase</DrawerHeader>
          
                    <DrawerBody>
                      
                    </DrawerBody>
          
                    <DrawerFooter>
                      <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                      </Button>
                      <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </>
            )
};

export default Cart;