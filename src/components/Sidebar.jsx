import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard'},
    { name: 'Customers', path: '/customers',},
    { name: 'Leads', path: '/leads'},
    { name: 'Activities', path: '/activities'},
    { name: 'Profile', path: '/profile'},
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div
      style={{
        width: '250px',
        height: '100vh',
        backgroundColor: '#1a1a2e',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        position: 'fixed',
        top: 0,
        left: 0,
        boxSizing: 'border-box',
      }}
    >
      <h2
        style={{
          color: '#e94560',
          marginBottom: '40px',
        }}
      >
        Mini CRM
      </h2>

      {menuItems.map((item) => (
        <div
          key={item.path}
          onClick={() => navigate(item.path)}
          style={{
            padding: '12px 16px',
            marginBottom: '8px',
            borderRadius: '8px',
            cursor: 'pointer',
            backgroundColor:
              location.pathname === item.path ? '#e94560' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: '0.3s',
          }}
        >
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </div>
      ))}

      <div
        onClick={handleLogout}
        style={{
          marginTop: 'auto',
          padding: '12px 16px',
          borderRadius: '8px',
          cursor: 'pointer',
          color: '#e94560',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        🚪 Logout
      </div>
    </div>
  );
}

export default Sidebar;