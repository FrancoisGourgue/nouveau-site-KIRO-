import React, {useContext} from 'react';
import {Route, Navigate} from 'react-router-dom';
import AuthContext from '../auth/AuthContext';

const PrivateRoute = ({children, userType, ...rest}) => {
  const {user} = Navigate(AuthContext);
  return (
    <Route {...rest}>
      {user && userType === user.role ? children : <Navigate to="/" />}
    </Route>
  );
};

export default PrivateRoute;