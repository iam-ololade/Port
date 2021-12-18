import React, { ReactNode } from 'react';
import {
  Button,
  Flex,
  useColorMode,
  useColorModeValue,
  Text,
  Spacer,
} from '@chakra-ui/react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link'
import links from './assets/data'
import Logo from './Logo'
import NavStyles from './navbar.module.css'


export default function Navbar({
  children }) {
      const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex zIndex={200}  className={NavStyles.mobileNav} overflow={"hidden"} H={24} bg={useColorModeValue('gray.50', 'gray.900')} w="full" py={6} px={12} alignItems="center" display={{ base: 'none', md: 'flex' }} shadow="lg">
        <Logo />
      <Spacer />
       <Flex alignItems="center"> 
           {links.map(link => {
            const {url, id, text} = link
           return(
          <Link href={url} key={id}>
            <Text px="2" cursor="pointer" style={{ textDecoration: 'none' }}>{text} </Text>
          </Link>
          )})}
          <Button mx={2} onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      
      </Flex>
    </Flex>
  );
}


