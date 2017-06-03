const React = require('react');

class ButtonRun extends React.Component {

  runCode() {
    alert('RUN clicked');
  }

  render() {
    const { runCode } = this.props;
    return (
      <button onClick={runCode}>
        RUN
      </button>
    )
  }
}

module.exports = ButtonRun;
