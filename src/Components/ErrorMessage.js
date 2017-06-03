import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';

class ErrorMessage extends React.Component {
  render() {
    return (
      this.props.msg ? (
        <Card>
          <CardHeader
            title="ERROR:"
            subtitle={this.props.msg}
            actAsExpander={true}
          />
        </Card>
      ) : (
        <p></p>
      )
    )
  }
}

export default ErrorMessage;
