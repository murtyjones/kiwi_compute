import React, { Component } from 'react';
import CodeEditor from './Layouts/CodeEditor';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
  render() {
    return (
      <MuiThemeProvider muiTheme={main_theme}>
        <CodeEditor />
      </MuiThemeProvider>
    );
  }
}

export default App;
