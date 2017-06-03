/*
 *
 * CodeEditor
 *
 */

import React from 'react';
import Radium from 'radium';

const Header = require('../Components/Header');
const SkulptIO = require('../Components/SkulptIO');

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="kiwi">
        <Header />
        <SkulptIO />
      </div>
    );
  }
}

export default Radium(CodeEditor);
