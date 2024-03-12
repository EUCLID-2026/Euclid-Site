import { Box, Divider } from '@mui/material'
import Navbar from './component/Navbar'
import About from './component/About'
import Carousel from './component/Carausel'
import Whatdo from './component/Whatdo'
import Projects from './component/Projects'
import Blogs from './component/Blogs'
import Contactus from './component/Contactus'
import './App.css'
import Title from './component/Title'
import Map from './component/Map'

function App() {
 return (
    <>
      <Navbar />
      <Divider />
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Carousel />
        <Box sx={{width:'100%'}}>
          <Box id="about">
            <About />
            <Title text='What We Do ?'/>
            <Whatdo/>
          </Box>
          <Box id="project">
            <Title text='Our Projects'/>
            <Projects/>
          </Box>
          <Box id="blogs">
            <Title text='Blogs'/>
            <Blogs/>
          </Box>
          <Box id="contactus">
            <Title text='Contact Us'/>
            <Contactus/>
          </Box>
          <Map />
        </Box>
      </Box>
    </>
 )
}

export default App