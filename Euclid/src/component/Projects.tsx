import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";

const Cards = ({ content }) => {
  return (
    <Card sx={{ height: '15vw', width:'15vw' ,display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor:'#B0D0C0', border:'3px solid #2F6A4D', borderRadius:'2vw' }}>
      <CardContent>
        <Typography variant="body1" align="center">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

function Projects() {
  return (
    <Container>
      <Box maxWidth='xl' sx={{ p: 4, width: '102.4%', ml: -4, textAlign:'center', display: 'flex', justifyContent: 'center',marginLeft:'1vw' }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} >
            <Cards content="Dashboard to Monitor the Rescue Consumption of Blockchain Set-Up" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Cards content="HASHCHAIN: Abstract Blockchain Addressing the Issue of Product Counterfeiting" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Cards content="Geolocation tagged Land Registry Application using Blockchain" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Cards content="Demonstration of Blockchain Vulnerabilities" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Cards content="Anomaly Detection for Indigenous Crypto Coin Transactions" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Cards content="Nexus Design Systems" />
          </Grid>
        </Grid>
      </Box>
      <Typography variant="h4" align='center' sx={{ mt: 4, textDecoration:'underline'}}>
        VIEW ALL
      </Typography>
    </Container>
  );
}

export default Projects;