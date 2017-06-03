const React = require('react');
const ErrorMessage = require('./ErrorMessage');
const InputArea = require('./InputArea');
const OutputArea = require('./OutputArea');

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

module.exports = SkulptIO;
