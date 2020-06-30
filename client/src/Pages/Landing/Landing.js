import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Landing.scss";
import Coin from "../../img/coin.png";
import BGV from "../../img/landing.mp4";
import Story from "./Story";
import Feature from "./Feature";
// import Footer from "../../components/Footer/Footer";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL: BGV,
    };
  }

  componentDidMount() {
    // if logged in, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <>
        <div className="landing">
          {/* video */}
          <video
            autoPlay="autoplay"
            loop="loop"
            muted
            className="landing__video"
          >
            <source src={this.state.videoURL} type="video/mp4" />
            <source src={this.state.videoURL} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          {/* Container that has header title, coin, register btn and log in btn */}
          <div className="landing__container ">
            <div className="row">
              <div className="col s12 m6 ">
                   {/* coin image  */}
                   <img
                    src={Coin}
                    className="responsive-img landing__container__coin"
                    alt="floating coin"
                  />
              </div>
              <div className="col s12 m6 ">
                <h1 className="flow-text landing__container__title ">
                  <b>Building</b> savings that <b>Saves</b> you{" "}
                </h1>
              </div>
              </div>
<div className="row center-align">
  {/* register btn */}
   <div className="col s12 m6 ">
                  <Link
                    to="/register"
                    className="btn btn-large waves-effect waves-light hoverable landing__container__btn"
                  >
                    Register
                  </Link>
                </div>

  {/* login btn */}
                <div className="col s12 m6">
                  <Link
                    to="/login"
                    className="btn btn-large waves-effect waves-light hoverable landing__container__btn"
                  >
                    Log IN
                  </Link>
                </div>
</div>
              
                
               
              
              
             
            
          </div>
        </div>

        {/* feature section Component*/}
        <Feature />
        {/* Story Component*/}

        <Story />
        

      </>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
