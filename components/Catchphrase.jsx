import {
  Container,
  Text,
  Center,
  useColorModeValue,
} from '@chakra-ui/react'


const Catchprase = () => {
  return(
    <Container maxW="full" bg={useColorModeValue('gray.200', 'gray.800')} maxW='full'>
      <Center textAlign={'center'} h={{base:36, md: 24}} px={{ base: 2, md: 24 }}>
        <Text lineHeight={2.0} color={useColorModeValue('gray.600', 'gray.300')}  lineHeight={1.1}
            fontSize={{ base: 'md', sm: 'lg', lg: '3xl' }}>Let's get you a website that promotes your business <Text fontWeight={600} as={'span'} color={'#8092BF'}>
                247 ⚡
            </Text></Text>
      </Center>
    </Container>
  )
}

export default Catchprase