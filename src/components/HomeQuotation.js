import { Box } from '@mui/system';
import React from 'react';
import Text from '../customization/Text';

const HomeQuotation = () => {
    return (
        <Box sx={{backgroundColor:'whitesmoke',height:'16rem',paddingTop:'8rem'}}>
            <Text variant='h1' title='"There is nothing worse than being stupid"'/>
            <Text variant='h1' title='-Jim Rohn'/>
        </Box>
    );
};

export default HomeQuotation;