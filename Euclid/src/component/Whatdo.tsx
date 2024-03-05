import { Box, Card, CardMedia, Container, Typography } from "@mui/material";
import img1 from "../assets/853FDAA3-594D-478C-B409-5224320844AB.png";
function Whatdo () {
    return (
        <Container maxWidth > 
        <Box  sx={{p:4,display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Card sx={{width:'40rem'}}>
                <CardMedia component="img" alt="What we do" image={img1} />
            </Card>
        </Box>
        <Box sx={{p:4,display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Card sx={{width:'40rem'}}>
                <CardMedia component="img" alt="What we do" image={img1} />
            </Card>
        </Box>
        <Box  sx={{p:4,display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Card sx={{width:'40rem'}}>
                <CardMedia component="img" alt="What we do" image={img1} />
            </Card>
        </Box>
        </Container>
    )
}
export default Whatdo;