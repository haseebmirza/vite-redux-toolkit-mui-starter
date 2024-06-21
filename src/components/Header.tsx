import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
 

 
  return (
    <>
      <AppBar position="static" style={{ minWidth: '100vw', background: 'green' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            Redux
          </Typography>
         
          <div style={{  }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/register">Register</Button>
            <Button color="inherit" component={Link} to="/users">Users</Button>
          </div>

        </Toolbar>
      </AppBar>
     
     
    </>
  );
};

export default Header;
