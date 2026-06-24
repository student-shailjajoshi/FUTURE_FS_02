import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import CustomerDetail from './pages/CustomerDetail';
import Leads from './pages/Leads';
import Activities from './pages/Activities';
import Profile from './pages/Profile';

import Sidebar from './components/Sidebar';

function Layout({ children }) {
  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: '290px',
          minHeight: '100vh',
        }}
      >
        {children}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        {/* Customers */}
        <Route
          path="/customers"
          element={
            <Layout>
              <Customers />
            </Layout>
          }
        />

        {/* Customer Detail */}
        <Route
          path="/customers/:id"
          element={
            <Layout>
              <CustomerDetail />
            </Layout>
          }
        />

        {/* Leads */}
        <Route
          path="/leads"
          element={
            <Layout>
              <Leads />
            </Layout>
          }
        />

        {/* Activities */}
        <Route
          path="/activities"
          element={
            <Layout>
              <Activities />
            </Layout>
          }
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;