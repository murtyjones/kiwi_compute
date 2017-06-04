import React from 'react';
import ErrorMessage from './ErrorMessage';
import InputArea from'./InputArea';
import OutputArea  from './OutputArea';
import { Row, Col } from 'react-grid-system';

class SkulptIO extends React.Component {
  render() {
    const { editorInput, editorOutput, inputUpdate, errorMsg } = this.props;
    return (
      <Row>
        <Col md={12}>
          <ErrorMessage msg={errorMsg} />
        </Col>
        <Col md={6}>
          <InputArea
            editorInput={editorInput}
            inputUpdate={inputUpdate}
          />
        </Col>
        <Col md={6}>
          <OutputArea
            editorOutput={editorOutput}
          />
        </Col>
      </Row>
    )
  }
}

export default SkulptIO;
