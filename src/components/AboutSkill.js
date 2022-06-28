import { Box, Grid } from '@mui/material';
import React from 'react';
import Text from '../customization/Text';
import {TiTick} from "react-icons/ti";

const AboutSkill = () => {
    return (
        <Box sx={{flexGrow: 1, backgroundColor:'#333333',paddingY:'3rem'}}>
            <Text variant='h2' title='What skill I have' style={{color:'white',marginBottom:'2rem'}}/>
        <Grid container justifyContent='center'>
        <Grid xs={11} md={5} sx={{marginX:'1rem',backgroundColor:'gray',marginBottom:'5rem',wordBreak:'break-all',py:'2rem',px:'1rem',borderRadius:'1rem'}}>
          <Text sx={{paddingBottom:'2rem',color:'blue'}} variant='h2' title='Front-End Development'/>
          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
          <Box>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',color:'#F5F5DC'}}><Text variant='h2' title={<TiTick/>}></Text><Text variant='h2' title='HTML5'></Text></Box>
          <Text style={{color:'#e6e6e6'}} variant='h3' title='Experienced'></Text>
          </Box>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',color:'#F5F5DC'}}><Text variant='h2' title={<TiTick/>}></Text><Text variant='h2' title='Javascript'></Text></Box>
          <Text style={{color:'#e6e6e6'}} variant='h3' title='Intermediate'></Text>
          </Box>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',color:'#F5F5DC'}}><Text variant='h2' title={<TiTick/>}></Text><Text variant='h2' title='Tailwind'></Text></Box>
          <Text style={{color:'#e6e6e6'}} variant='h3' title='Experienced'></Text>
          </Box>
          </Box>
          <Box>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',color:'#F5F5DC'}}><Text variant='h2' title={<TiTick/>}></Text><Text variant='h2' title='CSS3'></Text></Box>
          <Text style={{color:'#e6e6e6'}} variant='h3' title='Experienced'></Text>
          </Box>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',color:'#F5F5DC'}}><Text variant='h2' title={<TiTick/>}></Text><Text variant='h2' title='React'></Text></Box>
          <Text style={{color:'#e6e6e6'}} variant='h3' title='Experienced'></Text>
          </Box>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',color:'#F5F5DC'}}><Text variant='h2' title={<TiTick/>}></Text><Text variant='h2' title='Bootstrap'></Text></Box>
          <Text style={{color:'#e6e6e6'}} variant='h3' title='Experienced'></Text>
          </Box>
          </Box>
          </Box>
        </Grid>
        <Grid xs={11} md={5} sx={{marginX:'1rem',backgroundColor:'gray',marginBottom:'5rem',wordBreak:'break-all',py:'2rem',px:'1rem',borderRadius:'1rem'}}>
        <Text sx={{paddingBottom:'2rem',color:'blue'}} variant='h2' title='Back-End Development'/>
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
          <Box>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',color:'#F5F5DC'}}><Text variant='h2' title={<TiTick/>}></Text><Text variant='h2' title='Node JS'></Text></Box>
          <Text style={{color:'#e6e6e6'}} variant='h3' title='Intermediate'></Text>
          </Box>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',color:'#F5F5DC'}}><Text variant='h2' title={<TiTick/>}></Text><Text variant='h2' title='MongoDb'></Text></Box>
          <Text style={{color:'#e6e6e6'}} variant='h3' title='InterMediate'></Text>
          </Box>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',color:'#F5F5DC'}}><Text variant='h2' title={<TiTick/>}></Text><Text variant='h2' title='Heroku'></Text></Box>
          <Text style={{color:'#e6e6e6'}} variant='h3' title='Experienced'></Text>
          </Box>
          </Box>
          <Box>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',color:'#F5F5DC'}}><Text variant='h2' title={<TiTick/>}></Text><Text variant='h2' title='Express JS'></Text></Box>
          <Text style={{color:'#e6e6e6'}} variant='h3' title='Intermediate'></Text>
          </Box>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',color:'#F5F5DC'}}><Text variant='h2' title={<TiTick/>}></Text><Text variant='h2' title='Firebase'></Text></Box>
          <Text style={{color:'#e6e6e6'}} variant='h3' title='Experienced'></Text>
          </Box>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',color:'#F5F5DC'}}><Text variant='h2' title={<TiTick/>}></Text><Text variant='h2' title='Php'></Text></Box>
          <Text style={{color:'#e6e6e6'}} variant='h3' title='Basic'></Text>
          </Box>
          </Box>
          </Box>
        </Grid>
        </Grid>
        </Box>
    );
};

export default AboutSkill;