import React from 'react';
import { connect } from 'react-redux';
import { getExpenses } from '../../actions/expenses';
import './Expenses.css';

class Expenses extends React.Component {

  componentDidMount(){
    this.props.getExpenses();
  }

  render(){
    return(
      <div className="transaction-container">
        <div className="transaction">
          <strong className="name">Description</strong>
          <strong className="amount">Amount</strong>
        </div>

        {this.props.expenses && this.props.expenses.map((expense, i) => 
        <div key={i} className="transaction">
          <p className="name">{expense.name}</p>
          <p className="amount">- ${expense.amount}</p>
        </div> )}
      </div>
    )
  }  
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses.data.transactions
  };
};

export default connect(mapStateToProps, { getExpenses })(Expenses);