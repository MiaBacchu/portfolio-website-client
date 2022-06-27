import React from 'react';
import { Box } from '@mui/system';
import HomeBanner from '../components/HomeBanner';
import HomeQuotation from '../components/HomeQuotation';

const Home = () => {
    return (
        <Box>
        <HomeBanner></HomeBanner>
        <HomeQuotation></HomeQuotation>
        </Box>
    );
};

export default Home;