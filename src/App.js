import React, {Component} from 'react';

import LoanSubmission from './components/loanSubmission';
import LoanRepayment from './components/loanRepayment';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loan: {},
      activeLoan: false
    }

    this.onLoanSubmission = this
      .onLoanSubmission
      .bind(this);
    this.onRepayClick = this
      .onRepayClick
      .bind(this);
  }

  async onLoanSubmission(loan) {
    const loanList = []

    for (let i = 0; i < loan.loanTerm * 4; i++) {
      loanList.push({id: i, loanAmount: loan.weeklyRepayment, repayStatus: false})
    }

    loan.loanList = loanList;
    await this.setState({loan: loan, activeLoan: true})
  }

  onRepayClick(id) {
    const state = {
      ...this.state
    };

    state.loan.loanList[id].repayStatus = true;
    this.setState(state);
  }

  render() {
    const {activeLoan, loan} = this.state
    return (
      <div className="App ui grid container">
        <div className='eight wide column'>
          <h2 className="ui block header">Loan Submission</h2>
          <LoanSubmission setActiveLoan={this.onLoanSubmission} activeLoan={activeLoan}/>
        </div>
        <div className='eight wide column'>
          <h2 className="ui block header">Loan Repayment</h2>
          <LoanRepayment
            loan={loan}
            activeLoan={activeLoan}
            onRepayClick={this.onRepayClick}/>
        </div>
      </div>
    );
  }
}

export default App;
