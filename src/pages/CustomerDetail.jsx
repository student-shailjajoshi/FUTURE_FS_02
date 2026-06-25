import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const customerData = {
  1: {
    name: 'Rahul Sharma', email: 'rahul@gmail.com', phone: '9876543210',
    notes: ['Interested in Product A', 'Follow up next week'],
  },
  2: {
    name: 'Priya Singh', email: 'priya@gmail.com', phone: '9123456780',
    notes: ['Wants demo', 'Budget approved'],
  },
};

function CustomerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const customer = customerData[id];

  if (!customer) return <div style={{ padding: '30px' }}>Customer not found.</div>;

  return (
    <div style={{ padding: '30px', background: '#f5f5f5', minHeight: '100vh' }}>
      <button onClick={() => navigate('/customers')}
        style={{ marginBottom: '20px', cursor: 'pointer', background: 'none',
          border: '1px solid #ccc', padding: '8px 16px', borderRadius: '8px' }}>
        ← Back
      </button>

      <div style={{
        background: 'white', padding: '30px',
        borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}>
        <h2 style={{ marginBottom: '20px' }}> Customer Detail</h2>
        <p><strong>Name:</strong> {customer.name}</p>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Phone:</strong> {customer.phone}</p>

        <h3 style={{ marginTop: '24px', marginBottom: '12px' }}>Notes</h3>
        {customer.notes.map((note, i) => (
          <div key={i} style={{
            padding: '10px 14px', background: '#f9f9f9',
            borderRadius: '8px', marginBottom: '8px', color: '#333',
          }}>
            • {note}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerDetail;