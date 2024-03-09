import Card from '@mui/material';
import CardContent from '@mui/material';
import Box from '@mui/material';
import Typography from '@mui/material/Typography';


const FlippingCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box onClick={handleClick} className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Card sx={{ height: '15vw', width:'15vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor:'#B0D0C0', border:'3px solid #2F6A4D', borderRadius:'2vw' }}>
            <CardContent>
              <Typography variant="body1" align="center">
                {frontContent}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="flip-card-back">
          <Card sx={{ height: '15vw', width:'15vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor:'#2F6A4D', border:'3px solid #B0D0C0', borderRadius:'2vw', color: 'white' }}>
            <CardContent>
              <Typography variant="body1" align="center">
                {backContent}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </Box>
  );
};

export default FlippingCard;
