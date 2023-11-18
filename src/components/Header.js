import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="header">
      {
      <img src="/image/logo.png" alt="Logo da AutoMed" />
      }
      <h1>AutoMed</h1>
      {user && (
        <button onClick={handleLogout}>Logout</button>
      )}
      {}
    </header>
  );
};

export default Header;
