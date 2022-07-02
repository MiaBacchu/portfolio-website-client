import React from 'react';
import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Text from '../customization/Text';
import { SiGmail } from 'react-icons/si';
import { BsMessenger } from 'react-icons/bs';
import { FaWhatsappSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { Fade } from 'react-reveal';

const ContactSocial = () => {
    return (
        <Box sx={{flexGrow: 1, backgroundColor:'#242A35',paddingBottom:'5rem'}}>
        <Text variant='h1' title="Lets's Talk to Me" style={{color:'white',paddingTop:'3rem',marginBottom:'2rem'}}/>
        <Grid container justifyContent='center' spacing={2}>
        <Grid xs={10} md={5} sx={{marginX:'1rem',backgroundColor:'#36448A',marginBottom:'5rem',wordBreak:'break-all',py:'2rem',px:'1rem',borderRadius:'1rem'}}>
            <Fade top>
            <SiGmail style={{pb:'.5rem',color:'#D1D7E2',fontSize:'4rem'}}/>
            </Fade>
          <Fade left><Text sx={{pb:'1rem',color:'#D1D7E2'}} variant='h1' title='Email'></Text>
          </Fade>
          <Fade right><Text sx={{pb:'1rem',color:'#D1D7E2'}} variant='h2' title='jewelranabacchu@gmail.com'></Text>
          </Fade>
          <Fade bottom> <Button type='submit' variant="contained">
          <a style={{textDecoration:'none',color:'#D1D7E2'}} rel="noreferrer" target='_blank' href="mailto:jewelranabacchu@gmail.com"><Text variant='h3' title='Send a Mail'></Text></a>
          </Button></Fade>
        </Grid>
        <Grid xs={10} md={5} sx={{marginX:'1rem',backgroundColor:'#36448A',marginBottom:'5rem',wordBreak:'break-all',py:'2rem',px:'1rem',borderRadius:'1rem'}}>
            <Fade top>
            <BsMessenger style={{pb:'.5rem',color:'#D1D7E2',fontSize:'4rem'}}/>
            </Fade>
          <Fade left><Text sx={{pb:'1rem',color:'#D1D7E2'}} variant='h1' title='Messenger'></Text>
          </Fade>
          <Fade right><Text sx={{pb:'1rem',color:'#D1D7E2'}} variant='h2' title='Mia Bacchu'></Text>
          </Fade>
          <Fade bottom> <Button type='submit' variant="contained">
          <a style={{textDecoration:'none',color:'#D1D7E2'}} rel="noreferrer" target='_blank' href="https://m.me/jewelranabacchu015/"><Text variant='h3' title='Send a Message'></Text></a>
          </Button></Fade>
        </Grid>
        <Grid xs={10} md={5} sx={{marginX:'1rem',backgroundColor:'#36448A', marginBottom:'5rem', wordBreak:'break-all',py:'2rem',px:'1rem',borderRadius:'1rem'}}>
            <Fade top>
            <FaWhatsappSquare style={{pb:'.5rem',color:'#D1D7E2',fontSize:'4rem'}}/>
            </Fade>
          <Fade left><Text sx={{pb:'1rem',color:'#D1D7E2'}} variant='h1' title="WhatsApp"></Text>
          </Fade>
          <Fade right><Text sx={{pb:'1rem',color:'#D1D7E2'}} variant='h2' title='Mia Bacchu'></Text>
          </Fade>
          <Fade bottom> <Button type='submit' variant="contained">
          <a style={{textDecoration:'none',color:'#D1D7E2'}} rel="noreferrer" target='_blank' href="https://wa.me/+8801855878684"><Text variant='h3' title='Send a Message'></Text></a>
          </Button></Fade>
        </Grid>
        <Grid xs={10} md={5} sx={{marginX:'1rem',backgroundColor:'#36448A', marginBottom:'5rem', wordBreak:'break-all',py:'2rem',px:'1rem',borderRadius:'1rem'}}>
            <Fade top>
            <AiFillLinkedin style={{pb:'.5rem',color:'#D1D7E2',fontSize:'4rem'}}/>
            </Fade>
          <Fade left><Text sx={{pb:'1rem',color:'#D1D7E2'}} variant='h1' title="LinkedIn"></Text>
          </Fade>
          <Fade right><Text sx={{pb:'1rem',color:'#D1D7E2'}} variant='h2' title='Mia Bacchu'></Text>
          </Fade>
          <Fade bottom> <Button type='submit' variant="contained">
          <a style={{textDecoration:'none',color:'#D1D7E2'}} rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/mia-bacchu-696903216/"><Text variant='h3' title='Send a Message'></Text></a>
          </Button></Fade>
        </Grid>
        </Grid>
        </Box>
    );
};

export default ContactSocial;