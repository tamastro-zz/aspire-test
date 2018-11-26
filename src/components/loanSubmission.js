import React from 'react';

const LoanSubmission = (props) => {
  return (
    <div>
      <h2 class="ui block header">Loan Submission</h2>
      <div className="row">
        <div className="ui form">
          <div className="field">
            <div className="two fields">
              <div className="field">
                <label>Loan Amount</label>
                <input type="number" name="shipping[first-name]" placeholder="Amounts"/>
              </div>
              <div className="field">
                <label>Loan Term</label>
                <select>
                  <option value="">Months</option>
                  <option value="0">1 Month</option>
                  <option value="1">2 Months</option>
                  <option value="2">3 Months</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="ui segment">
          <div class="ui two column very relaxed grid">
            <div class="column">
              Fees would start at S$150.00 per month
            </div>
            <div class="column">
              <p>This puts my monthly repayment at S$5,150.00</p>

              <p>and brings the total outstanding to S$10,300.00</p>
            </div>
          </div>
          <div class="ui vertical divider">
            So
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanSubmission