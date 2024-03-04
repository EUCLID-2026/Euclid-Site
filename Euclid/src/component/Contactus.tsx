import { Avatar, Box, Container, Typography } from "@mui/material";


const data = [
    { name: 'Sujal', role: 'Member', avatarSrc: '/static/images/avatar/1.jpg' },
    { name: 'Sujal', role: 'Member', avatarSrc: '/static/images/avatar/1.jpg' },
  ];

function Contactus () {
    return (
        <Container>
        <Box maxWidth='xl' sx={{p:2,backgroundColor:'#BEE0CF',width:'102.4%',ml:-4,mt:8}}>
        <Typography  variant="h4" align='center' sx={{color:'#2F6A4D'}}>
            Contact Us
        </Typography>
        </Box>
        <>
      {data.map((item, index) => (
        <Box
          key={index}
          maxWidth="md"
          sx={{ p: 4, ml: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Avatar
              alt={item.name}
              src={item.avatarSrc}
              sx={{ width: 100, height: 100, mt: 4 }}
            />
            <Typography component="div">
              <Box sx={{ mt: 6 }}>
                <h4>{item.name}</h4>
                <p>{item.role}</p>
              </Box>
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Typography component="div">
              <Box sx={{ mt: 6 }}>
                <h4>{item.name}</h4>
                <p>{item.role}</p>
              </Box>
            </Typography>
            <Avatar
              alt={item.name}
              src={item.avatarSrc}
              sx={{ width: 100, height: 100, mt: 4 }}
            />
          </Box>
        </Box>
      ))}
    </>
        </Container>
    )
}
export default Contactus;