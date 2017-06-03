const React = require('react');

class ErrorMessage extends React.Component {
  render() {
    return (
      this.props.msg ? (
        <p>ERROR: {this.props.msg}</p>
      ) : (
        <p></p>
      )
    )
  }
}

module.exports = ErrorMessage;
