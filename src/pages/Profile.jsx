import React from 'react';

function Profile() {
  return (
    <div style={{ padding: '30px', background: '#f5f5f5', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '24px' }}>Profile</h2>

      <div style={{
        background: 'white', padding: '30px',
        borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        maxWidth: '400px',
      }}>
        <div style={{
          width: '80px', height: '80px', borderRadius: '50%',
          background: '#e94560', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '32px', marginBottom: '20px',
        }}>
          👤
        </div>
        <p><strong>Name:</strong> Admin User</p>
        <p><strong>Email:</strong> admin@minicrm.com</p>
        <p><strong>Role:</strong> Admin</p>
      </div>
    </div>
  );
}

export default Profile;