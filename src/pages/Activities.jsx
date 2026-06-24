import React from 'react';

const activities = [
  {
    day: 'Today',
    actions: ['✓ Added Customer — Rahul Sharma', '✓ Updated Lead Status — Amit Verma'],
  },
  {
    day: 'Yesterday',
    actions: ['✓ Updated Lead Status — Sneha Patel'],
  },
  {
    day: '2 Days Ago',
    actions: ['✓ Created New Lead', '✓ Added Notes'],
  },
];

function Activities() {
  return (
    <div style={{ padding: '30px', background: '#f5f5f5', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '24px' }}>📋 Activity Timeline</h2>

      {activities.map((item) => (
        <div key={item.day} style={{ marginBottom: '28px' }}>
          <div style={{
            fontWeight: 'bold', color: '#e94560',
            fontSize: '15px', marginBottom: '10px',
          }}>
            {item.day}
          </div>
          {item.actions.map((action, i) => (
            <div key={i} style={{
              background: 'white', padding: '12px 16px',
              borderRadius: '10px', marginBottom: '8px',
              borderLeft: '4px solid #e94560',
              boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
              color: '#333',
            }}>
              {action}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Activities;