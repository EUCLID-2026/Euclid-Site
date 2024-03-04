import { Box, Container, Typography } from "@mui/material";
import Cards from "./Cards";
function Projects () {
    return (
        <Container>
        <Box maxWidth='xl' sx={{p:2,backgroundColor:'#BEE0CF',width:'102.4%',ml:-4,mt:8}}>
        <Typography  variant="h4" align='center' sx={{color:'#2F6A4D'}}>
            Projects
        </Typography>
        </Box>
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