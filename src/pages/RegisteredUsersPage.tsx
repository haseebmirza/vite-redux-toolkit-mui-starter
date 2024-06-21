import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import Layout from '../components/Layout';

const RegisteredUsersPage = () => {
  const users = useSelector((state) => state.user.users);

  return (
    <Layout>
      <Container maxWidth="">
        <Box mt={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Registered Users
          </Typography>
          {users.length > 0 ? (
            <List>
              {users.map((user, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`${user.username} - ${user.email}`} />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography variant="body1">No registered users.</Typography>
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default RegisteredUsersPage;
