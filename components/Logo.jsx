import Head from 'next/head';
import {
  Heading,
} from '@chakra-ui/react';
import Link from 'next/link'

const Logo = () => {
  return(
    <>
       <Head>
       <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet"/>
      </Head>
      <Heading 
      fontSize={'2xl'}
      fontFamily={'Sacramento'}
      color="#8092BF"> <Link href="/">Ololade </Link>
      
      </Heading>
    </>
  )
}

export default Logo