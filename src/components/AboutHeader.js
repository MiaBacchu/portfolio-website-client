import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import { GoProject } from 'react-icons/go';
import { SiKnowledgebase } from 'react-icons/si';
import Text from '../customization/Text';
import Image from 'mui-image';
import { Link } from 'react-router-dom';

const AboutHeader = () => {
    return (
        <Box sx={{flexGrow: 1, backgroundColor:'gray', paddingTop:'2rem',paddingBottom:'1rem'}}>
            <Text variant='h3' title='Get to Know' style={{color:'white'}}/>
        <Text variant='h1' title="About Me" style={{color:'#F5F5DC',marginBottom:'2rem'}}/>
        <Grid container justifyContent='center'>
            <Grid xs={11} md={5} sx={{marginX:'1rem', marginBottom:'5rem'}}>
        <Image style={{borderRadius:'1rem'}} src='https://i.ibb.co/4WDDtMw/DSC-0027-1.jpg'></Image>
        </Grid>
        <Grid xs={11} md={5} sx={{marginX:'1rem', marginBottom:'5rem', wordBreak:'break-words',py:'1rem',px:'1rem'}}>
          <Text sx={{color:'#F5F5DC'}} variant='h2' title="Hi, I'm Mia Bacchu"/>
          <Text sx={{color:'#F5F5DC',marginBottom:'1rem'}} variant='h3' title="A Professional Front-End Developer"/>
          <Text sx={{color:'#e6e6e6',marginBottom:'1rem'}} variant='h3' title="I am very passionate and always ready to learn and improve myself. Love to solve complicated problems and do something different. I want to take web development to a professional level in my life."/>
          <Text sx={{color:'#e6e6e6',paddingBottom:'3rem'}} variant='h3' title="I enjoy developing the website with react JS. I am good at Html, Css, and Javascript. Some framework like Bootstrap, Tailwind, or Material UI makes my work easier."/>
          <Link to="/CONTACT" style={{textDecoration:'none'}}>
        <Button type='submit' variant="contained"><Text variant='h3' title='Contact Me'></Text></Button>
        </Link>
        </Grid>
        <Grid xs={11} md={5} sx={{marginX:'1rem',backgroundColor:'#8A2BE2',marginBottom:'5rem',wordBreak:'break-all',py:'2rem',px:'1rem',borderRadius:'1rem'}}>
            <SiKnowledgebase style={{pb:'.5rem',color:'whitesmoke',fontSize:'4rem'}}/>
          <Text sx={{pb:'1rem',color:'whitesmoke'}} variant='h1' title='Experience'></Text>
          <Text sx={{pb:'1rem',color:'whitesmoke'}} variant='h2' title='1+ Years'></Text>
          <Text sx={{pb:'1rem',color:'whitesmoke'}} variant='h2' title='Working'></Text>
        </Grid>
        <Grid xs={11} md={5} sx={{marginX:'1rem',backgroundColor:'#8A2BE2',marginBottom:'5rem',wordBreak:'break-all',py:'2rem',px:'1rem',borderRadius:'1rem'}}>
            <GoProject style={{pb:'.5rem',color:'whitesmoke',fontSize:'4rem'}}/>
          <Text sx={{pb:'1rem',color:'whitesmoke'}} variant='h1' title='Projects'></Text>
          <Text sx={{pb:'1rem',color:'whitesmoke'}} variant='h2' title='30+'></Text>
          <Text sx={{pb:'1rem',color:'whitesmoke'}} variant='h2' title='Projects'></Text>
        </Grid>
        </Grid>
        </Box>
    );
};

export default AboutHeader;