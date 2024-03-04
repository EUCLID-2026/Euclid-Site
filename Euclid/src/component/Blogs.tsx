import { Box, Card, CardMedia, Container, Typography } from "@mui/material";
import img1 from "../assets/WhatsApp Image 2024-02-07 at 3.23.png";
function Blogs () {
    return (
        <Container>
        <Box maxWidth='xl' sx={{p:2,backgroundColor:'#BEE0CF',width:'102.4%',ml:-4,mt:8}}>
        <Typography  variant="h4" align='center' sx={{color:'#2F6A4D'}}>
            Blogs
        </Typography>
        </Box>
        <Box maxWidth='xl' sx={{p:4,width:'102.4%',ml:-4,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
            <Card sx={{width:'20rem'}}>
                <CardMedia component="img" alt="What we do" image={img1} />
            </Card>
            <Card sx={{width:'20rem'}}>
                <CardMedia component="img" alt="What we do" image={img1} />
            </Card>
            <Card sx={{width:'20rem'}}>
                <CardMedia component="img" alt="What we do" image={img1} />
            </Card>  
        </Box>
        </Container>

    )
}
export default Blogs;