import {
  Flex, 
  Text,
  Spacer,
  useColorModeValue, 
  HStack, 
  Link, 
  Circle
} from '@chakra-ui/react';
import {socials} from './assets/data'


const Footer = () => {
  return(
    <Flex color={useColorModeValue("gray.100", "gray.200")} bg={useColorModeValue("gray.800", "gray.900")} py={2} px={[4,6,8]} position="relative" bottom="0" w="full" alignItems={'center'} >
      <Text>
        Ololade &copy; {new Date().getFullYear()} 
       </Text>
      <Spacer />
      <HStack spacing={[2,4,6]}>
        {
          socials.map(social =>{
            const {id, icon, url} = social
            return (
            <Circle key={id} size="35px" bg="gray.800" color="gray.100">
              <Link href={url}>
                {icon}
              </Link>
              </Circle>
            )
          })
        }
</HStack>
    </Flex>
  )
}

export default Footer