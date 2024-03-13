import { Box, Container, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import img from "../assets/image 2.svg";
import { useState, useEffect } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

function Navbar() {
 const [anchorEl, setAnchorEl] = useState(null);
 const isMobile = useMediaQuery('(max-width:768px)'); // Adjust the breakpoint as needed

 const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
    setAnchorEl(null);
 };

 const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
 };

 return (
    <Container maxWidth='xl' sx={{ display: 'flex', mt: 2, mb: 2, }}>
      <img src={img} alt="Eulid logo" />
      {isMobile && ( // Only render the hamburger icon on smaller screens
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, marginLeft: 'auto' }}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => { scrollToSection('home'); handleClose(); }}>HOME</MenuItem>
        <MenuItem onClick={() => { scrollToSection('about'); handleClose(); }}>ABOUT</MenuItem>
        <MenuItem onClick={() => { scrollToSection('project'); handleClose(); }}>PROJECT</MenuItem>
        <MenuItem onClick={() => { scrollToSection('blogs'); handleClose(); }}>BLOGS</MenuItem>
        <MenuItem onClick={() => { scrollToSection('contactus'); handleClose(); }}>CONTACT US</MenuItem>
      </Menu>
      <Box sx={{ 
        display: { xs: 'none', md: 'flex' }, 
        justifyContent: 'center', 
        gap: '4rem', 
        width: '80%',
        '& *': { 
            transition: 'color 0.3s ease', 
            cursor: 'pointer', 
            '&:hover': {
                color: '#2F6A4D',
                textDecoration:'overline',
            }
        }
      }}>
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
