import { Box } from '@mui/material';
import React from 'react';
import AboutHeader from '../components/AboutHeader';
import AboutSkill from '../components/AboutSkill';

const About = () => {
    return (
        <Box>
            <AboutHeader/>
            <AboutSkill/>
        </Box>
    );
};

export default About;