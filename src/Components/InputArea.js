import React from 'react';
import CodeMirror from 'react-codemirror';
import TextField from 'material-ui/TextField';

class InputArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    };
  }

  updateCode = (newCode) => {
    this.setState({
      code: newCode
    });
  }

  render() {
    const options = {
      lineNumbers: true, 
      mode: 'python'
    };

    return (
      <CodeMirror 
        ref="editor"
        value={this.state.code} 
        onChange={this.updateCode} 
        options={options}
      />
    )
  }
}

export default InputArea;
