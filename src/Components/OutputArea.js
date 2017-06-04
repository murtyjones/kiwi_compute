/*
 *
 * OutputArea
 *
 */

import React from 'react';
import { Card, CardText } from 'material-ui/Card';

import { introEditorOutput } from '../intro';

function OutputArea(props) {
  const { editorOutput } = props;
  return (
    <Card
      data-intro={introEditorOutput}
      data-step={3}
    >
      <CardText>
        <pre>
          { editorOutput }
        </pre>
      </CardText>
    </Card>
  )
}
export default OutputArea;
