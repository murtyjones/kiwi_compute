const React = require('react');

class InputArea extends React.Component {

  render() {
    return (
      <textarea placeholder="input" onChange={this.props.inputUpdate}>
        { this.props.editorInput }
      </textarea>
    )
  }
}

module.exports = InputArea;
