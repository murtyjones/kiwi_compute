import React, { Component } from 'react';

import CodeEditor from './Layouts/CodeEditor';
import { Container } from 'react-grid-system';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { kiwiGreen, kiwiLightGreen, kiwiPurple, kiwiLightPurple,
        kiwiDarkBlue, kiwiLightRed, kiwiWhite, kiwiYellow, kiwiLimeGreen,
        kiwiPastel, kiwiLightBlue, kiwiDarkGreen } from './colors';

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
    accent1Color: kiwiLightRed,
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

  render() {
    return (
      <MuiThemeProvider muiTheme={this.state.theme}>
        <div>
          <AppBar
            title="Kiwi Compute"
            showMenuIconButton={false}
          >
            <DropDownMenu value={this.state.themeValue} onChange={this.handleThemeChange}>
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
