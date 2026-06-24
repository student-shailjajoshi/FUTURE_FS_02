import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleLogin = () => {
    localStorage.setItem('token', 'dummy-token');
    navigate('/dashboard');
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
        <h2 style={{ marginBottom: '24px', textAlign: 'center' }}>Login</h2>

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
        <button onClick={handleLogin} style={btnStyle}>Login</button>

        <p style={{ textAlign: 'center', marginTop: '16px' }}>
          Don't have an account?{' '}
          <span onClick={() => navigate('/signup')}
            style={{ color: '#e94560', cursor: 'pointer' }}>
            Sign Up
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

export default Login;