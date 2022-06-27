import { Box } from '@mui/material';
import React from 'react';
import Text from '../customization/Text';

const Blogs = () => {
    return (
        <Box sx={{height:'40rem',backgroundColor:'#8A2BE2'}}>
            <Text style={{paddingTop:'10rem', color:'white'}} variant="h1" title="Coming Soon"></Text>
        </Box>
    );
};

export default Blogs;