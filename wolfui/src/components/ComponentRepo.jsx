import React from 'react';


class Componentrepo extends React.Component {
    
    render() {
       
        return (
            
            <div class="demo-card-wide mdl-card mdl-shadow--2dp">
            <div class="mdl-card__supporting-text">
                  <center>  <img src={this.props.value} alt={this.props.value}/></center>
            </div>
            </div>
        );
    }
}



export default Componentrepo;
