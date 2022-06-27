import { Box, Grid } from '@mui/material';
import React from 'react';
import Text from '../customization/Text';

const AboutSkill = () => {
    return (
        <Box sx={{flexGrow: 1, backgroundColor:'#333333',paddingY:'3rem'}}>
            <Text variant='h2' title='What skill I have' style={{color:'white',marginBottom:'2rem'}}/>
        <Grid container justifyContent='center'>
        <Grid xs={11} md={5.5} sx={{marginX:'1rem',backgroundColor:'gray',marginBottom:'5rem',wordBreak:'break-all',py:'2rem',px:'1rem',borderRadius:'1rem'}}>
          <Text variant='h2' title='Front-end development'/>
          <Box sx={{display:'flex',flexDirection:'row'}}>``
          <Box>
            <Text variant='h2' title='HTML5'></Text>
            <Text variant='h2' title='Javascript'></Text>
            <Text variant='h2' title='Tailwind'></Text>
          </Box>
          <Box>
            <Text variant='h2' title='CSS3'></Text>
            <Text variant='h2' title='Bootstrap'></Text>
            <Text variant='h2' title='React'></Text>
          </Box>
          </Box>
        </Grid>
        <Grid xs={11} md={5.5} sx={{marginX:'1rem',backgroundColor:'gray',marginBottom:'5rem',wordBreak:'break-all',py:'2rem',px:'1rem',borderRadius:'1rem'}}>
        <Text variant='h2' title='Back-end development'/>
        </Grid>
        </Grid>
        </Box>
    );
};

export default AboutSkill;