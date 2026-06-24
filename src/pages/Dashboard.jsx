import React from 'react';

function Dashboard() {
  const stats = [
    { label: 'Total Customers', value: 24, color: '#4CAF50' },
    { label: 'Total Leads', value: 10, color: '#2196F3' },
    { label: 'Total Deals', value: 6,color: '#FF9800' },
  ];

  const activities = [
    { day: 'Today', actions: ['✓ Added Customer', '✓ Updated Lead Status'] },
    { day: 'Yesterday', actions: ['✓ Created New Lead'] },
    { day: '2 Days Ago', actions: ['✓ Closed Deal', '✓ Added Notes'] },
  ];

  return (
    <div style={{ padding: '30px', background: '#f5f5f5', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '24px' }}>Dashboard</h2>

      {/* Stats Cards */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
        {stats.map((stat) => (
          <div key={stat.label} style={{
            background: 'white', padding: '24px', borderRadius: '12px',
            flex: 1, borderLeft: `5px solid ${stat.color}`,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}>
            <div style={{ fontSize: '32px' }}>{stat.icon}</div>
            <div style={{ fontSize: '28px', fontWeight: 'bold', color: stat.color }}>
              {stat.value}
            </div>
            <div style={{ color: '#666' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div style={{
        background: 'white', padding: '24px',
        borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}>
        <h3 style={{ marginBottom: '20px' }}>📋 Recent Activities</h3>
        {activities.map((item) => (
          <div key={item.day} style={{ marginBottom: '20px' }}>
            <div style={{
              fontWeight: 'bold', color: '#e94560',
              marginBottom: '8px', fontSize: '14px',
            }}>
              {item.day}
            </div>
            {item.actions.map((action) => (
              <div key={action} style={{
                padding: '8px 12px', background: '#f9f9f9',
                borderRadius: '6px', marginBottom: '6px', color: '#333',
              }}>
                {action}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;