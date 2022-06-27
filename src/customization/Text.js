import { createTheme, ThemeProvider, Typography } from '@mui/material';
import React from 'react';

const theme = createTheme();

theme.typography.h1 = {
  fontSize: '1.5rem',
  '@media (min-width:600px)': {
    fontSize: '1.8rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.6rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3rem',
  },
};
theme.typography.h2 = {
    fontSize: '1rem',
    '@media (min-width:600px)': {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.6rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.8rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2rem',
    },
  };
theme.typography.h3 = {
    fontSize: '.8rem',
    '@media (min-width:600px)': {
      fontSize: '.9rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.2rem',
    },
  };
const Text = ( {variant,title,sx,style} ) => {
    return (
        <ThemeProvider theme={theme}>
        <Typography style={style} sx={sx} variant={variant}>
            {title}
        </Typography>
        </ThemeProvider>
    );
};

export default Text;