import { Box, Container } from "@mui/material";
import img from "../assets/image 2.svg";
function Navbar() {
 return (
    <Container  maxWidth="xl" sx={{display:'flex',mt:4,mb:2}}>          
        <img src={img} alt="Eulid logo" />
        <Box sx={{display:'flex',justifyContent:'space-between',gap:'4rem', marginLeft:'16rem', }}>
            <h4>HOME</h4>
            <h4>ABOUT</h4>
            <h4>PROJECT</h4>
            <h4>BLOGS</h4>
            <h4>CONTACT US</h4>
        </Box>
    </Container>
 );
}
export default Navbar;