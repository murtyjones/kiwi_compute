/*
 *
 * Resources
 *
 */

import React from 'react';
import { Row, Col } from 'react-grid-system';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardHeader, CardText } from 'material-ui/Card';

import { resources } from '../resources';

const styles = {
  base: {
    width: '95%',
    maxWidth: 'none',
  },
  cards: {
    marginTop: '10px',
  },
};

function Resources(props) {
  const { show, hide } = props;
  const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={hide}
      />,
    ];
  const len = resources.length;
  const mid = resources.length / 2;
  const leftCol = resources.slice(0, mid);
  const rightCol = resources.slice(mid, len);
  return (
    <Dialog
      title="Python Resources!"
      actions={actions}
      modal={false}
      open={show}
      onRequestClose={hide}
      contentStyle={styles.base}
      autoScrollBodyContent={true}
    >
      <Row>
        <Col md={6}>
          {
            leftCol.map((resource, index) => {
              return (
                <Card style={styles.cards}>
                  <CardHeader
                    title={resource.title}
                    subtitle={resource.description}
                  />
                  <CardText>
                    <pre>
                      {resource.code}
                    </pre>
                  </CardText>
                </Card>
              )
            })
          }
        </Col>
        <Col md={6}>
          {
            rightCol.map((resource, index) => {
              return (
                <Card style={styles.cards}>
                  <CardHeader
                    title={resource.title}
                    subtitle={resource.description}
                  />
                  <CardText>
                    <pre>
                      {resource.code}
                    </pre>
                  </CardText>
                </Card>
              )
            })
          }
        </Col>
      </Row>
    </Dialog>
  )
}
export default Resources;
