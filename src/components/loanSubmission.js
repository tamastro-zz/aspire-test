import React, {Component} from 'react';
import formatter from '../utils/formatter';

class LoanSubmission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanAmounts: '1000',
      weeklyRepayment: 0,
      totalOutstanding: 0,
      loanTerm: 2
    }

    this.onAmountChange = this
      .onAmountChange
      .bind(this);
    this.handleDetailChange = this
      .handleDetailChange
      .bind(this);
    this.onTermChange = this
      .onTermChange
      .bind(this);
  }

  componentDidMount() {
    this.handleDetailChange()
  }

  async onTermChange(term) {
    await this.setState({loanTerm: term.target.value})
    await this.handleDetailChange()
  }

  async onAmountChange(amount) {
    const amounts = amount.target.value

    await this.setState({loanAmounts: amounts})
    await this.handleDetailChange()
  }

  handleDetailChange() {
    const amount = this.state.loanAmounts === ''
      ? '0'
      : this.state.loanAmounts
    const totalTerm = parseInt(this.state.loanTerm) * 150;
    const total = parseInt(amount) + totalTerm;
    const weekly = total / (this.state.loanTerm * 4);

    this.setState({totalOutstanding: total, weeklyRepayment: weekly})
  }

  render() {
    const {loanAmounts, weeklyRepayment, totalOutstanding, loanTerm} = this.state
    const {activeLoan} = this.props;

    const total = formatter.format(totalOutstanding)
    const monthly = formatter.format(weeklyRepayment)

    return (
      <div>
        <div className="row">
          <div className="ui form">
            <div className="field">
              <div className="two fields">
                <div className="field">
                  <label>Loan Amount</label>
                  <input
                    value={loanAmounts}
                    type="number"
                    name="amount"
                    placeholder="Amounts"
                    onChange={this.onAmountChange}/>
                </div>
                <div className="field">
                  <label>Loan Term</label>
                  <select onChange={this.onTermChange} value={loanTerm}>
                    <option value="1">1 Month</option>
                    <option value="2">2 Months</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="ui segment">
            <div className="ui two column very relaxed grid">
              <div className="column">
                Fees would start at S$150.00 per month
              </div>
              <div className="column">
                <p>This puts my weekly repayment at {monthly}</p>

                <p>and brings the total outstanding to {total}</p>
              </div>
            </div>
            <div className="ui vertical divider">
              So
            </div>
          </div>
        </div>
        <div className="ui hidden divider"></div>
        <div className="row">
          {activeLoan === false
            ? <button
                className="ui button"
                onClick={() => this.props.setActiveLoan(this.state)}>Apply</button>
            : <button className="ui disabled button">Apply</button>}
        </div>
      </div>
    );
  }
}

export default LoanSubmission