/*
 *
 * OutputArea
 *
 */

import React from 'react';
import { Card, CardText } from 'material-ui/Card';

function OutputArea(props) {
  const { editorOutput } = props;
  return (
    <Card className="output">
      <CardText>
        <pre>
          { editorOutput }
        </pre>
      </CardText>
    </Card>
  )
}
export default OutputArea;
