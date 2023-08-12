import React from 'react';
import Layout from '../components/Layout/Layout';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
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
        <Typography variant="h4">Contact My Restaurant</Typography>
        <p>
          Occaecat non et velit laborum tempor incididunt id eiusmod duis sint
          in cillum commodo. Amet consectetur occaecat reprehenderit culpa eu
          irure culpa Lorem ipsum quis excepteur proident eu. Fugiat commodo ad
          amet incididunt et et. Eiusmod duis in id aliquip. Ea esse non ipsum
          non mollit dolore consequat. Ullamco ea cupidatat quis ullamco
          consectetur reprehenderit laboris amet.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          mt: -10,
          width: '600px',
          ml: 2,
          '@media (max-width:600px)': {
            width: '300px',
            mt: 5,
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: 'black', color: 'white' }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon
                    sx={{
                      color: 'red',
                      pt: '1',
                    }}
                  />
                  1880-500-500 (callfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <AttachEmailIcon
                    sx={{
                      color: 'skyblue',
                      pt: '1',
                    }}
                  />
                  support@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon
                    sx={{
                      color: 'green',
                      pt: '1',
                    }}
                  />
                  123456789
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
