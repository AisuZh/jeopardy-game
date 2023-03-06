import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = ({ children, ...rest }) => {
  let auth = { token: true }; 
  const userName = useSelector((state) => state.statistic.userName, shallowEqual);

  return auth.token && userName ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ nameEntered: true }} />
  );
};

export default PrivateRoutes;
