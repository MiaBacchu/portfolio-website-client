import React from 'react';
import { Box, Button, Tooltip } from '@mui/material';
import Image from 'mui-image';
import { Link } from 'react-router-dom';
import homeImage from "../utils/homeImage.jpg";
import Resume from "../utils/MiaBacchu.pdf";
import Text from '../customization/Text';
import { Fade } from 'react-reveal';

const HomeBanner = () => {
    return (
        <Box>
            <Box sx={{height:'35rem',filter:'brightness(20%)',paddingTop:'2rem'}}>
            <Image src={homeImage}/>
            </Box>
            <Box sx={{position:'absolute',top:'15rem',left:'10%',right:'10%'}}>
              <Fade left>
              <Text sx={{color:"rgb(77, 181, 255)"}} variant='h1' title='Welcome to My Website'/>
              </Fade>
              <Fade right>
              <Text sx={{color:"#D1D7E2"}} variant='h2' title='Mia Bacchu, Front-End Web Developer'/>
              </Fade>
                <Fade bottom>
                <Tooltip title="Click to Download">
                <Button sx={{mt:3}} variant="contained">
                <Link style={{textDecoration:'none',color:'white'}} to={Resume} target="_blank" download>
                <Text sx={{color:'#D1D7E2'}} variant='h3' title="My Resume"/>
                  </Link>
                  </Button>
                  </Tooltip>
                </Fade>   
            </Box>
        </Box>
    );
};

export default HomeBanner;