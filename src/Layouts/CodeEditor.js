/*
 *
 * CodeEditor
 *
 */

import React from 'react';
import skulpt from 'skulpt';
import { Row, Col } from 'react-grid-system';
import { introJs } from 'intro.js';
import 'intro.js/introjs.css'

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
      errorLine: null,
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
        errorLine: null,
      });
      codeOutput = '';
    }, (e) => {
      console.log('Error!', e);
      this.setState({
        errorMsg: e.toString(),
        errorLine: e.traceback[0].lineno,
        editorOutput: '',
      });
    });
  }

  runIntro = () => {
    introJs().start();
  }

  render() {
    const { editorInput, editorOutput, errorMsg, errorLine } = this.state;
    return (
      <div>
        <Row>
          <Col md={12}>
            <EditorControls
              runCode={this.runCode}
              runIntro={this.runIntro}
            />
          </Col>
          <Col md={12}>
            <ErrorMessage errorMsg={errorMsg} />
          </Col>
          <Col md={6}>
            <InputArea
              editorInput={editorInput}
              updateInput={this.handleEditorChange}
              errorLine={errorLine}
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
