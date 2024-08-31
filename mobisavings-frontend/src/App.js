import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import PaymentPortal from './components/PaymentPortal';
import InvestmentDashboard from './components/InvestmentDashboard';
import EducationalResources from './components/EducationalResources';
import SavingsPage from './pages/SavingsPage';
import PaymentsPage from './pages/PaymentsPage';
import InvestmentsPage from './pages/InvestmentsPage';
import EducationPage from './pages/EducationPage';
import AdminDashboard from './pages/AdminDashboard';
import LoanPage from './pages/LoanPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payment-portal" element={<PaymentPortal />} />
          <Route path="/investment-dashboard" element={<InvestmentDashboard />} />
          <Route path="/educational-resources" element={<EducationalResources />} />
          <Route path="/savings" element={<SavingsPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/investments" element={<InvestmentsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/loan" element={<LoanPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
