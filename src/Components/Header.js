const React = require('react');
const Run = require('./ButtonRun');
const Save = require('./ButtonSave');
const Tips = require('./ButtonTips');

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

module.exports = Header;
