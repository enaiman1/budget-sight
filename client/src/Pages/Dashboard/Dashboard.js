import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { logoutUser } from "../../Redux/actions/authActions";
import { getAccounts, addAccount } from "../../Redux/actions/accountActions";
import PropTypes from "prop-types";

// components
import PlaidLinkButton from "react-plaid-link-button";
import Accounts from "./Accounts";
import Spinner from "../Spinner.js";
import "./Dashboard.scss";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getAccounts();
  }
  // Logout
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  // Add account
  handleOnSuccess = (token, metadata) => {
    const plaidData = {
      public_token: token,
      metadata: metadata,
    };
    this.props.addAccount(plaidData);
  };
  render() {
    const { user } = this.props.auth;
    const { accounts, accountsLoading } = this.props.plaid;
    let dashboardContent;
    // if there are are no accounts or accounts are loading, the spinner component will show
    if (accounts === null || accountsLoading) {
      dashboardContent = <Spinner />;
      dashboardContent = <p className="center-align">Loading...</p>;
    } else if (accounts.length > 0) {
      // User has accounts linked it goes to the accounts component
      dashboardContent = <Accounts user={user} accounts={accounts} />;
    } else {
      // User has no accounts linked the option to link acount, go to budget or logout appears
      dashboardContent = (
        <>
          {/* dashboard header image */}
          <div className="dashboard__header"></div>

          <div className="row dashboard__title">
            {/* this is the button to log out */}
            <div className="col s6">
              <button
                onClick={this.onLogoutClick}
                className="btn-flat waves-effect register__back"
              >
                <i className="material-icons left">keyboard_backspace</i> Log
                Out
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
                <b>Welcome,</b> {user.name.split(" ")[0]}
              </h4>
              <p className="flow-text grey-text text-darken-1">
                To get started, link your first bank account below
              </p>
            </div>
          </div>

          <div className="row center-align dashboard__buttonBox">
            {/* this is the button to link an account */}
            <div className="col s12 center-aligned">
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
                Link Account
              </PlaidLinkButton>
            </div>
            {/* this is the button to go to budget component */}
          </div>
        </>
      );
    }
    return (
      <>
        <div className="container dashboard">{dashboardContent}</div>;
      </>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  getAccounts: PropTypes.func.isRequired,
  addAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  plaid: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  plaid: state.plaid,
});
export default connect(mapStateToProps, {
  logoutUser,
  getAccounts,
  addAccount,
})(Dashboard);
