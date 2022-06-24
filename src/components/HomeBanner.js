import React from 'react';
import { Box, Button, Tooltip } from '@mui/material';
import { red, lightGreen } from '@mui/material/colors';
import Image from 'mui-image';
import { Link } from 'react-router-dom';
import Resume from "../utils/MyResume.pdf";
import Text from '../customization/Text';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const HomeBanner = () => {
    const primary = lightGreen['A700'];
    const secondary = red[500];
    return (
        <Box>
            <Box sx={{height:'35rem',filter:'brightness(20%)'}}>
            <Image src="https://i.ibb.co/pd31B02/DSC-0010-1.jpg"/>
            </Box>
            <Box sx={{position:'absolute',top:'15rem',left:'10%',right:'10%'}}>
              <Text sx={{color:primary}} variant='h1' title='Welcome to My Website'/>
              <Text sx={{color:secondary}} variant='h1' title='Mia Bacchu, Front-End Web Developer'/>
              <Tooltip title="Download">
                <Button sx={{mt:3,backgroundColor:secondary}} variant="contained">
                <Link style={{textDecoration:'none',color:'white'}} to={Resume} target="_blank" download>
                <Text variant='h2' title={<FileDownloadIcon/>}/>
                <Text variant='h2' title='My Resume'/>
                  </Link>
                  </Button>
                </Tooltip>
            </Box>
        </Box>
    );
};

export default HomeBanner;