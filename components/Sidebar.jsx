import Link from 'next/link'
import links from './assets/data'
import {
  Box,
  Button,
  useColorMode,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Spacer,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import HamburgerIcon from './HamburgerIcon'
import Logo from './Logo'
import NavStyles from './navbar.module.css'

export default function SimpleSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex className={NavStyles.mobileNav} w="full" h={16} px={4} alignItems="center" display={{ base: 'flex', md: 'none'}} bg={useColorModeValue('gray.50', 'gray.900')}  shadow="md" zIndex={300}>
      <Logo />
      <Spacer />
      <Button mx={2} onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      <HamburgerIcon onClick={onOpen} boxSize={8} color={useColorModeValue('#8092BF', '#90A0C7')}/>
      <Drawer autoFocus={false} isOpen={isOpen} placement="right" onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} size={"xs"}>
    <DrawerContent >
      <Box pos="fixed" h="full" w="full">
          <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Logo />
        <CloseButton onClick={onClose} />
      </Flex >
      {links.map( link => {
      const {url, id, icon, text} = link
      
      return(
      <Link key={id} href={url} style={{ textDecoration: 'none' }}>
      <Flex align="center" p="4" mx="4"
        borderRadius="md" role="group"
        cursor="pointer" _active={{
          bg: '#8092BF',
          color: 'white',
        }} _hover={{
          bg: '#8092BF',
          color: 'white',
        }}
        onClick={onClose}>
          <Icon mr="4" fontSize="16" _groupHover={{
              color: 'white',
            }}
            as={icon}/>
          {text}
        </Flex>
    </Link>
      )})}
    </Box>
    </DrawerContent>
  </Drawer>
  </Flex>
  );
}

