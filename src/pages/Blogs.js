import { Box } from '@mui/material';
import React from 'react';
import { Fade } from 'react-reveal';
import Text from '../customization/Text';

const Blogs = () => {
    return (
        <Box sx={{height:'40rem',backgroundColor:'#36448A'}}>
            <Fade bottom>
            <Text sx={{color:'#D1D7E2'}} style={{paddingTop:'10rem', color:'white'}} variant="h1" title="Coming Soon"></Text>
            </Fade>
        </Box>
    );
};

export default Blogs;