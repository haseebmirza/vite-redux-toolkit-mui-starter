import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CounterPage from './pages/CounterPage';
import RegisterPage from './pages/RegisterPage';
import RegisteredUsersPage from './pages/RegisteredUsersPage';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/users" element={<RegisteredUsersPage />} />
    </Routes>
  );
};

export default AppRoutes;
