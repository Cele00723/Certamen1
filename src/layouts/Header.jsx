import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
  return (
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Anillo Único
          </Typography>
          <Typography variant="h5" component="div" sx={{textAlign: "right", flexGrow: 1 }}>
            "Uno para dominarlos a todos"
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
