const React = require('react');

class OutputArea extends React.Component {
  render() {
    const { editorOutput } = this.props;
    return (
      <pre className="output">{ editorOutput }</pre>
    )
  }
}

module.exports = OutputArea;
