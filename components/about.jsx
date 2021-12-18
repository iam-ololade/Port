import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Link,
    createIcon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {FiArrowRight} from "react-icons/fi"
  import Image from 'next/image'
  import Header from './SectionHeader'


const about = () => {
    return(
        <Container py={{ sm: 4, md: 5}} id="about" bg={useColorModeValue('gray.100', 'gray.800')}  maxW="full" mt={0} centerContent overflow="hidden">
            <Header>About Me</Header>
            <Stack
              align={'center'}
              spacing={{ base: 4, md: 10 }}
              py={{ base: 8, md: 12 }}
              textAlign={{base:'center', md: "left" }}
              px={{ base: 4, md: 24 }}
              direction={{ base: 'column', md: 'row' }} position={'relative'}>
            <Flex
              order={1}
              flex={1}
              justify={'center'}
              align={'center'}
              position={'relative'}
              w={'full'}          
              pb={{base: 12, md: 0 }}>
              <Box
                position={'relative'}
                height={'200px'}
                width={'200px'}
                rounded={'full'}
                border={'4px solid white'}
                bg="#8092BF"
                boxShadow={'md'}
                overflow={'hidden'}>
                <Image alt='Bello ololade' height='200px' width='200px' objectFit src={'/hero.png'} alt="Bello Ololade, Freelance Web desinger" />
              </Box>
            </Flex>
        <Stack textAlign={{base: 'left', md: 'left'}} px={{base: 0, md: 4}} order={{base:2, md: 1}} flex={1} spacing={{ base: 8, md: 12 }} position={'relative'}>
          
          <Text>
          I am Bello Ololade, A web designer from Nigeria. I got into tech while i was student at olabisi onabanjo university, Bsc Zoology. I've always been fascinated with how things work. fast forward to 2 years later and i'm now designing landing pages for business around the world. 
          </Text>
          <Text>
          I believe i’ve got the right skills and technologies to take your online presence on the level it truly deserves. 
          Your website should be your no1 sales agent and its works 24/7, Get a quote now that’s best for your business.
          </Text>
          <a rel='nofollow' href="#contact">
          <Button type="button" fontSize={24} color="#8092BF" variant={'link'} colorScheme={'purple'} size={'2xl'}>
              Let's talk
            </Button>
            </a>
        </Stack>
      </Stack>
        </Container>
    )
}

export default about