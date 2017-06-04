import React from 'react';
import ErrorMessage from './ErrorMessage';
import InputArea from'./InputArea';
import OutputArea  from './OutputArea';

class SkulptIO extends React.Component {
  render() {
    const { editorInput, editorOutput, inputUpdate, errorMsg } = this.props;
    return (
      <div>
        <ErrorMessage msg={errorMsg} />
        <InputArea
          editorInput={editorInput}
          inputUpdate={inputUpdate}
        />
        <OutputArea
          editorOutput={editorOutput}
        />
      </div>
    )
  }
}

export default SkulptIO;
