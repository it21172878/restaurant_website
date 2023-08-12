import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: 'center',
          p: 2,
          '& h4': {
            fontWeight: 'bold',
            my: 2,
            fontSize: '2rem',
          },
          '& p': {
            textAlign: 'justify',
          },
          '@media (max-width:600px)': {
            mt: 0,
            '& h4': {
              fontSize: '1.3rem',
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to my Restaurant</Typography>
        <p>
          Ad sunt elit nulla duis excepteur magna sunt elit irure nisi.
          Incididunt cillum mollit dolore tempor fugiat aute nisi id officia
          incididunt cupidatat aute. Nostrud occaecat occaecat enim voluptate ut
          nulla adipisicing proident officia elit sint. Elit minim ullamco
          officia veniam aliqua. Adipisicing occaecat Lorem ipsum labore aliqua
          ex culpa magna anim ex ea id Lorem.
        </p>
        <br />
        <p>
          Adipisicing ea officia irure exercitation quis sint officia ut aute
          irure. Est consectetur eiusmod minim non labore non labore dolore
          pariatur laborum magna. Elit fugiat nulla amet exercitation laborum
          sint magna ullamco voluptate adipisicing. Est anim non nostrud laborum
          laborum quis. Adipisicing cupidatat aliquip aute duis exercitation
          reprehenderit magna nulla non duis aliquip dolore Lorem. Do sit irure
          eiusmod fugiat sint nisi incididunt eu dolore laboris consectetur.
          Cillum aliqua ullamco tempor exercitation quis id proident deserunt
          minim Lorem non in eiusmod.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
