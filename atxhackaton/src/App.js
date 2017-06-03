import React, { Component } from 'react';
import logo from './logo.svg';
import FontAwesome from 'react-fontawesome';
import './App.css';
import axios from 'axios';
import renderIf from 'render-if';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      rocketColor:"purple",
      username: '',
      password: '',
      loggedIn: false,
      signedUp: "false",
      ulogged: "false",
      text: ""
    }
  }

  iconclickHandler(e){
    e.preventDefault();
    console.log('clicky');
    if (this.state.rocketColor==="red"){
      this.setState({
        rocketColor:'purple'
      },
        console.log('this.state.rocketColor is ', this.state.rocketColor))
    }
    if (this.state.rocketColor==="purple"){
      this.setState({
        rocketColor:'red'
      },
        console.log('this.state.rocketColor is ', this.state.rocketColor))
    }
  }


  loginHandle(e){
    e.preventDefault();
    console.log('inside loginHandle');
    axios.post('http://localhost:5000/login',{
      username: this.state.username,
      password: this.state.password
    })
      .then((response)=>{
          console.log('response from the login ' , response);
          if (response.data==="passwordsmatch"){
            this.setState({
              loggedIn: true,
              ulogged: "loggedin"
            })
          }
          if (response.data==="passwordsdontmatch"){
            this.setState({
              loggedIn: false,
              ulogged: "error"
            })
          }
        });
  }


  saveText(e){
    e.preventDefault();
    axios.post('http://localhost:5000/savetext',{
      username: this.state.username,
      password: this.state.password,
      text:  this.state.text
    })
      .then((response)=>{
          console.log('response from the signup ' , response);
          this.setState({
            text: ''
          })
        });
  }


  signupHandle(e){
    e.preventDefault();
    console.log('inside signupHandle');
    axios.post('http://localhost:5000/signup',{
      username: this.state.username,
      password: this.state.password
    })
      .then((response)=>{
          console.log('response from the signup ' , response);
          if (response.data==="statusreject"){
            this.setState({
              loggedIn: false,
              signedUp: "error"
            })
          }
          if (response.data === "profileposted")
            this.setState({
              loggedIn: true,
              signedUp: "signedup",
            })
        });
  }




  render() {


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.</p>
          {renderIf(this.state.rocketColor === 'purple')(
            <FontAwesome
               className='rocketface'
               onClick={(e)=>this.iconclickHandler(e)}
               name='rocket'
               size='2x'
               style={{ color: "red" }}
             />
          )}
          {renderIf(this.state.rocketColor === 'red')(
            <FontAwesome
               className='rocketface'
               onClick={(e)=>this.iconclickHandler(e)}
               name='cog'
               size='2x'
               spin
               style={{ color: "purple" }}
             />
          )}


          <form>
              <input
                      onChange={(e)=>this.setState({username: e.target.value })}
                      type="text"
                      name="username"
                      id="username"
                      placeholder="username"/>
              <input
                      onChange={(e)=>this.setState({password: e.target.value })}
                      type="text"
                      name="password"
                      id="password"
                      placeholder="password"/>
              <button onClick={(e)=>this.loginHandle(e)}>Login!</button>
              <button onClick={(e)=>this.signupHandle(e)}>Sign Up!</button>
          </form>



            {renderIf(this.state.loggedIn === true)(
              <div>
                <p>You are successfully logged in !</p>
                <form>
                  <textarea rows="4" cols="50"
                          onChange={(e)=>this.setState({text: e.target.value })}
                          name="text"
                          id="text"
                          value={this.state.text}
                          placeholder="text"
                  ></textarea>
                  <button onClick={(e)=>this.saveText(e)}>Save Text!</button>
                </form>
              </div>
            )}
            {renderIf(this.state.loggedIn === false)(
                <p>You are not logged in !</p>
            )}

      </div>
    );
  }
}

export default App;
