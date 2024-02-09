import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useUserContext } from './context/UserContext';

const AuthMiddleware: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (user === undefined) {
      navigate('/');
    }
  }, [user, navigate]);

  return user !== undefined ? <Outlet /> : null;
};

export default AuthMiddleware;