import React, {Component} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { logoutUser } from "../../Redux/actions/authActions";

import "./BudgetHeader.scss";

class BudgetHeader extends Component{
    onLogoutClick = (e) => {
        e.preventDefault();
        this.props.logoutUser();
      };
render(){
    return (
        <>
        <div className="row budgetHeader"> </div>
        <div className="container">
             <div className="row">
            {/* this is the button to log out */}
        <div className="col s6 left-align">
            <button
              onClick={this.onLogoutClick}
              className="btn-flat waves-effect register__back"
            >
              <i className="material-icons left">keyboard_backspace</i> Log Out
            </button>
          </div>
 {/* button to go to dashboard component */}
          <div className="col s6 right-align">
            <Link to="/dashboard">
              <button className="btn-flat waves-effect dashboard__toBudget">
                <i className="material-icons right">arrow_right_alt</i> Dashboard
              </button>
            </Link>
          </div>
        </div>
        </div>
     
        </>
    )
}

}

BudgetHeader.propTypes ={
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    plaid: state.plaid,
  });

export default connect(mapStateToProps, {logoutUser})(BudgetHeader);