import React from 'react';
import Run from './ButtonRun';
import Save from './ButtonSave';
import Tips from './ButtonTips';

class Header extends React.Component {
  render() {
    const { runCode } = this.props;
    return (
      <div>
        <Run
          runCode={runCode}
        />
        <Save />
        <Tips />
      </div>
    )
  }
}

export default Header;
