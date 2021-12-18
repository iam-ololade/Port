import {
    Container,
    Stack,
  } from '@chakra-ui/react';
  import Header from './SectionHeader'
import ProjectImage from './ProjectImage'
import {items} from './assets/data'

const Projects = () => {
    return(
        <Container centerContent id="projects" maxW={'7xl'}>
            <Header>Projects</Header>
        <Stack
            align={'center'}
            spacing={{ base: 4, md: 10 }}
            py={{ base: 8, md: 24 }}
            textAlign={{base:'center', md: "left" }}
            px={{ base: 4, md: 24 }}
            direction={{ base: 'column', md: 'row' }} position={'relative'}>
            {
                items.map(item => {
                    const {id, stack, title, image, url, desc} = item
                    return(
                        <ProjectImage key={id} {...item} />
                    )
                })
            }
            
        </Stack>
    </Container>
    )
}

export default Projects