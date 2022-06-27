import React, { useRef } from 'react';
import { Box, Button, Input, TextareaAutosize} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import Image from 'mui-image';
import Text from '../customization/Text';


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
            <Image src="https://i.ibb.co/zRgkFkF/20220314-174208-1.jpg"/>
            </Box>
            <Box sx={{position:'absolute',top:'5rem',left:'1%',right:'1%'}}>
            <Text variant='h1' title='Message Me' style={{color:'#4db5ff'}}/>
            <form ref={form} onSubmit={sendEmail} style={{marginTop:'1rem',marginBottom:'1rem'}}>
        <Input sx={{width:'13rem',height:'3rem',backgroundColor:'whitesmoke', borderRadius:'.5rem',paddingLeft:'.5rem'}} type='text' name='name' placeholder='Your Name' required/>
        <br></br>
        <br></br>
        <Input sx={{width:'13rem',height:'3rem',backgroundColor:'whitesmoke', borderRadius:'.5rem',paddingLeft:'.5rem'}} type='email' email='email' placeholder='Your Email' required/>
        <br></br>
        <br></br>
        <TextareaAutosize
            name='message'
            minRows={6}
            placeholder="Your Message"
            style={{width:'13rem',backgroundColor:'whitesmoke', borderRadius:'.5rem',paddingLeft:'.5rem',paddingTop:'.5rem'}}
            required
        />
        <br></br>
        <br></br>
        <Button type='submit' variant="contained" endIcon={<SendIcon />}><Text variant='h3' title='Send'></Text></Button>
        </form>
        </Box>
        </Box>
    );
};

export default ContactMessage;