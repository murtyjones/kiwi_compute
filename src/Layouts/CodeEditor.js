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

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorInput: '',
      editorOutput: '',
      errorMsg: '',
    };
  }

  handleEditorChange = (value) => {
    console.log(value);
    this.setState({ editorInput: value });
  }

  lineExecuteSuccess = (text) => {
    this.setState({
      editorOutput: this.state.editorOutput + text,
    });
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
    // try {
    //   // eslint-disable-next-line
    //   eval(skulpt.importMainWithBody("<stdin>", false, programToRun));
    // }
    // catch(e) {
    //   this.setState({
    //     errorMsg: e.toString(),
    //     editorOutput: '',
    //   });
    // }

    var myPromise = skulpt.misceval.asyncToPromise(function() {
      return skulpt.importMainWithBody("<stdin>", false, programToRun, true);
    });
    myPromise.then(() => {
      this.setState({
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
