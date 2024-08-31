-- Users Table
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) CHECK (role IN ('Parent', 'Administrator', 'Non-Teaching Staff', 'Teacher')) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Savings Accounts Table
CREATE TABLE SavingsAccounts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(id) ON DELETE CASCADE,
    account_name VARCHAR(255) NOT NULL,
    balance DECIMAL(10, 2) NOT NULL,
    goal DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Transactions Table
CREATE TABLE Transactions (
    id SERIAL PRIMARY KEY,
    savings_account_id INTEGER REFERENCES SavingsAccounts(id) ON DELETE CASCADE,
    amount DECIMAL(10, 2) NOT NULL,
    transaction_type VARCHAR(50) CHECK (transaction_type IN ('Deposit', 'Withdrawal')) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Payments Table
CREATE TABLE Payments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(id) ON DELETE CASCADE,
    amount DECIMAL(10, 2) NOT NULL,
    payment_type VARCHAR(50) CHECK (payment_type IN ('School Fee', 'Trip', 'Books')) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Investments Table
CREATE TABLE Investments (
    id SERIAL PRIMARY KEY,
    investment_name VARCHAR(255) NOT NULL,
    investment_type VARCHAR(50) CHECK (investment_type IN ('Farming', 'Bakery', 'School Canteen')) NOT NULL,
    investment_amount DECIMAL(10, 2) NOT NULL,
    returns DECIMAL(10, 2),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Educational Resources Table
CREATE TABLE EducationalResources (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    resource_type VARCHAR(50) CHECK (resource_type IN ('Article', 'Video', 'Tool')) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Loan Applications Table
CREATE TABLE LoanApplications (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(id) ON DELETE CASCADE,
    loan_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) CHECK (status IN ('Pending', 'Approved', 'Rejected')) NOT NULL,
    application_date DATE NOT NULL,
    approval_date DATE
);

-- Repayments Table
CREATE TABLE Repayments (
    id SERIAL PRIMARY KEY,
    loan_application_id INTEGER REFERENCES LoanApplications(id) ON DELETE CASCADE,
    repayment_amount DECIMAL(10, 2) NOT NULL,
    repayment_date DATE NOT NULL
);
