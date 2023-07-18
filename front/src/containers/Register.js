import React from 'react';
import {Paper} from '@mui/material';

import RegisterForm from '../components/RegisterForm';

const paperStyle = {
  minHeight: 620,
  width: 490,
  height: '80vh',
  margin: '10vh auto',
};

const RegisterContainer = () => {
  return (
    <div>
      <Paper elevation={10} style={paperStyle}>
        <RegisterForm />
      </Paper>
    </div>
  );
};

export default RegisterContainer;