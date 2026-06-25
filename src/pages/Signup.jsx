import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSignup = () => {
    navigate('/');
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#1a1a2e',
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '12px',
        width: '360px',
      }}>
        <h2 style={{ marginBottom: '24px', textAlign: 'center' }}>Signup</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={inputStyle}
        />
        <button onClick={handleSignup} style={btnStyle}>Signup</button>

        <p style={{ textAlign: 'center', marginTop: '16px' }}>
          Already have an account?{' '}
          <span onClick={() => navigate('/')}
            style={{ color: '#e94560', cursor: 'pointer' }}>
            Log In
          </span>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%', padding: '12px', marginBottom: '16px',
  borderRadius: '8px', border: '1px solid #ddd',
  fontSize: '14px', boxSizing: 'border-box',
};
const btnStyle = {
  width: '100%', padding: '12px', background: '#e94560',
  color: 'white', border: 'none', borderRadius: '8px',
  fontSize: '16px', cursor: 'pointer',
};

export default Signup;