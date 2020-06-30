import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { setCurrentUser, logoutUser } from "./Redux/actions/authActions";
import store from "./store";
// authorization
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
// components
import Register from './components/auth/Register/Register';
import Login from "./components/auth/Login/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./Pages/Landing/Landing";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Budget from "./Pages/Budget/Budget";
import Footer from "./components/Footer/Footer"
// import "./App.scss";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
        <Navbar />
        
        <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/budget" component={Budget} />
            </Switch>
            <Footer />
            </div>
      </Router>
      </Provider>
    );
  }
}
export default App;