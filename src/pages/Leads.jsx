import React, { useState } from 'react';

const initialLeads = [
  { id: 1, name: 'Amit Verma', email: 'amit@gmail.com', status: 'New' },
  { id: 2, name: 'Sneha Patel', email: 'sneha@gmail.com', status: 'Contacted' },
];

function Leads() {
  const [leads, setLeads] = useState(initialLeads);

  const statusOptions = ['New', 'Contacted', 'Qualified', 'Closed'];

  const statusColors = {
    New: '#2196F3',
    Contacted: '#FF9800',
    Qualified: '#4CAF50',
    Closed: '#9E9E9E',
  };

  const handleStatusChange = (id, newStatus) => {
    setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
  };

  return (
    <div style={{ padding: '30px', background: '#f5f5f5', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '24px' }}>Leads</h2>

      {leads.map((lead) => (
        <div key={lead.id} style={{
          background: 'white', padding: '16px 24px',
          borderRadius: '12px', marginBottom: '12px',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '16px' }}>{lead.name}</div>
            <div style={{ color: '#666', fontSize: '14px' }}>{lead.email}</div>
          </div>

          <select
            value={lead.status}
            onChange={(e) => handleStatusChange(lead.id, e.target.value)}
            style={{
              padding: '8px 12px', borderRadius: '8px', border: 'none',
              background: statusColors[lead.status], color: 'white',
              fontSize: '14px', cursor: 'pointer',
            }}>
            {statusOptions.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

export default Leads;