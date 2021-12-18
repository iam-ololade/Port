import {
  Heading,
  Center,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'


const Header = ({children, ...rest}) => {
  return(
    <Heading pos="relative" color={useColorModeValue('gray.600', 'gray.200')}>
      <Center textAlign={'center'} px={{ base: 2, md: 24 }} py={4} {...rest}>
       <Center _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 16,
            h: 2,
            pos: 'absolute',
            left: [5, 10, 16, 24],
            bottom: 5,
            bg: "#8092BF",
            opacity: .5,
            zIndex: 0,
          }}>{children}</Center>
      </Center>
    </Heading>
  )
}

export default Header