import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import { GoProject } from 'react-icons/go';
import { SiKnowledgebase } from 'react-icons/si';
import Text from '../customization/Text';
import introImage from '../utils/intro.png';
import Image from 'mui-image';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

const AboutHeader = () => {
    return (
        <Box sx={{flexGrow: 1, backgroundColor:'#242A35', paddingTop:'2rem',paddingBottom:'1rem'}}>
            <Fade left>
            <Text variant='h3' title='Get to Know' sx={{color:'#D1D7E2',paddingTop:'3rem'}}/>
            </Fade>
        <Fade right>
        <Text variant='h1' title="About Me" sx={{color:'white',marginBottom:'2rem'}}/>
        </Fade>
        <Grid container justifyContent='center'>
            <Grid xs={11} md={5} sx={{marginX:'1rem', marginBottom:'5rem'}}>
        <Fade bottom>
        <Image style={{borderRadius:'1rem'}} src={introImage}></Image>
        </Fade>
        </Grid>
        <Grid xs={11} md={5} sx={{marginX:'1rem', marginBottom:'5rem', wordBreak:'break-words',py:'1rem',px:'1rem'}}>
          <Fade top>
          <Text sx={{color:'rgb(77, 181, 255)'}} variant='h2' title="Hi, I'm Mia Bacchu"/>
          </Fade>
          <Fade bottom>
          <Text sx={{color:'white',marginBottom:'1rem'}} variant='h3' title="A Professional Front-End Developer"/>
          </Fade>
          <Fade right>
          <Text sx={{color:'#D1D7E2',marginBottom:'1rem'}} variant='h3' title="I am very passionate and always ready to learn and improve myself. Love to solve complicated problems and do something different. I want to take web development to a professional level in my life."/>
          </Fade>
          <Fade left>
          <Text sx={{color:'#e6e6e6',paddingBottom:'3rem'}} variant='h3' title="I enjoy developing the website with react JS. I am good at Html, Css, and Javascript. Some framework like Bootstrap, Tailwind, or Material UI makes my work easier."/>
          </Fade>
          <Link to="/CONTACT" style={{textDecoration:'none'}}>
        <Fade bottom>
        <Button sx={{color:'#D1D7E2'}} type='submit' variant="contained"><Text variant='h3' title='Contact Me'></Text></Button>
        </Fade>
        </Link>
        </Grid>
        <Grid xs={11} md={5} sx={{marginX:'1rem',backgroundColor:'#36448A',color:'#D1D7E2',marginBottom:'5rem',wordBreak:'break-all',py:'2rem',px:'1rem',borderRadius:'1rem'}}>
            <Fade left>
            <SiKnowledgebase style={{pb:'.5rem',fontSize:'4rem'}}/>
          <Text sx={{pb:'1rem'}} variant='h1' title='Experience'></Text>
          <Text sx={{pb:'1rem'}} variant='h2' title='1+ Years'></Text>
          <Text sx={{pb:'1rem'}} variant='h2' title='Working'></Text>
            </Fade>
        </Grid>
        <Grid xs={11} md={5} sx={{marginX:'1rem',backgroundColor:'#36448A',color:'#D1D7E2',marginBottom:'5rem',wordBreak:'break-all',py:'2rem',px:'1rem',borderRadius:'1rem'}}>
            <Fade right>
            <GoProject style={{pb:'.5rem',fontSize:'4rem'}}/>
          <Text sx={{pb:'1rem'}} variant='h1' title='Projects'></Text>
          <Text sx={{pb:'1rem',color:'whitesmoke'}} variant='h2' title='30+'></Text>
          <Text sx={{pb:'1rem'}} variant='h2' title='Projects'></Text>
            </Fade>
        </Grid>
        </Grid>
        </Box>
    );
};

export default AboutHeader;