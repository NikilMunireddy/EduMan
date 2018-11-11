import React from 'react';
import img from '../images/brainvstech.gif'
import './new.css'

class Intro extends React.Component {
    render() {
        return (
            <div class="demo-card-wide mdl-card mdl-shadow--2dp">
            <div class="mdl-card__supporting-text">
            <main class = "mdl-layout__content">    
            <div class = "mdl-grid">
               <div class = "mdl-cell mdl-cell--6-col ">

                 <img src={img} alt="kick.gif"/>

               </div>
               <div class = "mdl-cell mdl-cell--6-col ">
              <center><h2>EduMan</h2></center>
              <p>EduMan is a simple web application that can serach solve almost anything.<br>
              </br>It can solve complex mathematical problems like Integration, Differentiation ,it can also provide current weather in your place.<br></br>
                EduMan can answer any type of question, it could be history, geography, math, chemistry, physics, biology, general knowledge, 
                 about famous personality.
                 EduMan prodives only information that you need with maximum precision.
             </p>
               </div>
            </div>
            </main>
            </div>
            </div>
        );
    }
}


export default Intro;
