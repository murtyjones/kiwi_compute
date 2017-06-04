/*
 *
 * CodeEditor
 *
 */

import React from 'react';
import skulpt from 'skulpt';
import Header from '../Components/Header';
import SkulptIO from '../Components/SkulptIO';
import axios from 'axios';

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorInput: '',
      editorOutput: '',
      errorMsg: '',
      userId:'',
      text:'',
      retrieved:true
    };
  }

  handleEditorChange = (value) => {
    this.setState({editorInput: value});
  }

  codeRunSuccess = (text) => {
    if (text.length > 1) {
      this.setState({
        editorOutput: text,
        errorMsg: '',
      });
    }
  }

  builtinRead = (x) => {
    if (skulpt.builtinFiles === undefined || skulpt.builtinFiles["files"][x] === undefined)
      // eslint-disable-next-line
      throw "File not found: '" + x + "'";
    return skulpt.builtinFiles["files"][x];
  }


  runCode = () => {
    const programToRun = this.state.editorInput;
    skulpt.canvas = "mycanvas";
    skulpt.pre = "output";
    skulpt.configure({output:this.codeRunSuccess, read:this.builtinRead});
    try {
      // eslint-disable-next-line
      eval(skulpt.importMainWithBody("<stdin>", false, programToRun));
    }
    catch(e) {
      this.setState({
        errorMsg: e.toString(),
        editorOutput: '',
      });
    }
  }

      saveText=(e)=>{
      e.preventDefault();
      console.log('inside savetext and the value of this.state.editorInput is ', this.state.editorInput);
      axios.post('http://localhost:5000/savetext',{
        userId:  this.props.loginId,
        text: this.state.editorInput
      })
        .then((response)=>{
            console.log('response from the signup ' , response);
            this.setState({
              text: ''
            })
          });
    }

    retrieveText(e){
      var self = this;
      e.preventDefault();
      axios.post('http://localhost:5000/retrieveText',{
        userId: this.props.loginId,
      })
        .then((response)=>{
          console.log('response from retrieveText is ', response);
            if (response.data.returnTexts.length>0){
              self.setState({
                returnTexts: response.data.returnTexts,
                retrieved: true
              })
            }
          });
    }

  render() {
    return (
      <div>
        <Header
          runCode={this.runCode}
        />
        <SkulptIO
          editorInput={this.state.editorInput}
          editorOutput={this.state.editorOutput}
          inputUpdate={this.handleEditorChange}
          errorMsg={this.state.errorMsg}
        />
        <form>
          <button onClick={(e)=>this.saveText(e)}>Save Code!</button>
          <button onClick={(e)=>this.retrieveText(e)}>Retrieve Code!</button>
        </form>
      </div>
    );
  }
}

export default CodeEditor;
