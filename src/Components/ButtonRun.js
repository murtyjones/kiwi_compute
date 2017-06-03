import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';

class ButtonRun extends React.Component {
  runCode() {
    alert('RUN clicked');
  }

  render() {
    const { runCode } = this.props;
    return (
      <RaisedButton
        onClick={() => this.runCode()}
        label="START"
        labelPosition="before"
        primary={true}
        icon={<ActionAndroid />}
      />
    )
  }
}

export default ButtonRun;
