import { Box } from '@mui/material';
import React from 'react';
import Text from '../customization/Text';

const Footer = () => {
    return (
        <Box sx={{width:'full',backgroundColor:'black',color:'white',padding:'1rem'}}>
           <Text variant='h2' title='Gazipur, Dhaka, Bangladesh | Phone: +8801855878684 |'/>
           <Text variant='h2' title='Email: jewelranabacchu@gmail.com'/>
           <Text variant='h2' title='Copyright © 2022 Mia Bacchu'/>
        </Box>
    );
};

export default Footer;