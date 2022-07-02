import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Text from '../customization/Text';
import image1 from "../utils/bike-center.jpg"
import image2 from "../utils/portfolio-website.png"
import image3 from "../utils/food-delivery.jpg"
import image4 from "../utils/general-hospital.jpg"
import image5 from "../utils/spoken-english.jpg"
import image6 from "../utils/arrange-concert.jpg"
import { Fade, Rotate } from 'react-reveal';

const ProjectsMine = () => {
    return (
        <Box sx={{flexGrow: 1, backgroundColor:'#242A35', paddingTop:'4rem',paddingBottom:'1rem'}}>
        <Text variant='h1' title="My Projects" style={{color:'white',marginBottom:'2rem'}}/>
        <Grid container justifyContent='center'>
        <Grid xs={11} md={5} lg={3.5} sx={{marginX:'1rem',backgroundColor:'#36448A',marginBottom:'5rem',wordBreak:'break-all',py:'1rem',px:'1rem',borderRadius:'1rem'}}>
        <Rotate bottom right> <img style ={{height:'15rem',width:'100%',borderRadius:'1rem'}} src={image1} alt="alternatetext"/>
        </Rotate>
        <Rotate bottom right><Text sx={{color:'rgb(77, 181, 255)', paddingY:'1rem'}} variant='h2' title='Bike Center'></Text>
        </Rotate>
          <Box sx={{color:'#D1D7E2',wordBreak:'break-word',minHeight:'15rem' ,
          textAlign:'start'}}><Fade bottom>
          <Text variant='h3' title='◉ This projects is created with react JS.'></Text>
          <Text variant='h3' title='◉ I used firebase authentication and depoyment on this projects.'></Text>
          <Text variant='h3' title='◉ Heroku is used as a server side deployment.'></Text>
          <Text variant='h3' title='◉ MongoDb is used as a database.'></Text>
          <Text variant='h3' title='◉ It is totally a mern stack project.'></Text>
          </Fade>
          </Box>
          <Fade top><Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginY:'1rem'}}>
          <Box sx={{margin:'.5rem'}}>
          <a href="https://github.com/MiaBacchu/bike-center-client" rel="noreferrer" target="_blank" style={{textDecoration:'none'}}>
        <Button sx={{color:'#D1D7E2'}} type='submit' variant="contained"><Text variant='h3' title='Github'></Text></Button>
        </a>
          </Box>
          <Box sx={{margin:'.5rem'}}>
          <a href="https://bike-center-4ba16.firebaseapp.com/" rel="noreferrer" target="_blank" style={{textDecoration:'none'}}>
        <Button sx={{color:'#D1D7E2'}} type='submit' variant="contained"><Text variant='h3' title='Live Demo'></Text></Button>
        </a>
          </Box>
          </Box>
          </Fade>
        </Grid>      
        <Grid xs={11} md={5} lg={3.5} sx={{marginX:'1rem',backgroundColor:'#36448A',marginBottom:'5rem',wordBreak:'break-all',py:'1rem',px:'1rem',borderRadius:'1rem'}}>
        <Rotate bottom right> <img style={{height:'15rem',width:'100%',borderRadius:'1rem'}} src={image2} alt="alternatetext"/> </Rotate>
        <Rotate top><Text sx={{color:'rgb(77, 181, 255)', paddingY:'1rem'}} variant='h2' title='Portfolio Website'></Text>
        </Rotate>
          <Box sx={{color:'#D1D7E2',wordBreak:'break-word',minHeight:'15rem' ,
          textAlign:'start'}}><Fade bottom>
          <Text variant='h3' title='◉ This is my portfolio website.'></Text>
          <Text variant='h3' title='◉ This portfolio is created with react JS.'></Text>
          <Text variant='h3' title='◉ I have used material UI for designing. '></Text>
          <Text variant='h3' title='◉ Firebase is used for authentication.'></Text>
          <Text variant='h3' title='◉ Node, Express, MongoDB are used as a back-end.'></Text>
          </Fade>
          </Box>
          <Fade top><Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginY:'1rem'}}>
          <Box sx={{margin:'.5rem'}}>
          <a href='https://github.com/MiaBacchu/portfolio-website-client' rel="noreferrer" target="_blank" style={{textDecoration:'none'}}>
        <Button sx={{color:'#D1D7E2'}} type='submit' variant="contained"><Text variant='h3' title='Github'></Text></Button>
        </a>
          </Box>
          <Box sx={{margin:'.5rem'}}>
          <a href="https://portfolio-website-727b2.web.app/" rel="noreferrer" target="_blank" style={{textDecoration:'none'}}>
        <Button sx={{color:'#D1D7E2'}} type='submit' variant="contained"><Text variant='h3' title='Live Demo'></Text></Button>
        </a>
          </Box>
          </Box>
          </Fade>
        </Grid>      
        <Grid xs={11} md={5} lg={3.5} sx={{marginX:'1rem',backgroundColor:'#36448A',marginBottom:'5rem',wordBreak:'break-all',py:'1rem',px:'1rem',borderRadius:'1rem'}}>
        <Rotate bottom right> <img style={{height:'15rem',width:'100%',borderRadius:'1rem'}} src={image3} alt="alternatetext"/> </Rotate>
        <Rotate top><Text sx={{color:'rgb(77, 181, 255)', paddingY:'1rem'}} variant='h2' title='Food Delivery'></Text>
        </Rotate>
          <Box sx={{color:'#D1D7E2',wordBreak:'break-word',minHeight:'15rem' ,
          textAlign:'start'}}><Fade bottom>
          <Text variant='h3' title='◉ This projects is created with react JS.'></Text>
          <Text variant='h3' title='◉ I used firebase authentication and depoyment on this projects.'></Text>
          <Text variant='h3' title='◉ Heroku is used as a server side deployment.'></Text>
          <Text variant='h3' title='◉ MongoDb is used as a database.'></Text>
          <Text variant='h3' title='◉ It is totally a mern stack project.'></Text>
          </Fade>
          </Box>
          <Fade top><Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginY:'1rem'}}>
          <Box sx={{margin:'.5rem'}}>
          <a href="https://github.com/MiaBacchu/food-delivery-client" rel="noreferrer" target='_blank' style={{textDecoration:'none'}}>
        <Button sx={{color:'#D1D7E2'}} type='submit' variant="contained"><Text variant='h3' title='Github'></Text></Button>
        </a>
          </Box>
          <Box sx={{margin:'.5rem'}}>
          <a href="https://food-delivery-73cb0.firebaseapp.com/" rel="noreferrer" target='_blank' style={{textDecoration:'none'}}>
        <Button sx={{color:'#D1D7E2'}} type='submit' variant="contained"><Text variant='h3' title='Live Demo'></Text></Button>
        </a>
          </Box>
          </Box>
          </Fade>
        </Grid>      
        <Grid xs={11} md={5} lg={3.5} sx={{marginX:'1rem',backgroundColor:'#36448A',marginBottom:'5rem',wordBreak:'break-all',py:'1rem',px:'1rem',borderRadius:'1rem'}}>
        <Rotate bottom right> <img style={{height:'15rem',width:'100%',borderRadius:'1rem'}} src={image4} alt="alternatetext"/> </Rotate>
        <Rotate top><Text sx={{color:'rgb(77, 181, 255)', paddingY:'1rem'}} variant='h2' title='General Hospital'></Text>
        </Rotate>
          <Box sx={{color:'#D1D7E2',wordBreak:'break-word',minHeight:'15rem' ,
          textAlign:'start'}}><Fade bottom>
          <Text variant='h3' title='◉ This is a demo website.'></Text>
          <Text variant='h3' title='◉ You can serve from our hospital.'></Text>
          <Text variant='h3' title='◉ This website is created by react JS.'></Text>
          <Text variant='h3' title='◉ I have used firebase authentication systems in this projects. '></Text>
          <Text variant='h3' title='◉ I have also used private route & context api.'></Text>
          </Fade>
          </Box>
          <Fade top><Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginY:'1rem'}}>
          <Box sx={{margin:'.5rem'}}>
          <a href="https://github.com/MiaBacchu/general-hospital" rel="noreferrer" target='_blank' style={{textDecoration:'none'}}>
        <Button sx={{color:'#D1D7E2'}} type='submit' variant="contained"><Text variant='h3' title='Github'></Text></Button>
        </a>
          </Box>
          <Box sx={{margin:'.5rem'}}>
          <a href="https://onion-authentication.firebaseapp.com/" rel="noreferrer" target='_blank' style={{textDecoration:'none'}}>
        <Button sx={{color:'#D1D7E2'}} type='submit' variant="contained"><Text variant='h3' title='Live Demo'></Text></Button>
        </a>
          </Box>
          </Box>
          </Fade>
        </Grid>      
        <Grid xs={11} md={5} lg={3.5} sx={{marginX:'1rem',backgroundColor:'#36448A',marginBottom:'5rem',wordBreak:'break-all',py:'1rem',px:'1rem',borderRadius:'1rem'}}>
        <Rotate bottom right> <img style={{height:'15rem',width:'100%',borderRadius:'1rem'}} src={image5} alt="alternatetext"/> </Rotate>
        <Rotate top><Text sx={{color:'rgb(77, 181, 255)', paddingY:'1rem'}} variant='h2' title='Spoken English'></Text>
        </Rotate>
          <Box sx={{color:'#D1D7E2',wordBreak:'break-word',minHeight:'15rem' ,
          textAlign:'start'}}><Fade bottom>
          <Text variant='h3' title='◉ This projects is created with react JS.'></Text>
          <Text variant='h3' title='◉ You can learn english from this course.'></Text>
          <Text variant='h3' title='◉ Here are proffesional teacher teach in this course. '></Text>
          <Text variant='h3' title='◉ In one month you will be fluent in english language.'></Text>
          <Text variant='h3' title='◉ It is totally a mern stack project.'></Text>
          </Fade>
          </Box>
          <Fade top><Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginY:'1rem'}}>
          <Box sx={{margin:'.5rem'}}>
          <a href='https://github.com/MiaBacchu/spoken-english' rel="noreferrer" target='_blank' style={{textDecoration:'none'}}>
        <Button sx={{color:'#D1D7E2'}} type='submit' variant="contained"><Text variant='h3' title='Github'></Text></Button>
        </a>
          </Box>
          <Box sx={{margin:'.5rem'}}>
          <a href='https://boring-babbage-8fb8c1.netlify.app/' rel="noreferrer" target='_blank' style={{textDecoration:'none'}}>
        <Button sx={{color:'#D1D7E2'}} type='submit' variant="contained"><Text variant='h3' title='Live Demo'></Text></Button>
        </a>
          </Box>
          </Box>
          </Fade>
        </Grid>      
        <Grid xs={11} md={5} lg={3.5} sx={{marginX:'1rem',backgroundColor:'#36448A',marginBottom:'5rem',wordBreak:'break-all',py:'1rem',px:'1rem',borderRadius:'1rem'}}>
        <Rotate bottom right> <img style={{height:'15rem',width:'100%',borderRadius:'1rem'}} src={image6} alt="alternatetext"/> </Rotate>
        <Rotate top><Text sx={{color:'rgb(77, 181, 255)', paddingY:'1rem'}} variant='h2' title='Arrange Concert'></Text>
        </Rotate>
          <Box sx={{color:'#D1D7E2',wordBreak:'break-word',minHeight:'15rem' ,
          textAlign:'start'}}><Fade bottom>
          <Text variant='h3' title='◉ You can hire singer from this website.'></Text>
          <Text variant='h3' title='◉ I used on this projects.'></Text>
          <Text variant='h3' title='◉ This was a beginning website with json file.'></Text>
          <Text variant='h3' title='◉ After click to add to card total ammount will be calculated.'></Text>
          <Text variant='h3' title='◉ This is not a real website.'></Text>
          </Fade>
          </Box>
          <Fade top><Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginY:'1rem'}}>
          <Box sx={{margin:'.5rem'}}>
          <a href='https://github.com/MiaBacchu/super-hero' rel="noreferrer" target='_blank' style={{textDecoration:'none'}}>
        <Button sx={{color:'#D1D7E2'}} type='submit' variant="contained"><Text variant='h3' title='Github'></Text></Button>
        </a>
          </Box>
          <Box sx={{margin:'.5rem'}}>
          <a href='https://sad-neumann-ccb91a.netlify.app/' rel="noreferrer" target='_blank' style={{textDecoration:'none'}}>
        <Button sx={{color:'#D1D7E2'}} type='submit' variant="contained"><Text variant='h3' title='Live Demo'></Text></Button>
        </a>
          </Box>
          </Box>
          </Fade>
        </Grid>      
        </Grid>
        </Box>
    );
};

export default ProjectsMine;