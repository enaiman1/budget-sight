import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PlaidLinkButton from "react-plaid-link-button";
import {
  getTransactions,
  addAccount,
  deleteAccount,
} from "../../Redux/actions/accountActions";
import { logoutUser } from "../../Redux/actions/authActions";
import MaterialTable from "material-table";
import "./Dashboard.scss";

class Accounts extends Component {
  componentDidMount() {
    const { accounts } = this.props;
    this.props.getTransactions(accounts);
  }
  // Add account
  handleOnSuccess = (token, metadata) => {
    const { accounts } = this.props;
    const plaidData = {
      public_token: token,
      metadata: metadata,
      accounts: accounts,
    };
    this.props.addAccount(plaidData);
  };

  // Delete account
  onDeleteClick = (id) => {
    const { accounts } = this.props;
    const accountData = {
      id: id,
      accounts: accounts,
    };
    this.props.deleteAccount(accountData);
  };
  // Logout
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user, accounts } = this.props;
    const { transactions, transactionsLoading } = this.props.plaid;
    console.log(this.props.plaid);
    let accountItems = accounts.map((account) => (
      <li key={account._id} style={{ marginTop: "1rem" }}>
        <button
          style={{ marginRight: "1rem" }}
          onClick={this.onDeleteClick.bind(this, account._id)}
          className="btn btn-small btn-floating waves-effect waves-light hoverable red accent-3"
        >
          <i className="material-icons">delete</i>
        </button>
        <b>{account.institutionName}</b>
      </li>
    ));
    // Setting up data table
    const transactionsColumns = [
      { title: "Account", field: "account" },
      { title: "Date", field: "date", type: "date", defaultSort: "desc" },
      { title: "Name", field: "name" },
      { title: "Amount", field: "amount" },
      { title: "Category", field: "category" },
    ];
    let transactionsData = [];
    transactions.forEach(function (account) {
      account.transactions.forEach(function (transaction) {
        transactionsData.push({
          account: account.accountName,
          date: transaction.date,
          category: transaction.category[0],
          name: transaction.name,
          amount: transaction.amount,
        });
      });
    });
    return (
      <>
        {/* accounts header imager */}
        <div className="accounts"> </div>

        {/* welcome header */}
        <div className="row dashboard__title">
          {/* this is the button to log out */}
          <div className="col s6 ">
            <button
              onClick={this.onLogoutClick}
              className="btn-flat waves-effect register__back"
            >
              <i className="material-icons left">keyboard_backspace</i> Log Out
            </button>
          </div>
          {/* button to go to budget component */}
          <div className="col s6 right-align">
            <Link to="/budget">
              <button className="btn-flat waves-effect dashboard__toBudget">
                <i className="material-icons right">arrow_right_alt</i> Budget
                Tracking
              </button>
            </Link>
          </div>

          {/* welcome header */}
          <div className="col s12 center-align">
            <h4>
              <b>Welcome Back!</b>
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Hey there, {user.name.split(" ")[0]}
            </p>
          </div>
        </div>

        <div className="row dashboard__buttonBox">
          {/* for link box */}
          <div className="col l3">
            <div className="row">
              <div className="col s12">
                <h5>
                  <b>Linked Accounts</b>
                </h5>
              </div>
            </div>

            <div className="row">
              <p className="grey-text text-darken-1">
                Add or remove your bank accounts below
              </p>
              <ul>{accountItems}</ul>
            </div>

            {/* add account button */}
            <div className="row">
              <div className="col s12">
                <PlaidLinkButton
                  buttonProps={{
                    className:
                      "btn btn-large waves-effect waves-light hoverable landing__container__btn",
                  }}
                  plaidLinkProps={{
                    clientName: "Budget Sight",
                    key: "0898f7428b7c4723a6f447c9e8cdaf",
                    env: "sandbox",
                    product: ["transactions"],
                    onSuccess: this.handleOnSuccess,
                  }}
                  onScriptLoad={() => this.setState({ loaded: true })}
                >
                  Add Account
                </PlaidLinkButton>
              </div>
            </div>
          </div>

          {/* for transaction box */}
          <div className="col l9">
            <hr style={{ marginTop: "2rem", opacity: ".2" }} />
            <h5>
              <b>Transactions</b>
            </h5>
            {transactionsLoading ? (
              <p className="grey-text text-darken-1">
                Fetching transactions...
              </p>
            ) : (
              <>
                <p className="grey-text text-darken-1">
                  You have <b>{transactionsData.length}</b> transactions from
                  your
                  <b> {accounts.length}</b> linked
                  {accounts.length > 1 ? (
                    <span> accounts </span>
                  ) : (
                    <span> account </span>
                  )}
                  from the past 30 days
                </p>
                <MaterialTable
                  columns={transactionsColumns}
                  data={transactionsData}
                  title="Search Transactions"
                />
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
Accounts.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  getTransactions: PropTypes.func.isRequired,
  addAccount: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  accounts: PropTypes.array.isRequired,
  plaid: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  plaid: state.plaid,
});
export default connect(mapStateToProps, {
  logoutUser,
  getTransactions,
  addAccount,
  deleteAccount,
})(Accounts);
