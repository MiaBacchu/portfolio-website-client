import { Box } from '@mui/material';
import React from 'react';
import Text from '../customization/Text';

const Footer = () => {
    return (
        <Box sx={{width:'full',backgroundColor:'#30313A',color:'#D1D7E2',padding:'1rem'}}>
           <Text variant='h3' title='Gazipur, Dhaka, Bangladesh | Phone: +8801855878684 |'/>
           <Text variant='h3' title='Email: jewelranabacchu@gmail.com'/>
           <Text variant='h3' title='Copyright © 2022 Mia Bacchu'/>
        </Box>
    );
};

export default Footer;