import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const Cards = ({ label, content, actions }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" style={{ backgroundColor: '#B0D0C0', border: '2px solid #2F6A4D', width: '15vw', height: '15vw', borderRadius: '3vw' }}>
        <CardContent>
          {content}
        </CardContent>
        <CardActions>
          {actions}
        </CardActions>
      </Card>
    </Box>
  );
}

export default Cards;