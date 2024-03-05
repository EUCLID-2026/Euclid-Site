import { Box, Container, Typography } from "@mui/material";

function About () {
    return(
    <Container maxWidth sx={{backgroundColor:'#e6e5e5',width:'100%',mt:24}}>
            <Box sx={{p:4}}>
            <Typography variant="h3" align='center'  sx={{color:'#2F6A4D'}}>
                About Us
            </Typography>
            <Typography variant="h6" align='center' sx={{p:4}}>
            The cEnter of sUstainable and seCure bLockchaIn Development (or EUCLID) is a flagship laboratory facility, present at K.J. Somaiya College of Engineering (Vidyavihar). Since its inception in (enter year), EUCLID has served as the means for students, faculties and researchers to understand, learn, ideate and innovate in the field of Blockchain development. With a vast array of projects, research papers and infrastructural capabilities, EUCLID proves to be the trailblazing trendsetter in the blockchain landscape, enabling knowledge inculcation at the grassroots level.
            </Typography>
            </Box>   
        </Container>
    )

}
export default About;