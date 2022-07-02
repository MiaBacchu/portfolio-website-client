import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Fade } from 'react-reveal';
import Text from '../customization/Text';

const HomeOffer = () => {
    return (
        <Box sx={{flexGrow: 1, backgroundColor:'#242A35', paddingTop:'2rem',paddingBottom:'1rem'}}>
        <Fade top>
        <Text variant='h1' title="What I offer" style={{color:'#F5F5DC',marginBottom:'2rem'}}/>
        </Fade>
        <Grid container justifyContent='center'>
        <Grid xs={11} md={5} lg={3} sx={{marginX:'1rem',backgroundColor:'#36448A',marginBottom:'5rem',wordBreak:'break-all',py:'2rem',px:'1rem',borderRadius:'1rem'}}>
          <Fade left>
          <Text sx={{color:'rgb(77, 181, 255)'}} variant='h2' title='Web'></Text>
          </Fade>
          <Fade right>
          <Text sx={{pb:'1rem',color:'rgb(77, 181, 255)'}} variant='h2' title='Development'></Text>
          </Fade>
          <Fade bottom>
          <Text sx={{pb:'1rem',color:'#D1D7E2',wordBreak:'break-word'}} variant='h3' title='Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.'></Text>
          </Fade>
        </Grid>
        <Grid xs={11} md={5} lg={3} sx={{marginX:'1rem',backgroundColor:'#36448A',marginBottom:'5rem',wordBreak:'break-all',py:'2rem',px:'1rem',borderRadius:'1rem'}}>
          <Fade top>
          <Text sx={{color:'rgb(77, 181, 255)'}} variant='h2' title='React'></Text>
          <Text sx={{pb:'1rem',color:'rgb(77, 181, 255)'}} variant='h2' title='Development'></Text>
          </Fade>
          <Fade bottom>
          <Text sx={{pb:'1rem',color:'#D1D7E2',wordBreak:'break-word'}} variant='h3' title='React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.'></Text>
          </Fade>
        </Grid>
        <Grid xs={11} md={5} lg={3} sx={{marginX:'1rem',backgroundColor:'#36448A',marginBottom:'5rem',wordBreak:'break-all',py:'2rem',px:'1rem',borderRadius:'1rem'}}>
          <Fade right>
          <Text sx={{pb:'1rem',color:'rgb(77, 181, 255)'}} variant='h2' title='Wordpress'></Text>
          </Fade>
          <Fade left>
          <Text sx={{pb:'1rem',color:'rgb(77, 181, 255)'}} variant='h2' title='Development'></Text>
          </Fade>
          <Fade bottom>
          <Text sx={{pb:'1rem',color:'#D1D7E2',wordBreak:'break-word'}} variant='h3' title='WordPress developers design and implement websites for companies using the WordPress creation tool. They are responsible for both front-end and back-end development, including the implementation of themes and plugins.'></Text>
          </Fade>
        </Grid>
        </Grid>
        </Box>
    );
};

export default HomeOffer;