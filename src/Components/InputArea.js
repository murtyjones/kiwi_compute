import React from 'react';
import CodeMirror from 'react-codemirror';
import TextField from 'material-ui/TextField';
import 'codemirror/lib/codemirror.css';

const options = {
  lineNumbers: true,
  mode: 'python'
};

class InputArea extends React.Component {
  render() {
    return (
      <CodeMirror
        ref="editor"
        value={this.props.editorInput}
        onChange={this.props.inputUpdate}
        options={options}
      />
    )
  }
}

export default InputArea;
