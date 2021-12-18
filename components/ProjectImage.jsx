import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Link,
    Stack,
  } from '@chakra-ui/react';
  import Image from 'next/image'

  export default function ProductSimple({image, id, title, desc, url, stack}) {
  
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: '85%',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: 'blur(5px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              alt={title}
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'contain'}
              src={image}
            />
          </Box>
          <Stack spacing={4} textAlign={'left'} align={'left'} pt={3} px={6}>
              <Text  fontWeight={500} fontSize={'md'}>
               Tech: <span>{stack} </span>
              </Text>
            <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={700}>
              {title}
            </Heading>
            <Text  color={'gray.500'} fontSize={'xs'}>
                {desc}            
            </Text>
            <Link rel="nofollow" href={url}>
              <Text _hover={{ color: "#50679F" }}
                _active={{
                    textDecoration: "underline",
                    textDecorationColor: "#50679F",
                    transform: "scale(0.98)",
                }}
                _focus={{
                    boxShadow:
                    "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                }}  color="#8092BF" >Preview</Text>
            </Link>
        </Stack>
        </Box>
      </Center>
    );
  }