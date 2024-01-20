import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import ResetPassword from './pages/reset-password/reset-password';
import VerifyOtp from './pages/verify-otp/verify-otp';
import styles from './app.module.css';
import React from 'react';

export const App = () => {
  return (
    <div className={styles['app']}>
      <MemoryRouter>
        <Routes>
          <Route path="/login" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
        </Routes>
      </MemoryRouter>
    </div>
  );
};

export default App;
