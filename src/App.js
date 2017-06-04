import React, { Component } from 'react';
import CodeEditor from './Layouts/CodeEditor';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import renderIf from 'render-if';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      username: '',
      password: '',
      loggedIn: false,
      loginId: ''
    }
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
          if (response.data.status==="statusreject"){
            this.setState({
              loggedIn: false,
              signedUp: "error"
            })
          }
          if (response.data.status === "profileposted")
            this.setState({
              loggedIn: true,
              signedUp: "signedup",
              loginId: response.data.postid
            })
        });
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
          if (response.data.status==="passwordsmatch"){
            this.setState({
              loggedIn: true,
              ulogged: "loggedin",
              loginId: response.data.postid
            })
          }
          if (response.data.status==="passwordsdontmatch"){
            this.setState({
              loggedIn: false,
              ulogged: "error"
            })
          }
        });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
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
            <CodeEditor loginId={this.state.loginId}/>
          )}
          {renderIf(this.state.loggedIn === false)(
            <p>please log in to get to the code editor!</p>
          )}

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
