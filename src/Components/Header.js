const React = require('react');
const Run = require('./ButtonRun');
const Save = require('./ButtonSave');
const Tips = require('./ButtonTips');

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

module.exports = Header;
