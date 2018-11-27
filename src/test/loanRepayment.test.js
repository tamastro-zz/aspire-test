import React from 'react';
import LoanRepayment from '../components/loanRepayment';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

afterEach(cleanup);

const mockLoanData = {
  loan: {
    loanAmounts: '1000',
    weeklyRepayment: 162.5,
    totalOutstanding: 1300,
    loanTerm: 2,
    loanList: [
      { id: 0, loanAmount: 162.5, repayStatus: false },
      { id: 1, loanAmount: 162.5, repayStatus: false },
      { id: 2, loanAmount: 162.5, repayStatus: false },
      { id: 3, loanAmount: 162.5, repayStatus: false },
      { id: 4, loanAmount: 162.5, repayStatus: false },
      { id: 5, loanAmount: 162.5, repayStatus: false },
      { id: 6, loanAmount: 162.5, repayStatus: false },
      { id: 7, loanAmount: 162.5, repayStatus: false },
    ],
  },
  activeLoan: true,
};

describe('Loan Repayment Component Snapshot Test', () => {
  it('should match snapshot correctly', () => {
    const wrapper = render(<LoanRepayment />);

    expect(wrapper).toMatchSnapshot();
  });

    it('should render list of loan snapshot', () => {
      const wrapper = render(<LoanRepayment loan={mockLoanData.loan} activeLoan={mockLoanData.activeLoan} />);

      expect(wrapper).toMatchSnapshot();
    });
});
