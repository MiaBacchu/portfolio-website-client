import { Box, Button } from '@mui/material';
import React from 'react';
import { Fade } from 'react-reveal';
import Text from '../customization/Text';

const Blogs = () => {
    const playGame = ()=>{
        window.open('https://glittering-mandazi-c390cc.netlify.app', '_blank');
    }
    return (
        <Box sx={{height:'40rem', paddingTop:'10rem',backgroundColor:'#36448A'}}>

            <Fade top>
            <Button onClick={playGame} >
            <Text style={{backgroundColor:'#1da1f2',color:'white',padding:'.5rem'}} variant="h1" title="Check My Game">
            </Text>
            </Button>
            </Fade>

            <Fade bottom>
            <Text sx={{color:'#D1D7E2'}} style={{paddingTop:'10rem', paddingBottom:'10rem', color:'white'}} variant="h1" title="Blogs are Coming Soon"></Text>
            </Fade>   
        </Box>
    );
};

export default Blogs;