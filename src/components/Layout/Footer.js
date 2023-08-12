import { Box, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box sx={{ textAlign: 'center', bgcolor: '#1A1A19', color: 'white', p: 3 }}>
      <Box
        sx={{
          my: 3,
          '& svg': {
            fontSize: '40px',
            cursor: 'pointer',
            mr: 2,
          },
        }}
      >
        <FacebookIcon />
        <YouTubeIcon />
        <GitHubIcon />
        <InstagramIcon />
      </Box>
      <Typography
        variant="h6"
        sx={{
          '@media(max-width:600px)': {
            fontSize: '1rem',
          },
        }}
      >
        All Right Received &copy;{' '}
        <span style={{ fontFamily: 'monospace', fontWeight: 700 }}>
          DILANKA
        </span>
      </Typography>
    </Box>
  );
};

export default Footer;
