import React, { useRef } from 'react';
import { Box, Button, Input, TextareaAutosize} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import Image from 'mui-image';
import Text from '../customization/Text';
import backImage from '../utils/contact-image.png';
import { Fade } from 'react-reveal';


const ContactMessage = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jk4eqnq', 'template_b9vabdb', form.current, 'b7MuECxHZK6iG7jbJ')
          .then(() => {
            alert("Message Sent")
          }, () => {
            alert("Message Not Sent")
          });
          e.target.reset();
      };
    return (
        <Box>
            <Box sx={{height:'35rem',filter:'brightness(30%)'}}>
            <Image src={backImage}/>
            </Box>
            <Box sx={{position:'absolute',top:'5rem',left:'1%',right:'1%'}}>
            <Fade top>
            <Text variant='h1' title='Message Me' style={{color:'#4db5ff'}}/>
            </Fade>
            <form ref={form} onSubmit={sendEmail} style={{marginTop:'1rem',marginBottom:'1rem'}}>
        <Fade left>
        <Input sx={{width:'13rem',height:'3rem',backgroundColor:'#D1D7E2', borderRadius:'.5rem',paddingLeft:'.5rem'}} type='text' name='name' placeholder='Your Name' required/>
        </Fade>
        <br></br>
        <br></br>
        <Fade right>
        <Input sx={{width:'13rem',height:'3rem',backgroundColor:'#D1D7E2', borderRadius:'.5rem',paddingLeft:'.5rem'}} type='email' email='email' placeholder='Your Email' required/>
        </Fade>
        <br></br>
        <br></br>
        <Fade top>
        <TextareaAutosize
            name='message'
            minRows={6}
            placeholder="Your Message"
            style={{width:'13rem',backgroundColor:'#D1D7E2', borderRadius:'.5rem',paddingLeft:'.5rem',paddingTop:'.5rem'}}
            required
        />
        </Fade>
        <br></br>
        <br></br>
        <Fade bottom>
        <Button sx={{color:'#D1D7E2'}} type='submit' variant="contained" endIcon={<SendIcon />}><Text variant='h3' title='Send'></Text></Button>
        </Fade>
        </form>
        </Box>
        </Box>
    );
};

export default ContactMessage;