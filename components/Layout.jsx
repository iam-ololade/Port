import { 
  Box, 
  useColorModeValue 
} from "@chakra-ui/react"
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({children}) => {
  return(
  <>
    <Head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta
      name="title"
      content="Bello Ololade - Freelance web designer based in Nigeria"
    />
    <meta
      name="description"
      content="Build blazingly fast and seo enhnaced websites and landing pages for your business"
    />

    <title>Bello Ololade - Freelace Web Designer</title>
  </Head>
    <Box color={useColorModeValue('gray.600', 'gray.300')} bg={useColorModeValue('gray.50', 'gray.900')} pos={"relative"} w="full" minH="100vh" p={0} overflow={'hidden'}>
      <Navbar/>
      <Sidebar />
        {children}  
      <Footer/>
</Box>
</>
  )
}
export default Layout

