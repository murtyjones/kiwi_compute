/*
 *
 * ErrorMessage
 *
 */

import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';

const styles = {
  base: {
    backgroundColor: '#F44336',
    minHeight: '600px',
  },
};

function ErrorMessage (props) {
  const { errorMsg } = props;
  return (
    <Card style={styles.base}>
      <CardHeader
        title="ERROR:"
        subtitle={errorMsg}
        actAsExpander={true}
        titleColor={'white'}
        subtitleColor={'white'}
      />
    </Card>
  )
}

export default ErrorMessage;
