import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialCustomers = [
  { id: 1, name: 'Rahul Sharma', email: 'rahul@gmail.com', phone: '9876543210' },
  { id: 2, name: 'Priya Singh', email: 'priya@gmail.com', phone: '9123456780' },
];

function Customers() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState(initialCustomers);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [editId, setEditId] = useState(null);

  const filtered = customers.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    if (editId !== null) {
      setCustomers(customers.map(c => c.id === editId ? { ...c, ...form } : c));
      setEditId(null);
    } else {
      setCustomers([...customers, { id: Date.now(), ...form }]);
    }
    setForm({ name: '', email: '', phone: '' });
    setShowForm(false);
  };

  const handleEdit = (c) => {
    setForm({ name: c.name, email: c.email, phone: c.phone });
    setEditId(c.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setCustomers(customers.filter(c => c.id !== id));
  };

  return (
    <div style={{ padding: '30px', background: '#f5f5f5', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '24px' }}>Customers</h2>

      {/* Search + Add */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <input
          placeholder="🔍 Search customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ ...inputStyle, flex: 1 }}
        />
        <button onClick={() => setShowForm(!showForm)} style={btnStyle}>
          + Add Customer
        </button>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div style={{
          background: 'white', padding: '24px',
          borderRadius: '12px', marginBottom: '24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
          <h3>{editId ? 'Edit Customer' : 'Add Customer'}</h3>
          <input placeholder="Name" value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={inputStyle} />
          <input placeholder="Email" value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={inputStyle} />
          <input placeholder="Phone" value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            style={inputStyle} />
          <button onClick={handleAdd} style={btnStyle}>
            {editId ? 'Update' : 'Save'}
          </button>
        </div>
      )}

      {/* Customer List */}
      {filtered.map((c) => (
        <div key={c.id} style={{
          background: 'white', padding: '16px 24px',
          borderRadius: '12px', marginBottom: '12px',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
          <div onClick={() => navigate(`/customers/${c.id}`)}
            style={{ cursor: 'pointer' }}>
            <div style={{ fontWeight: 'bold', fontSize: '16px' }}>{c.name}</div>
            <div style={{ color: '#666', fontSize: '14px' }}>{c.email}</div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => handleEdit(c)}
              style={{ ...btnStyle, background: '#2196F3', padding: '8px 16px' }}>
              Edit
            </button>
            <button onClick={() => handleDelete(c.id)}
              style={{ ...btnStyle, background: '#f44336', padding: '8px 16px' }}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const inputStyle = {
  width: '100%', padding: '12px', marginBottom: '12px',
  borderRadius: '8px', border: '1px solid #ddd',
  fontSize: '14px', boxSizing: 'border-box',
};
const btnStyle = {
  padding: '12px 20px', background: '#e94560',
  color: 'white', border: 'none', borderRadius: '8px',
  fontSize: '14px', cursor: 'pointer',
};

export default Customers;