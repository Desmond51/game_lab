import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react';
import logo from '../assets/logo.webp'

export default function NavBar() {
  return (
    <HStack>
        <Image boxSize={40} src={logo} />
        <Text>Navbar</Text>
    </HStack>
  )
}
