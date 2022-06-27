import React from 'react';
import { Box } from '@mui/material';
import ContactMessage from '../components/ContactMessage';
import ContactSocial from '../components/ContactSocial';

const Contact = () => {
  return (
    <Box>
      <ContactMessage/>
      <ContactSocial/>
    </Box>
  );
};

export default Contact;