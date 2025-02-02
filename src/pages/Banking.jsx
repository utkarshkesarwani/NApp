import React, { useState } from 'react';
import styles from './Banking.module.css'; // Import CSS Module

const Banking = () => {
  const [savingsAmount, setSavingsAmount] = useState('');
  const [insuranceType, setInsuranceType] = useState('crop');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');

  const handleSave = () => {
    if (!savingsAmount) {
      alert('Please enter an amount to save.');
      return;
    }
    alert(`₹${savingsAmount} saved successfully!`);
    setSavingsAmount('');
  };

  const handleApplyInsurance = () => {
    alert(`Applied for ${insuranceType} insurance. We will contact you shortly.`);
  };

  const handleApplyLoan = () => {
    if (!loanAmount || !loanPurpose) {
      alert('Please fill in all fields for the loan application.');
      return;
    }
    alert(`Applied for a loan of ₹${loanAmount} for ${loanPurpose}. We will contact you shortly.`);
    setLoanAmount('');
    setLoanPurpose('');
  };

  return (
    <div className={styles.bankingPage}>
      <div className={styles.content}>
        <h1>Simplified Banking & Risk Mitigation</h1>
        <p>Access micro-savings, low-cost loans, and insurance tailored for rural entrepreneurs.</p>

        {/* Micro-Savings Section */}
        <div className={styles.savingsSection}>
          <h3>Micro-Savings</h3>
          <label htmlFor="savingsAmount">Amount to Save (₹): </label>
          <input
            type="number"
            id="savingsAmount"
            value={savingsAmount}
            onChange={(e) => setSavingsAmount(e.target.value)}
            placeholder="Enter amount"
          />
          <button onClick={handleSave}>Save Now</button>
        </div>

        {/* Micro-Insurance Section */}
        <div className={styles.insuranceSection}>
          <h3>Apply for Micro-Insurance</h3>
          <label htmlFor="insuranceType">Insurance Type: </label>
          <select
            id="insuranceType"
            value={insuranceType}
            onChange={(e) => setInsuranceType(e.target.value)}
          >
            <option value="crop">Crop Insurance</option>
            <option value="livestock">Livestock Insurance</option>
            <option value="health">Health Insurance</option>
            <option value="asset">Asset Insurance</option>
          </select>
          <button onClick={handleApplyInsurance}>Apply for Insurance</button>
        </div>

        {/* Low-Cost Loans Section */}
        <div className={styles.loanSection}>
          <h3>Apply for Low-Cost Loans</h3>
          <label htmlFor="loanAmount">Loan Amount (₹): </label>
          <input
            type="number"
            id="loanAmount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Enter loan amount"
          />
          <label htmlFor="loanPurpose">Loan Purpose: </label>
          <input
            type="text"
            id="loanPurpose"
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Enter loan purpose"
          />
          <button onClick={handleApplyLoan}>Apply for Loan</button>
        </div>

        {/* Micro-Payment Integration Section */}
        <div className={styles.paymentSection}>
          <h3>Micro-Payment Integration</h3>
          <p>Securely integrate with mobile payment platforms for seamless transactions.</p>
          <button onClick={() => alert('Redirecting to payment platform...')}>
            Connect to Payment Platform
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>&copy; 2023 Narivitt. All rights reserved.</p>
        <p>Empowering rural entrepreneurs with innovative solutions.</p>
      </footer>
    </div>
  );
};

export default Banking;