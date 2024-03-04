import { Box, Card, CardMedia, Container, Typography } from "@mui/material";
import img1 from "../assets/853FDAA3-594D-478C-B409-5224320844AB.png";
function Whatdo () {
    return (
        <Container>
        <Box maxWidth='xl' sx={{p:2,backgroundColor:'#BEE0CF',width:'102.4%',ml:-4,mt:8}}>
        <Typography  variant="h4" align='center' sx={{color:'#2F6A4D'}}>
            What do we do?
        </Typography>
        </Box>

        <Box maxWidth='xl' sx={{p:4,width:'102.4%',ml:-4,display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Card sx={{width:'40rem'}}>
                <CardMedia component="img" alt="What we do" image={img1} />
            </Card>
        </Box>
        <Box maxWidth='xl' sx={{p:4,width:'102.4%',ml:-4,display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Card sx={{width:'40rem'}}>
                <CardMedia component="img" alt="What we do" image={img1} />
            </Card>
        </Box>
        <Box maxWidth='xl' sx={{p:4,width:'102.4%',ml:-4,display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Card sx={{width:'40rem'}}>
                <CardMedia component="img" alt="What we do" image={img1} />
            </Card>
        </Box>
        </Container>
    )
}
export default Whatdo;