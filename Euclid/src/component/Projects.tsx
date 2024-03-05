import { Box, Container, Typography } from "@mui/material";
import Cards from "./Cards";
function Projects () {
    return (
        <Container>
        
        <Box maxWidth='xl' sx={{p:4,width:'102.4%',ml:-4,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
            <Cards content="content" actions="actions" />
            <Cards content="content" actions="actions" />
            <Cards content="content" actions="actions" />
              
        </Box>
        <Typography variant="h4" align='center' sx={{mt:4}}>
            More Projects
        </Typography>   
        </Container>

    )
}
export default Projects;