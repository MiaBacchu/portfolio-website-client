import React from 'react';
import { Box, Button, createTheme, ThemeProvider, Typography } from '@mui/material';
import { red, lightGreen } from '@mui/material/colors';
import Image from 'mui-image';

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
};
const HomeBanner = () => {
    const primary = lightGreen['A700'];
    const secondary = red[500];
    return (
        <Box>
            <Image style={{height:800,filter:'brightness(20%)'}} src="https://i.ibb.co/pd31B02/DSC-0010-1.jpg"/>
            <Box sx={{position:'absolute',top:'15%',left:'25%',right:'25%'}} theme={theme}>
            <ThemeProvider theme={theme}>
            <Typography variant="h3" sx={{color:primary}}>Welcome to My Website</Typography>
            <Typography sx={{color:secondary}} variant="h3">Mia Bacchu, Front-End Web Developer
            </Typography>
            </ThemeProvider>
            <Button sx={{mt:3,backgroundColor:secondary}} variant="contained">
                Download
                <br/>
                My Resume
            </Button>
            </Box>
        </Box>
    );
};

export default HomeBanner;