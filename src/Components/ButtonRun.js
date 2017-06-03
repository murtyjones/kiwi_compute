const React = require('react');

class ButtonRun extends React.Component {

  runCode() {
    alert('RUN clicked');
  }

  render() {
    return (
      <button onClick={() => this.runCode()}>
        RUN
      </button>
    )
  }
}

module.exports = ButtonRun;
