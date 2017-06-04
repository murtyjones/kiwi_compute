import React, { Component } from 'react';
import CodeEditor from './Layouts/CodeEditor';
import { Container } from 'react-grid-system';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import BottomNavigation from 'material-ui/BottomNavigation';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import axios from 'axios';
import renderIf from 'render-if';

import {kiwiGreen, kiwiLightGreen, kiwiPurple, kiwiLightPurple, kiwiBlue,
        kiwiDarkBlue, kiwiLightRed, kiwiWhite, kiwiYellow, kiwiLimeGreen,
        kiwiPastel, kiwiLightBlue, kiwiDarkGreen} from './colors';

const main_theme = getMuiTheme({
  palette: {
    primary1Color: kiwiPurple,
    primary2Color: kiwiLightPurple,
    accent1Color: kiwiGreen,
    accent2Color: kiwiLightGreen
  }
});

const alt_theme1 = getMuiTheme({
  palette: {
    primary1Color: kiwiDarkBlue,
    primary2Color: kiwiLightRed,
    accent1Color: kiwiWhite,
    accent2Color: kiwiYellow
  }
});

const alt_theme2 = getMuiTheme({
  palette: {
    primary1Color: kiwiLimeGreen,
    primary2Color: kiwiPastel,
    accent1Color: kiwiLightBlue,
    accent2Color: kiwiDarkGreen
  }
});



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      username: '',
      password: '',
      loggedIn: false,
      loginId: '',
      themeValue: 1,
      theme: main_theme
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

  handleThemeChange = (event, index, value) => {
  switch (value) {
    case 1:
      this.setState({themeValue:1, theme: main_theme})
      break;
    case 2:
      this.setState({themeValue:2, theme: alt_theme1})
      break;
    case 3:
      this.setState({themeValue:3, theme: alt_theme2})
      break;
    default:
      this.setState({themeValue:1, theme: main_theme})
  }
  this.setState({value});
}

  render() {
    return (
      <MuiThemeProvider muiTheme={main_theme}>
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
          <div>
            <Container fluid>
              <CodeEditor  loginId={this.state.loginId}/>
            </Container>
            <AppBar showMenuIconButton={false}>
              <DropDownMenu value={this.state.themeValue} onChange={this.handleThemeChange}>
                <MenuItem value={1} primaryText="Kiwi" />
                <MenuItem value={2} primaryText="Midnight" />
                <MenuItem value={3} primaryText="Daylight" />
              </DropDownMenu>
            </AppBar>
          </div>
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
