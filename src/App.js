import React, {Component} from 'react';

import LoanSubmission from './components/loanSubmission';
import LoanRepayment from './components/loanRepayment';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App ui grid container">
        <div className='eight wide column'>
          <LoanSubmission/>
        </div>
        <div className='eight wide column'>
          <LoanRepayment/>
        </div>
      </div>
    );
  }
}

export default App;
