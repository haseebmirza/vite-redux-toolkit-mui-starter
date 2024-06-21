import React from 'react';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Welcome to Redux Toolkit Demo Project
      </Typography>
      <Typography variant="body1">
        Register user and show registered users
      </Typography>
    </Layout>
  );
};

export default HomePage;
