import React from 'react';
import { Box } from '@mui/system';
import HomeBanner from '../components/HomeBanner';
import HomeQuotation from '../components/HomeQuotation';
import HomeOffer from '../components/HomeOffer';

const Home = () => {
    return (
        <Box>
        <HomeBanner></HomeBanner>
        <HomeQuotation></HomeQuotation>
        <HomeOffer></HomeOffer>
        </Box>
    );
};

export default Home;