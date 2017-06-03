import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';

class ButtonRun extends React.Component {
  render() {
    const { runCode } = this.props;
    return (
      <RaisedButton
        onClick={runCode}
        label="START"
        labelPosition="before"
        primary={true}
        icon={<ActionAndroid />}
      />
    )
  }
}

export default ButtonRun;
