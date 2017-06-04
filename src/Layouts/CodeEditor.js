/*
 *
 * CodeEditor
 *
 */

import React from 'react';
import skulpt from 'skulpt';
import { Row, Col } from 'react-grid-system';

import EditorControls from '../Components/EditorControls';
import ErrorMessage from '../Components/ErrorMessage';
import InputArea from'../Components/InputArea';
import OutputArea  from '../Components/OutputArea';

let codeOutput = '';

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorInput: 'print "Test"',
      editorOutput: '',
      errorMsg: '',
    };
  }

  handleEditorChange = (value) => {
    this.setState({ editorInput: value });
  }

  lineExecuteSuccess = (text) => {
    codeOutput = codeOutput + text;
  }

  builtinRead = (x) => {
    if (skulpt.builtinFiles === undefined || skulpt.builtinFiles["files"][x] === undefined)
      this.setState({
        errorMsg: 'Something Went Wrong! Please Refresh!',
      });
    return skulpt.builtinFiles["files"][x];
  }

  runCode = () => {
    const programToRun = this.state.editorInput;
    skulpt.canvas = "mycanvas";
    skulpt.pre = "output";
    skulpt.configure({output:this.lineExecuteSuccess, read:this.builtinRead});
    var myPromise = skulpt.misceval.asyncToPromise(function() {
      return skulpt.importMainWithBody("<stdin>", false, programToRun, true);
    });
    myPromise.then(() => {
      this.setState({
        editorOutput: codeOutput,
        errorMsg: '',
      });
    }, (e) => {
      console.log('Error!', e);
      this.setState({
        errorMsg: e.toString(),
        editorOutput: '',
      });
    });
  }

  render() {
    const { editorInput, editorOutput, errorMsg } = this.state;
    return (
      <div>
        <Row>
          <Col md={12}>
            <EditorControls
              runCode={this.runCode}
            />
          </Col>
          <Col md={12}>
            <ErrorMessage errorMsg={errorMsg} />
          </Col>
          <Col md={6}>
            <InputArea
              editorInput={editorInput}
              updateInput={this.handleEditorChange}
            />
          </Col>
          <Col md={6}>
            <OutputArea
              editorOutput={editorOutput}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default CodeEditor;
