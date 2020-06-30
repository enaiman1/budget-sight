import React from 'react';
import "./Story.scss";

import ManyCoins from "../../img/story-coins.jpg";
import Couple from "../../img/story-couple.jpg";

const Story =()=>{
    return(
     <section className="story">
       {/* <div className="container"> */}
     <div className="row">
       {/* left side that feature picture */}
       <div className="story__left col s6">
         <div className="row">
         <div className="col s8">
           <img
             src={Couple}
             alt="Couple enjoying life"
             class="story__img--1"
           />
         </div>
         <div className="col s4">
           <img
             src={ManyCoins}
             alt="Piggy bank with money"
             class="story__img--2"
           />
         </div>
         </div>
       </div>

       {/* right side that feature text */}
       <div className="story__right col s6">
         <div className="container valign-wrapper">
           <div className="row">
             <div className="col s12 center-align">
               <h2 className="story__header">Happy Savers make us happy</h2>
             </div>
             <div className="col s12 center-align">
             <h2 className="story__title">
               &ldquo;The best decision of our lives &rdquo;
             </h2>
             </div>
             <div className="col s12">
             <p className="story__text">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Tenetur distinctio necessitatibus pariatur voluptatibus.
               Quidem consequatur harum volupta!

             </p> 
             </div>
           </div>
         </div>
       </div>
     </div>
     {/* </div> */}
   </section>
   
)
}

export default Story