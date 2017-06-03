import React, { Component } from 'react';
import CodeEditor from './Layouts/CodeEditor';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <CodeEditor />
      </MuiThemeProvider>
    );
  }
}

export default App;
