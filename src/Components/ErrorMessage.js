import React from 'react';

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

export default ErrorMessage;
