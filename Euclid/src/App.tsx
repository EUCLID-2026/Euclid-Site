import { Box, Container, Divider } from '@mui/material'
import Navbar from './component/Navbar'
import About from './component/About'
import Map from './component/Map'
import Carousel from './component/Carausel'
import Whatdo from './component/Whatdo'
import Projects from './component/Projects'
import Blogs from './component/Blogs'
import Contactus from './component/Contactus'
import './App.css'
import Title from './component/Title'

function App() {
 return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Divider />
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Carousel />
        <Box sx={{width:'100%'}}>
          <div id="about">
            <About />
            <Title text='What We Do ?'/>
            <Whatdo/>
          </div>
          <div id="project">
            <Title text='Our Projects'/>
            <Projects/>
          </div>
          <div id="blogs">
            <Title text='Blogs'/>
            <Blogs/>
          </div>
          <div id="contactus">
            <Contactus/>
          </div>
          <Map />
        </Box>
      </Box>
    </>
 )
}

export default App