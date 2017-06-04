/*
 *
 * CodeEditor
 *
 */

import React from 'react';
import skulpt from 'skulpt';
import { Row, Col } from 'react-grid-system';
import { introJs } from 'intro.js';
import 'intro.js/introjs.css';
import 'intro.js/themes/introjs-flattener.css';

import EditorControls from '../Components/EditorControls';
import ErrorMessage from '../Components/ErrorMessage';
import InputArea from'../Components/InputArea';
import OutputArea from '../Components/OutputArea';
import Resources from '../Components/Resources';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

let codeOutput = '';

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorInput: 'print "Write Your Code Here"',
      editorOutput: '',
      errorMsg: '',
      errorLine: null,
      isResourcesShowing: false,
      tabFocus: 'input'
    };
  }

  handleEditorChange = (value) => {
    this.setState({ editorInput: value });
  }

  handleFocusChange = (focused) => {
    const tabFocus = focused ? "input" : "output";
    this.setState({
      tabFocus: tabFocus
    });
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
        tabFocus: 'output'
      });
      codeOutput = '';
    }, (e) => {
      console.log('Error!', e);
      this.setState({
        errorMsg: e.toString(),
        errorLine: e.traceback[0].lineno,
        editorOutput: '',
        tabFocus: 'output'
      });
      codeOutput = '';
    });
  }

  runIntro = () => {
    introJs().start();
  }

  toggleResources = () => {
    this.setState({
      isResourcesShowing: !this.state.isResourcesShowing,
    });
  }

  render() {
    const { editorInput, editorOutput, errorMsg, errorLine, isResourcesShowing } = this.state;

    const inputLabel = this.state.tabFocus === 'input' ? 'Enter your Python code on here.' : '';
    const outputLabel = this.state.tabFocus === 'input' ? '' : 'Check out the results of your Python code here.';

    return (
      <div>
        <Resources
          show={isResourcesShowing}
          hide={this.toggleResources}
        />
        <Row>
          <Col md={12}>
            <EditorControls
              runCode={this.runCode}
              runIntro={this.runIntro}
              showResources={this.toggleResources}
            />
          </Col>
          <Col md={12}>
            <Tabs
              value={this.state.tabFocus}
              onChange={this.handleChange}
            >
               <Tab label={inputLabel} value="input">
               </Tab>
               <Tab label={outputLabel} value="output">
               </Tab>
              </Tabs>
              <Col md={6}>
                <InputArea
                  editorInput={editorInput}
                  updateFocus={this.handleFocusChange}
                  updateInput={this.handleEditorChange}
                  errorLine={errorLine}
                />
              </Col>
              <Col md={6}>
                <OutputArea
                  editorOutput={editorOutput}
                  errorMsg={errorMsg}
                />
              </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CodeEditor;
