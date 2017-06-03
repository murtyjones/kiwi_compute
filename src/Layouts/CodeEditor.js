/*
 *
 * CodeEditor
 *
 */

import React from 'react';
import skulpt from 'skulpt';
import Header from '../Components/Header';
import SkulptIO from '../Components/SkulptIO';

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

export default CodeEditor;
