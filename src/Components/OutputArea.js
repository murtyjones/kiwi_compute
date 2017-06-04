/*
 *
 * OutputArea
 *
 */

import React from 'react';
import { Card, CardText } from 'material-ui/Card';

import ErrorMessage from './ErrorMessage';
import { introEditorOutput } from '../intro';

const styles = {
  base: {
    minHeight: '600px',
  },
}

function OutputArea(props) {
  const { editorOutput, errorMsg } = props;
  return (
    !errorMsg ? (
      <Card
        style={styles.base}
        data-intro={introEditorOutput}
        data-step={3}
        data-position={'auto'}
      >
        <CardText>
          <pre>
            { editorOutput }
          </pre>
        </CardText>
      </Card>
    ) : (
      <ErrorMessage
        style={styles.base}
        errorMsg={errorMsg}
      />
    )
  )
}
export default OutputArea;
