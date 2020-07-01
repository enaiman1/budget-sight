import React from 'react';
import "./Feature.scss";

const Feature =()=>{
    return  (
        <section className="features">

<div className="row ">
    <div className="col s12 m6 l3 center-align ">
      <div className="card feature-box ">
        <div className="card-content">
          <span className="card-title">All Accounts  one spot</span>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt adipisci ducimus quod veritatis</p>
        </div>
      </div>
    </div>
    <div className="col s12 m6 l3 center-align">
      <div className="card feature-box ">
        <div className="card-content">
          <span className="card-title">Simple Budget Tracking</span>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt adipisci ducimus quod veritatis.</p>
        </div>
      </div>
    </div>
   
    <div className="col s12 m6 l3 center-align">
      <div className="card feature-box ">
        <div className="card-content">
          <span className="card-title">Learn about Savings</span>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt adipisci ducimus quod veritatis</p>
        </div>
      </div>
    </div>
    <div className="col s12 m6 l3 center-align">
      <div className="card feature-box ">
        <div className="card-content">
          <span className="card-title">Live a healther life</span>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt adipisci ducimus quod veritatis</p>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Feature;