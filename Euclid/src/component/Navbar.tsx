import { Box, Container } from "@mui/material";
import img from "../assets/image 2.svg";

function Navbar() {
 // Function to scroll to a section
 const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
 };

 return (
    <Container maxWidth="xl" sx={{ display: 'flex', mt: 4, mb: 2 }}>
      <img src={img} alt="Eulid logo" />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '4rem', marginLeft: '16rem' }}>
        <h4 onClick={() => scrollToSection('home')}>HOME</h4>
        <h4 onClick={() => scrollToSection('about')}>ABOUT</h4>
        <h4 onClick={() => scrollToSection('project')}>PROJECT</h4>
        <h4 onClick={() => scrollToSection('blogs')}>BLOGS</h4>
        <h4 onClick={() => scrollToSection('contactus')}>CONTACT US</h4>
      </Box>
    </Container>
 );
}

export default Navbar;