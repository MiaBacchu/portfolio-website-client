import { Box } from '@mui/system';
import React from 'react';
import Text from '../customization/Text';
import {Fade} from 'react-reveal';

const HomeQuotation = () => {
    return (
        <Box sx={{backgroundColor:'#525965',height:'16rem',paddingTop:'8rem'}}>
            <Fade top>
            <Text sx={{color:'#D1D7E2'}} variant='h1' title='"There is nothing worse than being stupid"'/></Fade>
            <Fade bottom>
            <Text sx={{color:'rgb(77, 181, 255)'}} variant='h2' title='-Jim Rohn'/>
            </Fade>
        </Box>
    );
};

export default HomeQuotation;