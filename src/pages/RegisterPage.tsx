import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { registerUser } from '../store/userSlice';
import Layout from '../components/Layout';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleRegister = () => {
    dispatch(registerUser({ username, email }));
    setUsername('');
    setEmail('');
  };

  return (
    <Layout>
      <Container maxWidth="sm">
        <Box mt={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Register
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleRegister}
            sx={{ mt: 2 }}
          >
            Register
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default RegisterPage;
