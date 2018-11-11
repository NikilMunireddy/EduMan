import React, { Component } from 'react';
import Componentrepo from './ComponentRepo'
import CardResponse from './CardResponse'
import ReactDOM from 'react-dom'
import img from '../images/doc.gif'

import './new.css'
import io from 'socket.io-client';
const IO_URL='http://192.168.1.8:5000'

const socket = io(IO_URL);


class App extends Component {
  constructor(){
    super();
    this.state={
      val:"",
      msg:"",
      sock:[],
      isContent:false,
      displayMessage:"Enter your Query in the input space below"
    }
    this.handelChange=this.handelChange.bind(this);
    this.clicked=this.clicked.bind(this);
    this.buttonClick=this.buttonClick.bind(this)
  }
  handelChange(event){
    this.setState({val:event.target.value})
  }
  buttonClick(e){
    socket.emit('message',this.state.val)
    
  }
  clicked(e){
    this.setState({msg:this.state.val})
    const val=this.state.val

    this.setState({sock:[]})
    if(val!=='' && e.keyCode=== 13){
      console.log('emit')
      this.setState({displayMessage:"The Elders of the Internet are contemplating your request..."})
     //The Elders of the Internet are contemplating your request...
     //Baking cake...er...I mean loading, yeah loading...
     //I'll be with you in a bit...(snicker)
     //I'm quite drunk, loading might take a little more time than the usual! Please be patient....     
     //Checking prime directives: Serve the public trust...Protect the innocent...Uphold the law...Classified....
      //https://gist.github.com/ClintonLang/399a539046e21083ffe99cd7f5369788
      socket.emit('message',val)
    }
  }
  
  componentDidMount(){
    socket.on('subpod',(msg)=>{
      console.log(msg)
      this.setState({isContent:true})
      console.log('-------------------------')
      this.state.sock.push(msg)
      var prev=this.state.sock;
      var updated=prev.filter((val)=>{return val!==null})
      this.setState({sock:updated})
      if(this.state.isContent){
         var objectList=this.state.sock;
        const doubled = objectList.map((url) => 
         <Componentrepo key={url} value={url}/>)
          ReactDOM.render(<CardResponse doubled= {doubled}/>,document.getElementById('root'));
      }
    })
  }
  
  render() {
    return (
      <div >
        <div class="mdl-card__supporting-text">
        <h3>{this.state.displayMessage}</h3>
        <img src={img} alt="gif lost in web"/>
        </div>
          <div className=" card sticky">
        <div class="mdl-card__actions mdl-card--border">
    <form action="#">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input wide" type="text" id="sample3" autocomplete="off" value={this.state.val} onChange={this.handelChange} onKeyUp={this.clicked} />
        <label class="mdl-textfield__label" for="sample3">Enter query and press "Enter" to submit</label>
      </div>

    </form>
  </div> 
      </div>
      </div>
    );
  }
}

export default App;