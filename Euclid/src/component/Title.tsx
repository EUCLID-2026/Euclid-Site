import { Box, Typography } from "@mui/material"

interface TitleProps {
    text: string;
}

function Title ({text}: TitleProps) {
    return (
        <Box maxWidth='xl' sx={{p:2,backgroundColor:'#BEE0CF',width:'100%',ml:-4,mt:8}}>
        <Typography  variant="h4" align='center' sx={{color:'#2F6A4D'}}>
            {text}
        </Typography>
        </Box>
    )
}
export default Title;