import {
  Container,
  Text,
  Stack,
  Spacer,
  List, ListItem, ListIcon, OrderedList,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  MdSpeed, 
  MdShowChart, 
  MdAdminPanelSettings,  
  MdOutlineDesignServices,
} from 'react-icons/md'
import Header from './SectionHeader'


const Features = () => {
  return(
    <Container centerContent px={{ base: 8, md: 48}} py={4} maxW={'7xl'} >
      <Header>Features</Header>
        <Text pb={[8, 4]} textAlign={'center'} color={'#8092BF'}
        fontWeight={600} lineHeight={1.1} fontSize={{ base: 'md', sm: 'lg', lg: '3xl' }}>What you get: <Text as={'span'} color={useColorModeValue('gray.600', 'gray.300')} fontWeight={400}> A website with the following features
            </Text></Text>      
          <Stack py={[4, 12]} w="full" direction={{ base: 'column', md: 'row' }}>
          <List  spacing={3}>
            <ListItem fontSize={[16, 18]}>
              <ListIcon boxSize={8} as={MdSpeed} color="#8092BF" />
              Blazingly Fast
            </ListItem>
            <ListItem fontSize={[16, 18]}>
              <ListIcon boxSize={8} as={MdShowChart} color="#8092BF" />
              SEO Enhanced
            </ListItem>
            </List> 
            <Spacer />
          <List  spacing={3}>
            <ListItem fontSize={[16, 18]}>
              <ListIcon boxSize={8} as={MdOutlineDesignServices} color="#8092BF" />
                Visually appealing
            </ListItem>
            <ListItem fontSize={[16, 18]}>
              <ListIcon boxSize={8} as={MdAdminPanelSettings} color="#8092BF" />
                Secured Tech.
            </ListItem>
          </List>    
          </Stack>
</Container>
  )
}

export default Features