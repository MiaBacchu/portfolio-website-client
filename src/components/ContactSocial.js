import React from 'react';
import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Text from '../customization/Text';
import { SiGmail } from 'react-icons/si';
import { BsMessenger } from 'react-icons/bs';
import { FaWhatsappSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

const ContactSocial = () => {
    return (
        <Box sx={{flexGrow: 1, backgroundColor:'#778899',paddingBottom:'5rem'}}>
        <Text variant='h1' title="Lets's Talk to Me" style={{color:'lime',paddingTop:'3rem',marginBottom:'2rem'}}/>
        <Grid container justifyContent='center' spacing={2}>
        <Grid xs={10} md={5} sx={{marginX:'1rem',backgroundColor:'#8A2BE2',marginBottom:'5rem',wordBreak:'break-all',py:'2rem',px:'1rem',borderRadius:'1rem'}}>
            <SiGmail style={{pb:'.5rem',color:'whitesmoke',fontSize:'4rem'}}/>
          <Text sx={{pb:'1rem',color:'whitesmoke'}} variant='h1' title='Email'></Text>
          <Text sx={{pb:'1rem',color:'whitesmoke'}} variant='h2' title='jewelranabacchu@gmail.com'></Text>
          <Button type='submit' variant="contained">
          <a style={{textDecoration:'none',color:'whitesmoke'}} rel="noreferrer" target='_blank' href="mailto:jewelranabacchu@gmail.com"><Text variant='h3' title='Send a Mail'></Text></a>
          </Button>
        </Grid>
        <Grid xs={10} md={5} sx={{marginX:'1rem',backgroundColor:'#8A2BE2',marginBottom:'5rem',wordBreak:'break-all',py:'2rem',px:'1rem',borderRadius:'1rem'}}>
            <BsMessenger style={{pb:'.5rem',color:'whitesmoke',fontSize:'4rem'}}/>
          <Text sx={{pb:'1rem',color:'whitesmoke'}} variant='h1' title='Messenger'></Text>
          <Text sx={{pb:'1rem',color:'whitesmoke'}} variant='h2' title='Mia Bacchu'></Text>
          <Button type='submit' variant="contained">
          <a style={{textDecoration:'none',color:'whitesmoke'}} rel="noreferrer" target='_blank' href="https://m.me/jewelranabacchu015/"><Text variant='h3' title='Send a Message'></Text></a>
          </Button>
        </Grid>
        <Grid xs={10} md={5} sx={{marginX:'1rem',backgroundColor:'#8A2BE2', marginBottom:'5rem', wordBreak:'break-all',py:'2rem',px:'1rem',borderRadius:'1rem'}}>
            <FaWhatsappSquare style={{pb:'.5rem',color:'whitesmoke',fontSize:'4rem'}}/>
          <Text sx={{pb:'1rem',color:'whitesmoke'}} variant='h1' title="WhatsApp"></Text>
          <Text sx={{pb:'1rem',color:'whitesmoke'}} variant='h2' title='Mia Bacchu'></Text>
          <Button type='submit' variant="contained">
          <a style={{textDecoration:'none',color:'whitesmoke'}} rel="noreferrer" target='_blank' href="https://wa.me/+8801855878684"><Text variant='h3' title='Send a Message'></Text></a>
          </Button>
        </Grid>
        <Grid xs={10} md={5} sx={{marginX:'1rem',backgroundColor:'#8A2BE2', marginBottom:'5rem', wordBreak:'break-all',py:'2rem',px:'1rem',borderRadius:'1rem'}}>
            <AiFillLinkedin style={{pb:'.5rem',color:'whitesmoke',fontSize:'4rem'}}/>
          <Text sx={{pb:'1rem',color:'whitesmoke'}} variant='h1' title="LinkedIn"></Text>
          <Text sx={{pb:'1rem',color:'whitesmoke'}} variant='h2' title='Mia Bacchu'></Text>
          <Button type='submit' variant="contained">
          <a style={{textDecoration:'none',color:'whitesmoke'}} rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/mia-bacchu-696903216/"><Text variant='h3' title='Send a Message'></Text></a>
          </Button>
        </Grid>
        </Grid>
        </Box>
    );
};

export default ContactSocial;