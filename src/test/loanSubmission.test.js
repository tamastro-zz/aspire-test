import React from 'react';
import LoanSubmission from '../components/loanSubmission';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('Loan Submission Component Test', () => {
  it('should match snapshot correctly', () => {
    const wrapper = render(<LoanSubmission />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Should Cannot Apply Loan Before Loan repaid', () => {
    const { getByText } = render(<LoanSubmission />);

    fireEvent.click(getByText('Apply'), { button: 1 });

    expect(getByText('Apply')).toHaveClass('disabled');
  });
});
