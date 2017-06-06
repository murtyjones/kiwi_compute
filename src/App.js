import React, { Component } from 'react';

import CodeEditor from './Layouts/CodeEditor';
import { Container } from 'react-grid-system';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { kiwiGreen, kiwiLightGreen, kiwiPurple, kiwiLightPurple,
        kiwiDarkBlue, kiwiLightRed, kiwiWhite, kiwiYellow, kiwiTurq,
        kiwiOrange, kiwiLightBlue, kiwiDarkGreen } from './colors';

import logoPath from './assets/logo/logo.png';

const main_theme = getMuiTheme({
  palette: {
    primary1Color: kiwiGreen,
    primary2Color: kiwiLightPurple,
    accent1Color: kiwiPurple,
    accent2Color: kiwiLightGreen,
    textColor: kiwiLightPurple,
    alternateTextColor: kiwiLightPurple,
    canvasColor: kiwiPurple
    }
});

const alt_theme1 = getMuiTheme({
  palette: {
    primary1Color: kiwiDarkBlue,
    primary2Color: kiwiWhite,
    accent1Color: kiwiYellow,
    accent2Color: kiwiYellow,
    textColor: "white",
    alternateTextColor: "white",
    canvasColor: kiwiYellow
  }
});

const alt_theme2 = getMuiTheme({
  palette: {
    primary1Color: kiwiTurq,
    primary2Color: kiwiOrange,
    accent1Color: kiwiOrange,
    accent2Color: kiwiDarkGreen,
    textColor: kiwiLightBlue,
    alternateTextColor: kiwiLightBlue,
    canvasColor:  kiwiOrange
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {themeValue: 1, theme: main_theme};
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



  componentDidMount(){
    localStorage.setItem('loggedIn', false);
    localStorage.setItem('saveButtonClick', false);
  }

  render() {

    const styles = {
      dropdown: {
        alignItems: 'bottom',
        position: 'absolute',
        bottom: '20px',
        right: '0'
      },
      title: {
        lineHeight: 'none'
      },
      titleKiwi: {
        margin: '0px',
        padding: '0px',
        marginTop: '8px',
        letterSpacing: '3.8px',
        fontSize: '1.4em'
      },
      titleCompute: {
        margin: '0px',
        marginTop: '-4px',
        padding: '0px',
        fontSize: '.7em',
        letterSpacing: '.4px'
      }
    }

    return (
      <MuiThemeProvider muiTheme={this.state.theme}>
        <div>
          <AppBar
            iconElementLeft={
              <img
                height='60'
                alt='Kiwi Compute logo'
                src={logoPath}
              />
            }
            title={
              <div>
                <div style={styles.titleKiwi}>kiwi</div>
                <div style={styles.titleCompute}>compute</div>
              </div>
            }
            titleStyle={styles.title}
          >
            <DropDownMenu
              value={this.state.themeValue}
              onChange={this.handleThemeChange}
              style={styles.dropdown}
            >
              <MenuItem value={1} primaryText="kiwi" />
              <MenuItem value={2} primaryText="blueberry" />
              <MenuItem value={3} primaryText="lime" />
            </DropDownMenu>
          </AppBar>
          <Container fluid>
            <CodeEditor />
          </Container>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
