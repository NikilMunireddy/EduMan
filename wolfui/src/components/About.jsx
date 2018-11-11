import React from 'react';
import Donate from '../images/frontend_dribbble.gif'

class About extends React.Component {
    render() {
        return (
            <div class="mdl-card__supporting-text">
             <div class = "mdl-grid">
               <div class = "mdl-cell mdl-cell--6-col ">
                  <img src={Donate} alt="Donate"/>
                 
            </div>
            <div class = "mdl-cell mdl-cell--6-col ">
                  <p><strong>EduMan</strong> is a open source project please contibute your code and make the application better than before.</p>
                  <br></br>
                  <p>The source code is avalilabe on GitHub <a href="https://github.com/NikilMunireddy/EduMan">EduMan</a></p>
            </div>
            </div>
            </div>
        );
    }
}



export default About;
