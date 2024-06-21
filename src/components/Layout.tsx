import React from 'react';
import { Container, Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
      <>
      <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
        <Container component="main" sx={{ mt: 2, mb: 2, flexGrow: 1 }}>
          {children}
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
