const React = require('react');

class ErrorMessage extends React.Component {
  render() {
    return (
      <p>ERROR: {this.props.msg}</p>
    )
  }
}

module.exports = ErrorMessage;
