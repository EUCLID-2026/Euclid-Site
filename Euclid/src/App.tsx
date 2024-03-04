import { Container, Divider } from '@mui/material'
import Navbar from './component/Navbar'
import About from './component/About'
import Map from './component/Map'
import Carousel from './component/Carausel'
import bg from './assets/Landingbg.png'
import Whatdo from './component/Whatdo'
import Projects from './component/Projects'
import Blogs from './component/Blogs'
import Contactus from './component/Contactus'

function App() {
  

  return (
    <Container maxWidth="xl" sx={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <Divider />
      <Carousel />
      <About />
      <Whatdo/>
      <Projects/>
      <Blogs/>
      <Contactus/>
      <Map />
    </Container>
  )
}

export default App
