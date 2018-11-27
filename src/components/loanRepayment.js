import React from 'react';
import formatter from '../utils/formatter';
import Moment from 'moment';

const LoanRepayment = (props) => {
  return (
    <div>
      {props.activeLoan === true
        ? <table className="ui celled table">
            <thead>
              <tr>
                <th>Loan</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Repayment</th>
              </tr>
            </thead>
            <tbody>
              {props
                .loan
                .loanList
                .map(loan => {
                  return (
                    <tr
                      key={loan.id}
                      className={loan.repayStatus === true
                      ? 'positive'
                      : ''}>
                      <td>Week {loan.id + 1}
                        - {Moment()
                          .add(loan.id + 1, 'w')
                          .format("DD MMM YYYY")}
                      </td>
                      <td>
                        {formatter.format(loan.loanAmount)}
                      </td>
                      <td>
                        {loan.repayStatus === true
                          ? 'Repaid'
                          : 'Unpaid'}
                      </td>
                      <td>
                        {loan.repayStatus === false
                          ? <div
                              className="ui small positive button"
                              onClick={() => props.onRepayClick(loan.id)}>
                              Repay
                            </div>
                          : <div className="ui small disabled button">
                            Repay
                          </div>}
                      </td>
                    </tr>
                  )
                })
}
            </tbody>
          </table>
        : <h3 className="ui header">You Dont Have A Loan</h3>}
    </div>
  )
}

export default LoanRepayment
