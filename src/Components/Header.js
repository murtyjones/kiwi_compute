import React from 'react';
import Run from './ButtonRun';
import Save from './ButtonSave';
import Tips from './ButtonTips';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Run />
        <Save />
        <Tips />
      </div>
    )
  }
}

export default Header;
