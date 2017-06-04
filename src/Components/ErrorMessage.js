/*
 *
 * ErrorMessage
 *
 */

import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';

const styles = {
  card: {
    backgroundColor: '#F44336',
    marginTop: '10px',
    marginBottom: '10px',
  },
};

function ErrorMessage (props) {
  const { errorMsg } = props;
  return (
    errorMsg ? (
      <Card style={styles.card}>
        <CardHeader
          title="ERROR:"
          subtitle={errorMsg}
          actAsExpander={true}
          titleColor={'white'}
          subtitleColor={'white'}
        />
      </Card>
    ) : (
      <p></p>
    )
  )
}

export default ErrorMessage;
