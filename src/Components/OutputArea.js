import React from 'react';
import {Card, CardText} from 'material-ui/Card';

class OutputArea extends React.Component {
  render() {
    const { editorOutput } = this.props;
    return (
      <Card className="output">
        <CardText>
          { editorOutput }
        </CardText>
      </Card>
    )
  }
}
export default OutputArea;
