// Define the base URL for the API
const BASE_URL = 'http://localhost:8000/api'; // Update with your backend base URL

// User Management
export const REGISTER_URL = `${BASE_URL}/register`;
export const LOGIN_URL = `${BASE_URL}/login`;
export const PROFILE_URL = `${BASE_URL}/profile`; // For user profile data

// Savings Accounts
export const SAVINGS_URL = `${BASE_URL}/savings`;
export const SAVINGS_GOALS_URL = `${BASE_URL}/savings/goals`;

// School Fee Payments
export const FEE_PAYMENTS_URL = `${BASE_URL}/payments`;
export const FEE_REMINDERS_URL = `${BASE_URL}/payments/reminders`; // If applicable

// Investment Opportunities
export const INVESTMENTS_URL = `${BASE_URL}/investments`;

// Financial Education
export const EDUCATIONAL_RESOURCES_URL = `${BASE_URL}/education`;

// Loan Management
export const LOAN_APPLICATION_URL = `${BASE_URL}/loans/apply`;
export const LOAN_STATUS_URL = `${BASE_URL}/loans/status`; // For checking loan status
export const LOAN_REPAYMENTS_URL = `${BASE_URL}/loans/repayments`; // For tracking repayments

// Admin Management
export const ADMIN_FEES_URL = `${BASE_URL}/admin/fees`; // For fee management
export const ADMIN_USERS_URL = `${BASE_URL}/admin/users`; // For user management

// Export all URLs
export default {
  REGISTER_URL,
  LOGIN_URL,
  PROFILE_URL,
  SAVINGS_URL,
  SAVINGS_GOALS_URL,
  FEE_PAYMENTS_URL,
  FEE_REMINDERS_URL,
  INVESTMENTS_URL,
  EDUCATIONAL_RESOURCES_URL,
  LOAN_APPLICATION_URL,
  LOAN_STATUS_URL,
  LOAN_REPAYMENTS_URL,
  ADMIN_FEES_URL,
  ADMIN_USERS_URL
};
