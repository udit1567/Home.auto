import React from 'react'
import Sidenav from './Sidenav'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from '../Components/Navbar';

export default function Add_device() {
  return (
    <>
    <Navbar/>
    <Box height={30} />
    <Box sx={{ display: 'flex' }}>
    <Sidenav />
    

    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <h1>Add Device</h1>
        <Typography paragraph>
          hello11
        </Typography>
        <Typography paragraph>
          hello111
        </Typography>
      </Box>


    </Box>

    </>
  );
}

